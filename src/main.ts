import express from 'express';
import serverless from 'serverless-http';
import * as bodyParser from 'body-parser';

import { dataSource } from './config';

import IndexRouter from './routes/index.routes';
import SwapiRouter from './routes/swapi.routes';
import BookRouter from './routes/book.routes';

// App
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use(IndexRouter);
app.use('/swapi', SwapiRouter);
app.use('/books', BookRouter);

// database
dataSource
  .initialize()
  .then(async () => {
    console.log('Data Source has been initialized!');
  })
  .catch((error) => {
    console.log(error);
  });

export const handler = serverless(app as serverless.Application);
