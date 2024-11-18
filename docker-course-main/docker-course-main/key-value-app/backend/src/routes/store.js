const express = require('express');
const { KeyValue } = require('../models/keyValue');

const keyValueRouter = express.Router();

keyValueRouter.post('/', async (req, res) => {
  const { key, value } = req.body;

  if (!key || !value) {
    return res
      .status(400)
      .json({ error: 'Both "key" and "value" are required' });
  }
  try {
    const existingKey = await KeyValue.findOne({ key });

    if (existingKey) {
      return res.status(400).json({ error: 'Key already exists' });
    }

    const keyValue = new KeyValue({ key, value });
    await keyValue.save();

    return res
      .status(201)
      .json({ message: 'Key-Value pair stored successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

keyValueRouter.get('/:key', async (req, res) => {
  const { key } = req.params;

  try {
    const keyValue = await KeyValue.findOne({ key });

    if (!keyValue) {
      return res.status(404).json({ error: 'Key not found' });
    }

    return res.status(200).json({ key, value: keyValue.value });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

keyValueRouter.put('/:key', async (req, res) => {
  const { key } = req.params;
  const { value } = req.body;

  if (!value) {
    return res.status(400).json({ error: '"value" is required' });
  }

  try {
    const keyValue = await KeyValue.findOneAndUpdate(
      { key },
      { value },
      { new: true }
    );

    if (!keyValue) {
      return res.status(404).json({ error: 'Key not found' });
    }

    return res.status(200).json({
      message: 'Key-value pair updated successfully',
      key: keyValue.key,
      value: keyValue.value,
    });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

keyValueRouter.delete('/:key', async (req, res) => {
  const { key } = req.params;

  try {
    const keyValue = await KeyValue.findOneAndDelete({ key });

    if (!keyValue) {
      return res.status(404).json({ error: 'Key not found' });
    }

    return res
      .status(200)
      .json({ message: 'Key-value pair deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = {
  keyValueRouter,
};
