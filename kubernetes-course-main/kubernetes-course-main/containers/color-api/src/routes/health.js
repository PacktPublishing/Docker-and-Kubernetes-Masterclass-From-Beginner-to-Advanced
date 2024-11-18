const express = require('express');

const healthRouter = express.Router();
const fail_liveness = process.env.FAIL_LIVENESS === 'true';
const fail_readiness =
  process.env.FAIL_READINESS === 'true' ? Math.random() < 0.5 : false;

console.log(`Fail liveness : ${fail_liveness}`);
console.log(`Fail readiness : ${fail_readiness}`);

healthRouter.get('/ready', (req, res) => {
  if (fail_readiness) {
    return res.sendStatus(503);
  }

  return res.send('ok');
});

healthRouter.get('/up', (req, res) => {
  return res.send('ok');
});

healthRouter.get('/health', (req, res) => {
  if (fail_liveness) {
    return res.sendStatus(503);
  }

  return res.send('ok');
});

module.exports = {
  healthRouter,
};
