//ERROR HANDLER:

//INTERNAL DEPENDENCIES
const apiError = require ( './error');

const errorHandler = ( err, req, res, next) => {
    if ( err instanceof apiError) {
        res
        .status(err.statusCode)
        .json ( {
            error:err.message
        });
        return;
    };
    res
    .status (500)
    .json ({
        message: 'Something went wrong!',
    });
};

//EXPORTING ERROR HANDLER:
module.exports = errorHandler;