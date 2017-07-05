import express from 'express';

import valideResponse from '../locales/valideResponse';
import errorResponse from '../locales/errorResponse';

import users from '../models/users.js';

const app = express.Router({ mergeParams: true });

const getAllUsersRequest = (req, res, next) => {
  valideResponse.valideResponseWithData(req, res, next, users);
};

app.route('/')
  .all((req, res, next) => {
    console.log('req @ user');
    console.log('users', users);
    next();
  })
  .get(getAllUsersRequest)

export default app;