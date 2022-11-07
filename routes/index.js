//API ROUTES:
//DEPENDENCIES
const route = require ( 'express').Router ();

//IMPORT INTERNAL MODULES
const authRoutes = require ( './auth/auth.routes');

//ENDPOINTS
route.use ( '/auth', authRoutes)

//EXPORTING ROUTES:
module.exports = route;