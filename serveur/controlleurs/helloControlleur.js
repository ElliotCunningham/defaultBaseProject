import express from 'express';

const app = express.Router({ mergeParams: true });

const helloFunction = (req, res, next) => {
  console.log('hello world');
  res.status(200);
  res.json("the hello world has been send");
};


app.route('/')
  .all((req, res, next) => {
    console.log('req@HelleApi');
    // NodeLogger.info(req);
    // console.log(req);
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    next();
  })
  .get(helloFunction);

  export default app;


