//LOGIN:


//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const login = ( req, res) => {
    const {phonenumber, pin} = req.body;
    knex ('accounts').where ({accountID: phonenumber})
    .then ( (rows) => {
        if ( rows.length < 0) {
            res
            .status (400)
            .json ({
                message: "Invalid logins"
            });
            return;
        };
        res
        .status (200)
        .json ( rows);
    })
};
//EXPORT LOGIN:
module.exports = login;