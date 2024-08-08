const AddOns = require("../models/addOnsModel");

//creates an addon

const createAddOn = async (req, res) => {
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
};

//get all addOns
const getAddOns = async (req, res) => {
  const addons = await AddOns.find({});
  res.status(200).json(addons);
};
module.exports = { createAddOn, getAddOns };
