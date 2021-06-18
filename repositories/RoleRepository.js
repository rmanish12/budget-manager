const Role = require("../entities/Role");

class RoleRepository {

    constructor() {
        this.role = Role;
        this.getRoleByRoleName = this.getRoleByRoleName.bind(this);
    }

    getRoleByRoleName(role) {
        return this.role.findOne({ where: { role } });
    }

};

module.exports = RoleRepository;