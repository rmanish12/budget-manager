const moment = require("moment");

class Response {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.message = message;
        this.timestamp = moment().toISOString();
    }
};

module.exports = Response;