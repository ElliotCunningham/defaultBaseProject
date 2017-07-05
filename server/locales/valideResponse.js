const valideResponse = (req, res, next) => {
  res.status(200);
  res.json({ status: 'ok', message: 'request is send corectly' });
}

const valideResponseWithData = (req, res, next, data) => {
  res.status(200);
  res.json(data);
};

export default {
  valideResponse,
  valideResponseWithData
}