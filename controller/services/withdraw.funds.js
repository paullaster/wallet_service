//WITHDRAW FUNDS:


//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');

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

        //Perfomring withdrawal transaction:
        

        res.json(rows);
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