const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db/sequelize");

const { INTEGER, STRING, DATE, ENUM, BOOLEAN } = DataTypes;

const User = sequelize.define("User", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: STRING(255),
        allowNull: false,
        validate: {
            notNull: true,
            len: [6, 255]
        }
    },
    firstName: {
        type: STRING(20),
        allowNull: false,
        field: "first_name",
        validate: {
            notNull: true,
            len: [1, 20]
        }
    },
    lastName: {
        type: STRING(20),
        field: "last_name"
    },
    dateOfBirth: {
        type: DATE,
        allowNull: false,
        field: "date_of_birth"
    },
    gender: {
        type: ENUM(["Male", "Female", "Not Disclosed"]),
        defaultValue: "Not Disclosed",
        allowNull: false
    },
    isActive: {
        type: BOOLEAN,
        defaultValue: true,
        field: "is_active"
    }
}, {
    tableName: "users",
    timestamps: true, // When set to true, will automatically take care of updatedAt and createdAt
    updatedAt: "updated_at",
    createdAt: "created_at"
});

module.exports = User