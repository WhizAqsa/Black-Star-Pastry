const Pastry = require("../models/pastryModel");

//creates pastry
const createPastry = async (req, res) => {
  const pastries = req.body;

  try {
    const createdPastries = [];
    for (const pastry of pastries) {
      const newPastry = await Pastry.create(pastry);
      createdPastries.push(newPastry);
    }
    res.status(200).json({
      message: "Pastries created successfully.",
      pastries: createdPastries,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all pastries
const getPastries = async (req, res) => {
  const pastries = await Pastry.find({});
  res.status(200).json(pastries);
};

module.exports = { createPastry, getPastries };
