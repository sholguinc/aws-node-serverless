import express from 'express';
import serverless from 'serverless-http';
import * as bodyParser from 'body-parser';

import IndexRouter from './routes/index.routes';
import SwapiRouter from './routes/swapi.routes';

// App
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(IndexRouter);
app.use('/swapi', SwapiRouter);

export const handler = serverless(app as serverless.Application);
