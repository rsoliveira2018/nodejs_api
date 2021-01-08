const express = require("express");
const app = express();
const clockRoute = require('./routes/rest/clock');

app.use('/rest/clock', clockRoute);

module.exports = app;