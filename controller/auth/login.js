//LOGIN:
//DEPENDENCIES:
const bcrypt = require ( 'bcrypt' );
//INTERNAL DEPENDENCIES:
const knex = require ( '../../helper/database.connection');
const login = ( req, res) => {
    const {phonenumber, pin} = req.body;
    knex ('accounts').where ({accountID: phonenumber})
    .then ( (rows) => {
        if(rows.length === 0) {
            res
            .status (400)
            .json ({
                message: "Invalid account"
            });
            return;
        };
        bcrypt.compare (pin, rows[0].pin)
        .then ( (val) => {
            if ( !val) {
                res
                .status (400)
                .json ( {message: "Incorrect password"});
                return;
            };
        })
    })
};
//EXPORT LOGIN:
module.exports = login;