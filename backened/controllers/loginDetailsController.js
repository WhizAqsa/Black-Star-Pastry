// const LoginDetails = require("../models/loginDetailsModel");
// const jwt = require("jsonwebtoken");

// //function generating a token

// const createToken = () => {
//   return jwt({ _id }, process.env.SECRET, { expiresIn: "5d" });
// };
// //to send the login details
// const sendLoginDetails = async (req, res) => {
//   const login_data = req.body;
//   const response = await LoginDetails.create(login_data);
//   //create a token
//   const token = createToken(response._id)
//     .then((result) => res.json(result, token))
//     .catch((err) => res.json(err));
// };

// //get login details
// const getLoginDetails = async (req, res) => {
//   try {
//     const loginDetails = await LoginDetails.find({});

//     res.status(200).json(loginDetails);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = { sendLoginDetails, getLoginDetails };
