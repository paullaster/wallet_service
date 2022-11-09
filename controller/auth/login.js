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
        .catch ( (error) => {
            res
            .status (500)
            .json ( {
                Error: error.message,
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
};
//EXPORT LOGIN:
module.exports = login;