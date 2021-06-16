const { Sequelize } = require("sequelize");
const logger = require("../logger/winston");

const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE } = process.env;

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
    logging: msg => logger.debug(msg)
});

sequelize.authenticate()
    .then(() => logger.info("Database connection established successfully"))
    .catch(err => logger.error(`Error while connecting to database: ${err}`));

module.exports = sequelize;