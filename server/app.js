const cors = require('cors');
const express = require('express')

const app = express()
app.use(cors());
const port = 8000;

const Dog = require("../models/dogs");

app.listen(port, () => console.log(`Poodle Search app live on http://localhost:${port}!`))

app.get("/dogs", (req, res) => {
    const dogsData = Dog.all
    res.send(dogsData);9
})

// Unused
app.post('/dogs', (req, res) => {
    const data = req.body;
    const newDog = Dog.create(data);
    res.send({message: `${newDog.breed} successfully added to our collection.`});
});
