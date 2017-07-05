import express from 'express';
import userBddApi from '../lib/userBddApi';

const app = express.Router({ mergeParams: true });

const getAllAvaibleDataBase = (req, res, next) => {
  console.log('req @ getAllAvaibleDataBase');
  res.status(200);
  res.json({ res: true });
};

const getAllAvaibleUsers = (req, res, next) => {
  console.log('req @ getAllAvaibleUsers');
  userBddApi.getAllUsers().then((result) => {
    res.status(200);
    res.json(result);
  })
  .catch((err) => {
    res.status(404);
    res.json(err);
  });
};

app.route('/all')
  .all((req, res, next) => {
    console.log('req @ all');
    next();
  })
  .get(getAllAvaibleDataBase);

app.route('/users')
  .all((req, res, next) => {
    console.log('req @ users');
    next();
  })
  .get(getAllAvaibleUsers);

export default app;
