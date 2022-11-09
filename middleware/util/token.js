//GENERATE  TOKEN:
//DEPENDENCIES:
const JWT = require ( 'jsonwebtoken');
require ('dotenv').config ();
//INTERNAL DEPENDENCIES:

//TOKEN GENERATION FUNCTION:
const generateToken = (user) => {
    const payLoad = {
        id: user.accountID
    };
    JWT.sign (payLoad, process.env.TOKEN_SECRET, {
        algorithm: 'HS512',
        expiresIn: 3600
    });
};