const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
app.use(bodyParser.json())
app.use(cors());

const dogRoutes = require("./controllers/dogs");
app.use("/dogs", dogRoutes);

module.exports =  app;
