const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
app.use(bodyParser.json())
app.use(cors());

const port = 8000;

const dogRoutes = require("./controllers/dogs");
app.use("/dogs", dogRoutes);

app.listen(port, () => console.log(`Poodle Search app live on http://localhost:${port}!`))
