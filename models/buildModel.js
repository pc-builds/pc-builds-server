
const mongoose = require("mongoose");

const buildSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Build = mongoose.model("build", buildSchema);

module.exports = Build;