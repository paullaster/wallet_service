//FUND ACCOUNTS:

//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const transactionID = require ( '../../middleware/util/transactionId');
//
const accountFunding = (req, res) => {
    const user = req.user.id;
    knex('accounts').where ({accountID: user})
    .then ( (rows) => {
        //Getting old account balance:
        const initialBalance = rows[0].balance;
        const {amount} =req.body;
        //funding amount can only be a number and must be greater than zero:
        if ( typeof amount !== 'number') {
            res
            .status (403)
            .json ({
                message: 'Amount must be a number!'
            });
            return;
        };

        if ( amount <= 0) {
            res
            .status (403)
            .json ( {
                message: ' Amount must be more than zero!'
            });
            return;
        };
        //setting new account balance
        const newAccountBalance = initialBalance + amount;
        knex ('accounts').where ( {accountID:rows[0].accountID})
        .update ( {balance:newAccountBalance})
        .then ( (data) => {
            knex ('transactions').insert ( {
                transID: transactionID (),
                trans_amount: amount,
                trans_type: 'Deposit',
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
        })
        .catch ( (error) => {
            res
            .status (500)
            .json ( {
                error: error.message,
            });
        });
    })
    .catch ( (err) => {
        res
        .status (400)
        .json ( {
            error: err.message
        });
    });

};

//EXPORT FUND ACCOUNTS:
module.exports = accountFunding;