const express = require("express");

const { createCake, getCakes } = require("../controllers/cakeController");
const {
  createPastry,
  getPastries,
} = require("../controllers/pastryController");
const { createDrink, getDrinks } = require("../controllers/drinkController");
const { createAddOn, getAddOns } = require("../controllers/addOnController");
const {
  createSweetPastry,
  getSweetPastries,
} = require("../controllers/sweetpastryController");
const {
  createSavouryPastry,
  getSavouryPastries,
} = require("../controllers/savouryPastryController");
const {
  createTieredCake,
  getTieredCakes,
} = require("../controllers/tieredCakeController");
const router = express.Router();

//creates a cake
router.post("/cake", createCake);
//get cakes
router.get("/cake", getCakes);

//creates pastry
router.post("/pastry", createPastry);
//get pastries
router.get("/pastry", getPastries);

//creates tieredcake
router.post("/tieredcake", createTieredCake);
//get all tiered cakes
router.get("/tieredcake", getTieredCakes);

//created drink
router.post("/drink", createDrink);
//get all drinks
router.get("/drink", getDrinks);

//creates sweet pastry
router.post("/sweetpastry", createSweetPastry);
//get all sweet pastries
router.get("/sweetpastry", getSweetPastries);

//creates savoury pastry
router.post("/savourypastry", createSavouryPastry);
//get savoury pastries
router.get("/savourypastry", getSavouryPastries);

//creates an addon
router.post("/addon", createAddOn);
//get all addons
router.get("/addon", getAddOns);

module.exports = router;
