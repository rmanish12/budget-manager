const { createLogger, format, transports } = require("winston");
const env = process.env.NODE_ENV;

const { combine, timestamp, label, printf, colorize } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `[${timestamp}] - [${level}] - ${message}`;
});

const options = {
    level: env === "production" ? "info" : "debug",
    handleExceptions: true,
    json: false
};

const logger = createLogger({
    level: "debug",
    format: combine(
        colorize(),
        label({ label: "app testing" }),
        timestamp(),
        myFormat
    ),
    transports: [
        new transports.Console(options)
    ],
    exitOnError: false,
    silent: false // if true, will suppress all logs
});

module.exports = logger;