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
        const afterWithdrawalBalance = 

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