
const mongoose = require("mongoose");

const partSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['cpu', 'gpu', 'motherboard'],
    required: true
  },
  images: { type: Array, required: true },
  retailers: [
    {
      name: String,
      price: Number,
      stockStatus: Number
    },
  ],
});

const Part = mongoose.model("part", partSchema);

module.exports = Part;