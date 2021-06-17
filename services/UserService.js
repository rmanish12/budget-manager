const moment = require("moment");
const bcrypt = require("bcrypt");

const UserRepository = require("../repositories/UserRepository");
const AlredyPresentError = require("../errors/AlreadyPresentError");
const logger = require("../config/logger/winston");
const validator = require("../helpers/validator");

const { isValidEmail, isValidPassword, isValidFirstName, isValidLastName, isValidGender, isValidDate } = validator;

class UserService {

    static className = "[UserService.class] | ";

    constructor() {
        this.userRepository = new UserRepository();
        this.createUser = this.createUser.bind(this);
    }

    validateParams() {}

    async createUser({ email, password, firstName, lastName, dateOfBirth, gender }) {
        logger.info(`${UserService.className} Creating user with email ${email}`);
        try {
            const date = moment(new Date(dateOfBirth));
            let hashedPassword = "";

            // sanitizing all the fields
            // checking if the fields are valid
            try {
                logger.info(`${UserService.className} Validating fields`);
                isValidEmail(email);
                isValidPassword(password);
                isValidFirstName(firstName);
                isValidLastName(lastName);
                isValidGender(gender);
                isValidDate(date);
            } catch (err) {
                logger.error(`${UserService.className} Error while validating fields for creating new user with email: ${email} | ${err}`);
                throw err;
            };

            // checking if the user already exists
            const user = await this.userRepository.findUserByEmail({ email });
            if (user) {
                logger.error(`${UserService.className} User with the given email: ${email} already exists`);
                throw new AlredyPresentError(`User with the given email already exists`);
            }

            // hashing password
            try {
                hashedPassword = await bcrypt.hash(password, 10);
            } catch (err) {
                logger.error(`${UserService.class} Error while hashing password for user with email: ${email} | ${err}`);
            }
            
            dateOfBirth = date.format("YYYY-MM-DD");

            // saving object to DB
            await this.userRepository.create({ email, password: hashedPassword, firstName, lastName, dateOfBirth, gender });
            return;
        } catch (err) {
            logger.error(`${UserService.className} Error while creating user with email: ${email}| ${err}`);
            throw err;
        }
    }

};

module.exports = UserService;