const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const BudgetType = require("./BudgetType");
const logger = require("../config/logger/winston");

const { INTEGER, STRING } = DataTypes;

const Category = sequelize.define("Category", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING(50),
        allowNull: false
    },
    description: {
        type: STRING(100)
    },
    budgetType: {
        type: INTEGER,
        allowNull: false,
        fieldName: "budget_type",
        references: { // creating foreign key
            model: BudgetType, // name of the model referenced
            key: "id", //column name of the referenced model
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    tableName: "categories",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

Category.sync()
    .then(() => logger.info("Category model registered"))
    .catch(err => logger.error(`Error while registering Category model: ${err}`));

module.exports = Category;