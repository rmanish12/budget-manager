const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const logger = require("../config/logger/winston");

const User = require("./User");
const Category = require("./Category");
const BudgetType = require("./BudgetType");

const { INTEGER, DOUBLE, STRING, DATE } = DataTypes;

const BudgetItem = sequelize.define("BudgetItem", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: {
        type: INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id",
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    budgetType: {
        type: INTEGER,
        field: "budget_type",
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
    category: {
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

User.hasMany(BudgetItem, {
    foreignKey: {
        name: "user",
        allowNull: false
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

BudgetItem.belongsTo(User, { foreignKey: "user", as: "owner" });

Category.hasMany(BudgetItem, {
    foreignKey: {
        name: "category",
        allowNull: false
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

BudgetItem.belongsTo(Category, { foreignKey: "category", as: "categoryOfBudget" });

BudgetType.hasMany(BudgetItem, {
    foreignKey: {
        name: "budget_type",
        allowNull: false
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

BudgetItem.belongsTo(BudgetType, { foreignKey: "budget_type", as: "typeOfBudget" });

BudgetItem.sync()
    .then(() => logger.info("BudgetItem model registered"))
    .catch(err => logger.error(`Error while registering BudgetItem model: ${err}`));

module.exports = BudgetItem;