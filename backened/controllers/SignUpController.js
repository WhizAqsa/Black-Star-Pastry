// const SignUpDetails = require("../models/SignUpModel");
// const jwt = require("jsonwebtoken");
// const User = require("../models/SignUpModel");
// //function generating a token

// const createToken = () => {
//   return jwt({ _id }, process.env.SECRET, { expiresIn: "5d" });
// };
// //to send the SignUp details
// const sendSignUpDetails = async (req, res) => {
//   const SignUp_data = req.body;
//   try {
//     const response = await SignUpDetails.create(SignUp_data);
//     //create a token
//     const token = createToken(response._id).then((result) =>
//       res.json(result, token)
//     );
//   } catch (err) {
//     res.json(err);
//   }
// };
// //get SignUp details
// const getSignUpDetails = async (req, res) => {
//   try {
//     const SignUpDetails = await SignUpDetails.find({});

//     res.status(200).json(SignUpDetails);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// module.exports = { sendSignUpDetails, getSignUpDetails };
