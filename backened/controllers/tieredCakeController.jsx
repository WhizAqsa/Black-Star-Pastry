const TieredCake = require("../models/tieredCakeModel");

//creates a tiered cake

const createTieredCake = async (req, res) => {
  const tieredCakes = req.body;

  try {
    const createdTieredCakes = [];
    for (const tieredcake of tieredCakes) {
      const newTieredCake = await TieredCake.create(tieredcake);
      createdTieredCakes.push(newTieredCake);
    }
    res.status(200).json({
      message: "Tiered Cakes created successfully.",
      tieredCakes: createdTieredCakes,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get all tiered cakes
const getTieredCakes = async (req, res) => {
  const tieredCakes = await TieredCake.find({});
  res.status(200).json(tieredCakes);
};
module.exports = { createTieredCake, getTieredCakes };
