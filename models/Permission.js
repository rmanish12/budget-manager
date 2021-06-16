const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db/sequelize");

const { INTEGER, STRING } = DataTypes;

const Permission = sequelize.define("Permission", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    permission: {
        type: STRING(50),
        allowNull: false,
    },
    displayName: {
        type: STRING(50),
        allowNull: false,
        field: "display_name"
    },
    description: {
        type: STRING(100),
    }
}, {
    tableName: "permissions",
    timestamps: true,
    updatedAt: "updated_at",
    createdAt: "created_at"
});

module.exports = Permission;