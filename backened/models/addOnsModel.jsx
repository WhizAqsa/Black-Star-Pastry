const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addOnsSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  image: { type: String, required: true },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("AddOns", addOnsSchema);
