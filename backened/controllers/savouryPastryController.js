const SavouryPastry = require("../models/savouryPastryModel");

//creates a savoury pastry

const createSavouryPastry = async (req, res) => {
  const savouryPastries = req.body;
  try {
    const createdSavouryPastries = [];
    for (const savouryPastry of savouryPastries) {
      const newSavouryPastry = await SavouryPastry.create(savouryPastry);
      createdSavouryPastries.push(newSavouryPastry);
    }
    res.status(200).json({
      message: "Savoury pastries created successfully.",
      savouryPastries: createdSavouryPastries,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all savoury pastries
const getSavouryPastries = async (req, res) => {
  const savouryPastries = await SavouryPastry.find({});
  res.status(200).json(savouryPastries);
};

module.exports = { createSavouryPastry, getSavouryPastries };
