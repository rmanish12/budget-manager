const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const logger = require("../config/logger/winston");

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

Role.sync()
    .then(() => logger.info("Role model registered"))
    .catch(err => logger.error(`Error while registering Role model: ${err}`));

module.exports = Role;