//TRANSFER FUNDS:
//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const transactionID = require ( '../../middleware/util/transactionId');

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
            //Checking transfer amount to be int:
            if ( typeof transferAmount !== 'number') {
                res
                .status (403)
                .json ( {
                    message: ' Transfer amount must be a number!'
                });
                return;
            };
            if (transferAmount <= 0) {
                res
                .status (403)
                .json ( {
                    message: ' Transfer amount must be more than zero!',
                });
                return;
            };
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
                //Record transaction to database:
                knex ('transactions').insert ( {
                    transID: transactionID (),
                    trans_amount: transferAmount,
                    trans_type: 'Received',
                    accountID: recipient[0].accountID,
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
                //Updating transfering account balance:
                const updatedSenderBalance = rows[0].balance - transferAmount;
                knex ( 'accounts').where ( {accountID: rows[0].accountID})
                .update ( {balance: updatedSenderBalance})
                .then ( (data) => {

                    //Recordin transaction:
                    knex ('transactions').insert ( {
                        transID: transactionID (),
                        trans_amount: transferAmount,
                        trans_type: 'Transfer',
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
                //     res
                // .status (200)
                // .json({
                //     message1: `${data} ${ data > 1 ? 'items' : 'item'} updated successfully!`,
                //     message2: `${data2} ${ data2 > 1 ? 'items' : 'item'} updated successfully!`,
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