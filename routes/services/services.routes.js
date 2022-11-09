//DEPENDENCIES:
const servicesRoute = require ( 'express').Router ();

//INTERNAL DEPENDENCIES:
const deposit = require ( '../../controller/services/fund.accounts');
const transfer = require ( '../../controller/services/transfer.funds');
const withdraw = require ( '../../controller/services/withdraw.funds')
const verifyToken = require ( '../../middleware/util/verifyToken');

servicesRoute.route ( '/fund/deposit').post ( verifyToken, deposit);
servicesRoute.route ( '/fund/transfer').post ( verifyToken, transfer);
servicesRoute.route ( '/fund/withdraw').post (verifyToken, withdraw);

//EXPORT Services Route:
module.exports = servicesRoute;