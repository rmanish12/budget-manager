const Response = require("../models/Response");
const ResponseStatus = require("../constants/ResponseStatus");

const ValidationError = require("../errors/ValidationError");
const AlredyPresentError = require("../errors/AlreadyPresentError");

module.exports = function exceptionHandler (err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(ResponseStatus.BAD_REQUEST).send(
            new Response(ResponseStatus.BAD_REQUEST, err.message)
        );
    } else if (err instanceof AlredyPresentError) {
        res.status(ResponseStatus.CONFLICT).send(
            new Response(ResponseStatus.CONFLICT, err.message)
        );
    } else {
        res.status(ResponseStatus.INTERNAL_SERVER_ERROR).send(
            new Response(ResponseStatus.INTERNAL_SERVER_ERROR, err.message)
        )
    }
};