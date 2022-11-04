/**
 * APPLICATION MAIN FILE:
 */
//DEPENDENCIES
const express = require ('express');
require ( 'dotenv').config ();



//IMPORTING INTERNAL MODULES

//APPLICATION INSTANCE
const app = express ();


//APPLICATION SETTINGS
app.use ( express.json ());
app.use ( express.urlencoded ( { extended: true}));


//API
app.use ( '/api', );

//LAUNCHING SERVER
app.listen (process.env.PORT, () => {
    console.log ( ` Server listening on ${process.env.APP_HOST}:${process.env.PORT}` );
});



