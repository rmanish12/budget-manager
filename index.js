const app = require("./app");
const APP_PORT = process.env.APP_PORT;
const logger = require("./src/config/logger/winston");

app.listen(APP_PORT, () => logger.info(`Server listening on port ${APP_PORT}`));