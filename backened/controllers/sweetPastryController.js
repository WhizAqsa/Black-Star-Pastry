const SweetPastry = require("../models/sweetPastryModel");

//creates a sweet pastry
const createSweetPastry = async (req, res) => {
  const sweetPastries = req.body;
  try {
    const createdSweetPastries = [];
    for (const sweetPastry of sweetPastries) {
      const newSweetPastry = await SweetPastry.create(sweetPastry);
      createdSweetPastries.push(newSweetPastry);
    }
    res.status(200).json({
      message: "Sweet Pastries created successfully.",
      sweetPastries: createdSweetPastries,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get all sweet pastries
const getSweetPastries = async (req, res) => {
  const sweetPastries = await SweetPastry.find({});
  res.status(200).json(sweetPastries);
};
module.exports = { createSweetPastry, getSweetPastries };
