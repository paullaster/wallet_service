//ERROR CLASS:
class Error {
    constructor (statusCode, message){
        this.statusCode = statusCode;
        this.message = message;
    };

    //ERROR CLASS STATIC METHODS:
    static Forbidden ( message) {
        return new Error (  403, message);
    };
    static NotFound (message) {
        return new Error (404, message);
    };
    static UnAuthorized (message) {
        return new Error (401, message);
    };
    static BadRequest (message) {
        return new Error (400, message);
    };
    static InternalServerError (message) {
        return new Error (500, message);
    };
};

//EXPORT ERROR CLASS:
module.exports = Error;