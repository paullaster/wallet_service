//DEPENDENCIES:
const servicesRoute = require ( 'express').Router ();

//INTERNAL DEPENDENCIES:
const fundAccounts = require ( '../../controller/services/fund.accounts');
const verifyToken = require ( '../../middleware/util/verifyToken');

servicesRoute.route ( '/fund/accounts').post ( verifyToken, fundAccounts);

//EXPORT Services Route:
module.exports = servicesRoute;