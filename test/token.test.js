const token = require ( '../middleware/util/token');
const JWT = require ( 'jsonwebtoken');
require ('dotenv').config ();

test ('generateToken', () => {
    expect( token(254700258098)).toBe(
        JWT.sign ( 254700258098, process.env.TOKEN_SECRET, 
            { 
                algorithm: 'HS512',
                expiresIn: '3600s'
    })
    ) 
} )
