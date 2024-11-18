const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { noteRouter } = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/api/notes', noteRouter);

const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB! Starting server.');

    app.listen(port, () => {
      console.log(`Notes server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Something went wrong!');
    console.error(err);
  });
