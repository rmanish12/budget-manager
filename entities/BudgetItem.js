const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const User = require("./User");
const BudgetType = require(".//BudgetType");
const Category = require("./Category");
const logger = require("../config/logger/winston");

const { INTEGER, DOUBLE, STRING, DATE } = DataTypes;

const BudgetItem = sequelize.define("BudgetItem", {
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
    type_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: BudgetType,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    amount: {
        type: DOUBLE(10, 2),
        allowNull: false
    },
    description: {
        type: STRING
    },
    dateOfTransaction: {
        type: DATE,
        allowNull: false,
        field: "date_of_transaction"
    },
    category_id: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    tableName: "budget_items",
    timestamp: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
});

BudgetItem.sync()
    .then(() => logger.info("BudgetItem model registered"))
    .catch(err => logger.error(`Error while registering BudgetItem model: ${err}`));

module.exports = BudgetItem;