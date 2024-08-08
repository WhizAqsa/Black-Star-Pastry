const Cake = require("../models/cakeModel");

//creates a cake
const createCake = async (req, res) => {
  const cakes = req.body;

  try {
    const createdCakes = [];
    for (const cake of cakes) {
      const newCake = await Cake.create(cake);
      createdCakes.push(newCake);
    }
    res
      .status(200)
      .json({ message: "Cakes created successfully.", cakes: createdCakes });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all cakes
const getCakes = async (req, res) => {
  try {
    const cakes = await Cake.find({});
    res.status(200).json(cakes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createCake, getCakes };
