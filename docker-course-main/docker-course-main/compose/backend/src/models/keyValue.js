const mongoose = require('mongoose');

const keyValueSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true },
});

const KeyValue = mongoose.model('KeyValue', keyValueSchema);

module.exports = {
  KeyValue,
};
