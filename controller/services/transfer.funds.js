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
            res.json({
                recipient
            })
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