const token = require ( '../middleware/util/token');
const JWT = require ( 'jsonwebtoken');
require ('dotenv').config ();

test ('generateToken', () => {
    expect( token(user.id)).toBe(
        JWT.sign ( user.id, process.env.TOKEN_SECRET, 
            { 
                algorithm: 'HS512',
                expiresIn: '3600s'
    })
    ) 
} )
