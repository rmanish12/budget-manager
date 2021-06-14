const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const corsConfig = require("./config/cors");
const bodyParserJsonConfig = require("./config/bodyParserJson");
const bodyParserEncodingConfig = require("./config/bodyParserEncoding");

const app = express();

app.use(cors(corsConfig));
app.use(bodyParser.urlencoded(bodyParserEncodingConfig));
app.use(bodyParser.json(bodyParserJsonConfig));

module.exports = app;