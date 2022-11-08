//FUND ACCOUNTS:

//INTERNAL DEPENDENCIES:
const knex = require ( '../helper/database.connection');
const accountFunding = (req, res) => {
    const {amount} =req.body;

    res
    .status (200)
    .json (amount)
};

//EXPORT FUND ACCOUNTS:
module.exports = accountFunding;