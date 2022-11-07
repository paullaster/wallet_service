//Database connection object:
//Importing Configuration
require ('dotenv').config ();
const apiError = require ( '../middleware/errors/errorHandler');
const option = {
    client: 'mysql2',
    version: '8.0',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};

const user = [
    {
        userID: 343489,
        fname: 'fpp',
        lname: 'bar'
    },
    {
        userID: 199500,
        fname: 'fpp',
        lname: 'bar'
    }
]

// Import knex
const knex = require ( 'knex')(option);

//ESTABLISHING KNEX CONNECTION:
knex.raw ( "SELECT VERSION()" )
.then ( ()=> {
    console.log ('connection succeeded')
})
.catch ( (err) => {
    apiError.InternalServerError (err.message);
});

//Export knex
module.exports = knex;