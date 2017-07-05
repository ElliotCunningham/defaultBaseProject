const errorNotFound = (req, res, next) => {
  res.status(404);
  res.json({ status: 'not found', error: 'the request is not found' });
};

const errorDataAndStatus = (req, res, next, error, status) => {
  res.status(status);
  res.json(error);
};


const internalErrorServer = (req, res, next) => {
  res.status(500);
  res.json("internal error in server");
};


export default {
  errorNotFound,
  internalErrorServer,
  errorDataAndStatus
};