// AUTH ROUTES:
//DEPENDENCIES:
const authRoutes = require ( 'express').Router ();

//INTERNAL DEPENDENCIES:
const createAccount = require ( '../../controller/auth/account.creation');
const login = require ( '../../controller/auth/login');

authRoutes.route ('/register').post (createAccount);
authRoutes.route ('/login').post (login);






//EXPORT AUTH ROUTES:
module.exports = authRoutes;