//WITHDRAW FUNDS:


//DEPENDENCIES:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');

//WITHDRAW FUNDS FUNCTION:
const withdrawFund = (req, res) => {
    const user = req.user.id;
    knex('accounts').where ( {accountID:user})
    .then ( (rows) => {
        
    })
    res.json(user);
};

//EXPORT WITHDRAW FUNDS FUNCTION:
module.exports = withdrawFund;