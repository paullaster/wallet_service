/**
 * APPLICATION MAIN FILE:
 */
//DEPENDENCIES
const express = require ('express');
const cors = require ('cors');
require ( 'dotenv').config ();



//IMPORTING INTERNAL MODULES
const routes = require('./routes/index');

//APPLICATION INSTANCE
const app = express ();


//APPLICATION SETTINGS
app.use ( express.json ());
app.use ( express.urlencoded ( { extended: true}));
app.use ( cors ())


//API
app.use ( '/api', routes);

//LAUNCHING SERVER
app.listen (process.env.PORT, () => {
    console.log ( ` Server listening on ${process.env.APP_HOST}:${process.env.APP_PORT}` );
});



