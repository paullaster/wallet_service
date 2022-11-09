//TRANSFER FUNDS:
//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');

//TRANSFER FUNDS FUNCTION:
const transferFund = (req, res) => {
    const user = req.user.id;
    //Finding the user account details:
    knex ('accounts').where ( {accountID: user})
    .then ( (rows) => {
        const {recipientAccount, transferAmount} = req.body;

         //Users cannot transfer funds to their own accounts:
         if (rows[0].accountID === recipientAccount) {
            res
            .status (403)
            .json ( {
                message: ' You can not transfer funds to own account!',
            });
            return;
        };
        //Finding recipient account details:
        knex ('accounts').where ( {accountID: recipientAccount})
        .then ( (recipient) => {
            //Checking if the user have enough funds to transfer:
            if (transferAmount > rows[0].balance) {
                res
                .status (403)
                .json ( {
                    message: "Insufficient funds",
                });
                return;
            };

            //Setting new account balance for recipient account:
            const recipientBalance = recipient[0].balance + transferAmount;
            knex ('accounts').where ( {accountID: recipient[0].accountID} )
            .update ({balance: recipientBalance})
            .then ( (data) => {

                //Updating transfering account balance:
                const updatedSenderBalance = rows[0].balance - transferAmount;
                knex ( 'accounts').where ( {accountID: rows[0].accountID})
                .update ( {balance: updatedSenderBalance})
                .then ( (data2) => {
                    res
                .status (200)
                .json({
                    message1: `${data} ${ data > 1 ? 'items' : 'item'} updated successfully!`,
                    message2: `${data2} ${ data2 > 1 ? 'items' : 'item'} updated successfully!`,
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
            })
        });
    })
    .catch ( (error) => {
        res
        .status (500)
        .json ({
            error: error.message,
        });
    });
};

//EXPORT TRNASFER FUNDS FUNCTION:
module.exports = transferFund;