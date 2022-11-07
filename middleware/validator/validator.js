//USER INPUT VALIDATOR:
//DEPENDENCIES:
const {check} = require ( 'express-validator');

//VALDATION METHOD:
const validate = (req, res, next) => {
    return [
        //checking phonenumber field:
        check ('phonenumber')
        .not ().isEmpty ().isMobilePhone ( 'any')
        .escape ().withMessage ( 'Invalid phone number!'),
        
        //Checking pin field:
        check ( 'pin')
        .not ().isEmpty ().isNumeric ().isLength ( {min: 4, max: 4})
    ];
};

//EXPORT VALIDATION METHOD:
module.exports = validate;