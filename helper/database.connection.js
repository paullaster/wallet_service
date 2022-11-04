//Database connection object:
//Importing Configuration
require ('dotenv').config ();
const option = {
    client: 'msql2',
    version: '8.0',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};

// Import knex
const knex = require ( 'knex')(option);
//Export knex
module.exports = knex;