const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const application = express();

application.use(morgan("dev"));
application.use(bodyParser.urlencoded({ urlencoded: true }));
application.use(bodyParser.json());

module.exports = application;
