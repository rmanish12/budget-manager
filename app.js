const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const corsConfig = require("./config/cors/cors");
const bodyParserJsonConfig = require("./config/bodyParser/bodyParserJson");
const bodyParserEncodingConfig = require("./config/bodyParser/bodyParserEncoding");
const morganConfig = require("./config/logger/morgan");

const app = express();

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded(bodyParserEncodingConfig));
app.use(bodyParser.json(bodyParserJsonConfig));

app.use(morgan(morganConfig));

module.exports = app;