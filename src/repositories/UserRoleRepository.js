const UserRole = require("../entities/UserRole");

class UserRoleRepository {

    constructor() {
        this.userRole = UserRole;
        this.getRoleByRoleName = this.getRoleByRoleName.bind(this)
    }

    getRoleByRoleName(role) {
        return this.userRole.findOne({ where: { roleId: role } })
    }

    assignRoleToUser({ user, role }) {
        return this.userRole.create({
            userId: user,
            roleId: role
        })
    }

};

module.exports = UserRoleRepository;