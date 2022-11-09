//WITHDRAW FUNDS:


//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const transactionID = require ( '../../middleware/util/transactionId');

//WITHDRAW FUNDS FUNCTION:
const withdrawFund = (req, res) => {
    const user = req.user.id;
    knex('accounts').where ( {accountID:user})
    .then ( (rows) => {
        const {withdrawalAmount} = req.body;
        if ( typeof withdrawalAmount !== 'number') {
            res
            .status (404)
            .json ( {
                message: "withdraw amount must be a number",
            });
            return;
        };

        //Users can not withdraw 0 or less than zero:
        if ( withdrawalAmount <=  0) {
            res
            .status (403)
            .json ({
                message: " You can not withdraw 0 or less than zero",
            });
            return;
        };
        //Users can not withdraw more than their balance:
        if ( withdrawalAmount > rows[0].balance){
            res
            .status (403)
            .json ({
                message: "Insufficient funds",
            });
            return;
        };
        //Perfomring withdrawal transaction:
        const afterWithdrawalBalance = rows[0].balance - withdrawalAmount;
        //Updating DB balance after the transaction:
        knex ('accounts').where ( {accountID: rows[0].accountID})
        .update ( {balance: afterWithdrawalBalance})
        .then ( (data) => {
            
            //Record transaction to database:
            knex ('transactions').insert ( {
                transID: transactionID (),
                trans_amount: withdrawalAmount,
                trans_type: 'Withdrawal',
                accountID: rows[0].accountID,
                trans_date: new Date ()
            })
            .then ( (data2) => {
                 res
                .status (200)
                .json ( {
                  message: [
                    `${data} ${data > 1 ? 'Items' : 'Item'} updated successfully`,
                    `Transaction recorded successfully`,
                ],
               });
            })
            .catch ( (error) => {
                res
                .status (500)
                .json ({
                    error: error.message,
                });
            });
            // res
            // .status (200)
            // .json ( {
            //     message: `${data} ${ data > 1 ? 'items' : 'item'} updated successfully!`,
            // });
        })
        .catch ( (error) => {
            res
            .status (500)
            .json ( {
                error: error.message,
            });
        });
    })
    .catch ( (error) => {
        res
        .status (500)
        .json ( {
            error: error.message,
        });
    });
};

//EXPORT WITHDRAW FUNDS FUNCTION:
module.exports = withdrawFund;