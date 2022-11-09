//FUND ACCOUNTS:

//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const accountFunding = (req, res) => {
    const user = req.user.id;
    knex('accounts').where ({accountID: user})
    .then ( (rows) => {
        //Getting old account balance:
        const initialBalance = rows[0].balance;
        const {amount} =req.body;

        //setting new account balance
        const newAccountBalance = initialBalance + amount;
        knex ('accounts').where ( {accountID:rows[0].accountID})
        .update ( {balance:newAccountBalance})
        .then ( (data) => {
            res
            .status (201)
            .json ( {
                message: `${data} ${data > 1 ? 'Items' : 'Item'} updated successfully`,
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