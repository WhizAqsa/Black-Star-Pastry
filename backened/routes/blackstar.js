const express = require("express");
const Cake = require("../models/cakeModel");
const Pastry = require("../models/pastryModel");
const TieredCake = require("../models/tieredCakeModel");
const Drink = require("../models/drinkModel");
const SweetPastry = require("../models/sweetPastryModel");
const SavouryPastry = require("../models/savouryPastryModel");
const AddOns = require("../models/addOnsModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "Get all the documents" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single document" });
});

router.post("/cake", async (req, res) => {
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
});

//creates pastry
router.post("/pastry", async (req, res) => {
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
});

//creates tieredcake
router.post("/tieredcake", async (req, res) => {
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
});

//created drink
router.post("/drink", async (req, res) => {
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
});

//creates sweet pastry
router.post("/sweetpastry", async (req, res) => {
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
});

//creates savoury pastry
router.post("/savourypastry", async (req, res) => {
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
});

//creates an addon
router.post("/addon", async (req, res) => {
  const addOns = req.body;
  try {
    const createdAddOns = [];
    for (const addOn of addOns) {
      const newAddOn = await AddOns.create(addOn);
      createdAddOns.push(newAddOn);
    }
    res.status(200).json({
      message: "Add Ons created successfully.",
      addOns: createdAddOns,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "Updates the document" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "Deletes the document" });
});

module.exports = router;
