import express from 'express';
import * as Routes from './routes/router';
import upload from 'express-fileupload';
const app = express();

app.use(express.json());

app.use(upload());

Routes.init(app);

export default app;
