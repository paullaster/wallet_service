//DEPENDENCIES:
const servicesRoute = require ( 'express').Router ();
const {check} = require ( 'express-validator' );

//INTERNAL DEPENDENCIES:
const accounts = require ( '../../controller/services/fund.accounts');
const transfer = require ( '../../controller/services/transfer.funds');
const verifyToken = require ( '../../middleware/util/verifyToken');

servicesRoute.route ( '/fund/account').post ( verifyToken, accounts);
servicesRoute.route ( '/fund/transfer').post ( verifyToken, transfer)

//EXPORT Services Route:
module.exports = servicesRoute;