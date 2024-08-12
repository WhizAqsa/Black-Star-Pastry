const ShopCake = require("../models/shopCakeModel");

//creates cakes to be shopped
const createShopCake = async (req, res) => {
  const shopCakes = req.body;

  try {
    const createdShopCakes = [];
    for (const cake of shopCakes) {
      const newCake = await ShopCake.create(cake);
      createdShopCakes.push(newCake);
    }
    res.status(200).json({
      message: "Cakes to be shopped created successfully.",
      shopCakes: createdShopCakes,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get all cakes to be shopped
const getShopCakes = async (req, res) => {
  try {
    const shopCakes = await ShopCake.find({});
    res.status(200).json(shopCakes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createShopCake, getShopCakes };
