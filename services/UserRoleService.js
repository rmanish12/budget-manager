const UserRoleRepository = require("../repositories/UserRoleRepository");
const logger = require("../config/logger/winston");

class UserRoleService {

    static className = "[UserRoleService.class] | "

    constructor() {
        this.userRoleRepository = new UserRoleRepository();
        this.assignRoleToUser = this.assignRoleToUser.bind(this);
    }

    async assignRoleToUser({ user, role }) {
        logger.info(`${UserRoleService.className} Assigning role [id: ${role}] to user: [id: ${user}]`)
        try {
            await this.userRoleRepository.assignRoleToUser({ user, role });
        } catch (err) {
            logger.error(`${UserRoleService.className} Error while assigning role [id: ${role}] to user: [id: ${user}]`);
            throw err;
        }
    }

};

module.exports = UserRoleService;