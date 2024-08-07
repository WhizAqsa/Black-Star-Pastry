require("dotenv").config();
const blackStarRoutes = require("./routes/blackstar");
const { config } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();

//middleware
app.use(express.json()); //to parse the body sent in a req
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/blackstar", blackStarRoutes);

//connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    //listen to port for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db and listening to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
