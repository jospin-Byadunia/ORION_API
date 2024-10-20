const express = require("express");
//const bodyParser = require("body-parser");
const v1OrderRouter = require("./V1/routes/orderRoutes");
const v1ServiceRouter = require("./v1/routes/serviceRoutes");
const v1UserRouter = require("./V1/routes/userRoutes");
const v1VehiculeRouter = require("./V1/routes/vehiculeRoutes");

//DB
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//connect DB
dotenv.config({ path: "G:/Orion_API/src/V1/config.env" });

const DB = process.env.DATABASE_LOCAL;
mongoose.connect(DB).then(() => console.log("Connection to DB successfull"));

const app = express();
app.use(express.json());

// Use the built-in URL-encoded middleware for parsing URL-encoded requests
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;
//app.use(bodyParser);
app.use("/api/v1/order", v1OrderRouter);
app.use("/api/v1/service", v1ServiceRouter);
app.use("/api/v1/user", v1UserRouter);
// app.use("/api/v1/vehicule", v1VehiculeRouter);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
