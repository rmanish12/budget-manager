const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const corsConfig = require("./src/config/cors/cors");
const bodyParserJsonConfig = require("./src/config/bodyParser/bodyParserJson");
const bodyParserEncodingConfig = require("./src/config/bodyParser/bodyParserEncoding");
const morganConfig = require("./src/config/logger/morgan");

const userRoutes = require("./src/routes/user");

const exceptionHandler = require("./src/globalExceptionHandler/exceptionHandler");

const app = express();

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded(bodyParserEncodingConfig));
app.use(bodyParser.json(bodyParserJsonConfig));
app.use(morgan(morganConfig));

app.use("/user", userRoutes);

app.use(exceptionHandler);

module.exports = app;