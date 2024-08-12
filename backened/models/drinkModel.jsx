const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  image: { type: String, required: true },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Drink", drinkSchema);
