const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const promBundle = require('express-prom-bundle');
const { healthRouter } = require('./routes/health');
const { apiRouter } = require('./routes/api');
const { rootRouter } = require('./routes/root');

const port = 80;

const app = express();

const delay_startup = process.env.DELAY_STARTUP === 'true';
console.log(`Delay startup : ${delay_startup}`);

const metricsMiddleware = promBundle({
  includeMethod: true,
  includeStatusCode: true,
  includePath: true,
  includeUp: true,
});

app.use(metricsMiddleware);
app.use(bodyParser.json());
app.use('/api', apiRouter);
app.use('/', healthRouter);
app.use('/', rootRouter);

if (delay_startup) {
  const start = Date.now();

  // Purposefully block event loop and execution for 60 seconds.
  // To illustrate startup probes.
  while (Date.now() - start < 60000) {}
}

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Color API listening on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB');
    console.error(err);
  });
