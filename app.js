/**
 * APPLICATION MAIN FILE:
 */
//DEPENDENCIES
const express = require ( 'express');
const cors = require ( 'cors' );
require ( 'dotenv').config ();


//IMPORTING INTERNAL MODULES
const routes = require ( './routes/index');
const errorHandler = require ( './middleware/errors/errorHandler');

//APPLICATION INSTANCE
const app = express();


//APPLICATION SETTINGS
app.use ( express.json ());
app.use ( cors ())


//API
app.use ( '/api', routes);

//ERROR API:
app.use ( errorHandler)
//LAUNCHING SERVER
app.listen ( process.env.APP_PORT, () => {
    console.log ( 'Server listening on port ' + process.env.APP_PORT );
})



