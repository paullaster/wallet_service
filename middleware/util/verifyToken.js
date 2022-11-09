//VERIFYING TOKEN:
//DEPENDENCIES:
const JWT = require ( 'jsonwebtoken');
require ( 'dotenv').config ();

//VERIFYING TOKEN:
const verifyToken = (req, res, next) => {
    const token = req.header ('Authorization');
    if (!token) {
        res
        .status (401)
        .json ({
            message: 'Denined Access!'
        });
        return;
    }
    const tokenArray = token.split(' ');
    const tokenSalt = tokenArray[1];

    //VERIFY TOKEN:
    JWT.verify (tokenSalt, process.env.TOKEN_SECRET, {
        algorithms: 'HS512'
    }, (error, verified) => {
        if (error) {
            res
            .status (403)
            .json ({
                error: error.message,
            });
            return;
        };
        //setting req.user for the next middleware
        req.user =verified;
        next ();
    });

};

//EXPORT VERIFYING TOKEN FUNCTION:
module.exports = verifyToken;