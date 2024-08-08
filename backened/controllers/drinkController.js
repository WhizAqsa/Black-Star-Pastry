const Drink = require("../models/drinkModel");

//creates a drink
const createDrink = async (req, res) => {
  const drinks = req.body;
  try {
    const createdDrinks = [];
    for (const drink of drinks) {
      const newDrink = await Drink.create(drink);
      createdDrinks.push(newDrink);
    }
    res
      .status(200)
      .json({ message: "Drinks created successfully.", drinks: createdDrinks });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get all drinks
const getDrinks = async (req, res) => {
  const drinks = await Drink.find({});
  res.status(200).json(drinks);
};

module.exports = { createDrink, getDrinks };
