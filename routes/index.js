//API ROUTES:
//DEPENDENCIES
const route = require ( 'express').Router ();

//IMPORT INTERNAL MODULES:
//AUTH ROUTES:
const authRoutes = require ( './auth/auth.routes');
const servicesRoute = require ( './services/services.routes');

//ENDPOINTS
route.use ( '/auth', authRoutes);
route.use ( '/services', servicesRoute);
//EXPORTING ROUTES:
module.exports = route;