import express from 'express';
import helloControlleur from './helloControlleur';

const app = express.Router({ mergeParams: true });

app.use((req, res, next) => {
  console.log('Request Made');

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/hello', helloControlleur);
// on ajoute toute les requete des api de cette facon.

export default app;