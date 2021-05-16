import express from 'express';

import indexRouter from './routes/router';

const app = express();

app.use(express.json());

app.use('/files', indexRouter);

module.exports = app;
