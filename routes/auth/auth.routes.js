// AUTH ROUTES:
//DEPENDENCIES:
const authRoutes = require ( 'express').Router ();

//INTERNAL DEPENDENCIES:
const createAccount = require ( '../../controller/auth/account.creation');

authRoutes.route('/register').get (createAccount);







//EXPORT AUTH ROUTES:
module.exports = authRoutes;