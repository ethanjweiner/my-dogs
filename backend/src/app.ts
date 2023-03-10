import express from 'express';
require('express-async-errors');
const app = express();
app.use(express.json());

import mongoose from 'mongoose';
import ImagesRouter from './controllers/images';
import LoginRouter from './controllers/login';
import config from './utils/config';
import { errorHandler, loadToken, loadUser } from './utils/middleware';

if (config.MONGODB_URI) {
  mongoose.connect(config.MONGODB_URI);
}

app.use(loadToken);
app.use(loadUser);

app.use('/api/login', LoginRouter);
app.use('/api/images', ImagesRouter);

app.use(errorHandler);

export default app;
