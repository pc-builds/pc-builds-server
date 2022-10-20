
const mongoose = require("mongoose");

const buildSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { 
    type: String,
    enum: ['custom', 'prebuild'],
    required: true
  },
  tier: { type: String, required: true },
  parts: [
    { type: mongoose.Schema.Types.ObjectId, ref: "part"}
  ],
  images: { type: Array, required: true }
});

const Build = mongoose.model("build", buildSchema);

module.exports = Build;