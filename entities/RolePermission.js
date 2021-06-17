const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const Role = require("./Role");
const Permission = require("./Permission");
const logger = require("../config/logger/winston");

const { INTEGER, STRING } = DataTypes;

const RolePermission = sequelize.define("RolePermission", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    permission_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Permission,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    tableName: "roles_permissions",
    timestamps: false
});

RolePermission.sync()
    .then(() => logger.info("RolePermission model registered"))
    .catch(err => logger.error(`Error while registering RolePermission model: ${err}`));

module.exports = RolePermission;