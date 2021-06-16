const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const Role = require("./Role");
const User = require("./User");

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

module.exports = UserRole;