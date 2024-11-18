const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { keyValueRouter } = require('./routes/store');
const { healthRouter } = require('./routes/health');

const port = process.env.PORT;
const app = express();

app.use(bodyParser.json());
app.get('/', (req, res) => {
  return res.json({
    message: 'Welcome to our Key-Value store',
  });
});
app.use('/health', healthRouter);
app.use('/store', keyValueRouter);

console.log('Connecting to DB');
mongoose
  .connect(
    `mongodb://${process.env.MONGODB_HOST}/${process.env.KEY_VALUE_DB}`,
    {
      auth: {
        username: process.env.KEY_VALUE_USER,
        password: process.env.KEY_VALUE_PASSWORD,
      },
      connectTimeoutMS: 500,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
    console.log('Connected to DB!');
  })
  .catch((err) => {
    console.error('Something went wrong!');
    console.error(err);
  });
