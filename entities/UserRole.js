const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const Role = require("./Role");
const User = require("./User");
const logger = require("../config/logger/winston");

const { INTEGER } = DataTypes;

const UserRole = sequelize.define("UserRole", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
            model: User,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    roleId: {
        type: INTEGER,
        allowNull: false,
        field: "role_id",
        references: {
            model: Role,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    tableName: "users_roles",
    timestamps: false
});

User.belongsToMany(Role, { through: UserRole, unique:false, foreignKey: "user_id"});
Role.belongsToMany(User, { through: UserRole, unique:false, foreignKey: "role_id"});

UserRole.sync()
    .then(() => logger.info("UserRole model registered"))
    .catch(err => logger.error(`Error while registering UserRole model: ${err}`));

module.exports = UserRole;