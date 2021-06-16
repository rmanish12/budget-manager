const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db/sequelize");

const { INTEGER, STRING } = DataTypes;

const Role = sequelize.define("Role", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: STRING(50),
        allowNull: false,
        unique: true
    },
    displayName: {
        type: STRING(50),
        allowNull: false,
        field: "display_name"
    },
    description: {
        type: STRING(100)
    }
}, {
    tableName: "roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

module.exports = Role;