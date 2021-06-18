const RoleRepository = require("../repositories/RoleRepository");
const logger = require("../config/logger/winston");

class RoleService {

    static className = "[RoleService.class] | ";

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    async getRoleByRoleName(role) {
        logger.info(`${RoleService.className} Fetching role: ${role}`);
        try {
            const roleDetails = (await this.roleRepository.getRoleByRoleName(role)).toJSON();
            return roleDetails;
        } catch (err) {
            logger.error(`${Role.className} Error while fetching role: ${role} | ${err}`);
            throw err;
        }
    }

};

module.exports = RoleService;