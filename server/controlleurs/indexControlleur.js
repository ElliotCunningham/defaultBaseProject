import express from 'express';

import helloControlleur from './helloControlleur';
import couchControlleur from './couchControlleur';
import usersControlleur from './usersControlleur';

const app = express.Router({ mergeParams: true });

app.use((req, res, next) => {
  console.log('Request Made');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/hello', helloControlleur);
app.use('/couch', couchControlleur);
app.use('/users', usersControlleur);

export default app;