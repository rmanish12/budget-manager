const User = require("../entities/User");

class UserRepository {

    constructor() {
        this.user = User;
    }

    create({ email, password, firstName, lastName, dateOfBirth, gender }) {
        return this.user.create({
            email,
            password,
            firstName,
            lastName,
            dateOfBirth,
            gender
        });
    }

    login({ email }) {
        return this.user.findOne({
            where: { email }
        })
    }

    findUserByEmail({ email }) {
        return this.user.findOne({
            attributes: ["email"],
            where: { email }
        })
    }
};

module.exports = UserRepository;