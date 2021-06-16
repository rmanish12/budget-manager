const { Sequelize, DataTypes, Deferrable } = require("sequelize");
const sequelize = require("../config/db/sequelize");
const BudgetType = require("./BudgetType");

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
    type_id: {
        type: INTEGER,
        allowNull: false,
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

module.exports = Category;