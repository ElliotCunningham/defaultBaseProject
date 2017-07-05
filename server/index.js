import express from 'express';
import favicon from 'serve-favicon';
import cors from 'cors';

import indexControlleur from './controlleurs/indexControlleur';

const app = express();

app.options('*', cors);
app.use(favicon('./images/favicon.png'));

const port = process.env.PORT || 3000;

app.use(express.static('/public'));

app.use('/', indexControlleur);


const server = app.listen(port, () => {
  console.log('server is listenning @ localhost:', server.address().port);
});

export default server;