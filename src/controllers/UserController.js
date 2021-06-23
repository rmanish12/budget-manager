const UserService = require("../services/UserService");
const Response = require("../models/Response");
const ResponseStatus = require("../constants/ResponseStatus");
const logger = require("../config/logger/winston");

class UserController {

    static className = "[UserController.class] | ";

    constructor() {
        this.userService = new UserService();
        this.createUser = this.createUser.bind(this);
    }

    async createUser(req, res, next) {
        const { email, password, firstName, lastName, dateOfBirth, gender } = req.body;
        logger.info(`${UserController.className} Creating user with email ${email}`);
        try {
            await this.userService.createUser({ email, password, firstName, lastName, dateOfBirth, gender });
            res.status(ResponseStatus.OK).send(
                new Response(ResponseStatus.OK, `User with email: ${email} created successfully`)
            );
        } catch (err) {
            logger.error(`${UserController.className} Error while creating user with email ${email}: ${err}`);
            next(err);
        }
    }

};

module.exports = UserController;