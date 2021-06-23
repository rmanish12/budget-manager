const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const logger = require("../config/logger/winston");

const { INTEGER, STRING } = DataTypes;

const BudgetType = sequelize.define("BudgetType", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: STRING(20),
        allowNull: false,
        unique: true
    }
}, {
    tableName: "budget_types",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

BudgetType.sync()
    .then(() => logger.info("BudgetType model registered"))
    .catch(err => logger.error(`Error while registering BudgetType model: ${err}`));

module.exports = BudgetType;