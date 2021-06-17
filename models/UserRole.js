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
    user_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    role_id: {
        type: INTEGER,
        allowNull: false,
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

UserRole.sync()
    .then(() => logger.info("UserRole model registered"))
    .catch(err => logger.error(`Error while registering UserRole model: ${err}`));

module.exports = UserRole;