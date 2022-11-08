//DEPENDENCIES:
const servicesRoute = require ( 'express').Router ();

//INTERNAL DEPENDENCIES:
const fundAccounts = require ( '../../controller/fund.accounts');

servicesRoute.route ( '/fund/accounts').post ( fundAccounts);

//EXPORT Services Route:
module.exports = servicesRoute;