const express = require('express');

const indexRouter = require('./routes/router');

const app = express();

app.use(express.json());

app.use('/files', indexRouter);

module.exports = app;
