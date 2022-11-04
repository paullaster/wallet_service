//API ROUTES:
//DEPENDENCIES
const route = require ( 'express').Router ();

//IMPORT INTERNAL MODULES


//ENDPOINTS
route.get ( '/', (req, res) => {
    res.json ( {
        message: 'Hello from routes',
    })
});

//EXPORTING ROUTES:
module.exports = route;