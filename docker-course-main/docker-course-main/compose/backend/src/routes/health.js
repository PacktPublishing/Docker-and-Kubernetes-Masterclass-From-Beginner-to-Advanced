const express = require('express');

const healthRouter = express.Router();

healthRouter.get('/', (req, res) => {
  res.status(200).send('up');
});

module.exports = {
  healthRouter,
};
