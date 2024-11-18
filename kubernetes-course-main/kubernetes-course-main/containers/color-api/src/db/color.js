const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const Color = mongoose.model('Color', ColorSchema);

const saveColor = async ({ key, value }) => {
  let color = await Color.findOne({ key });

  if (color) {
    color.set({ value });
  } else {
    color = new Color({ key, value });
  }

  await color.save();
};

const deleteColor = async ({ key }) => Color.deleteOne({ key });

const getColors = async () => Color.find();

const getColor = async ({ key, strict = false }) => {
  let color = await Color.findOne({ key });

  if (strict && !color) {
    return undefined;
  }

  if (color) {
    return color.value;
  }

  return process.env.DEFAULT_COLOR || 'blue';
};

module.exports = {
  saveColor,
  getColor,
  getColors,
  deleteColor,
};
