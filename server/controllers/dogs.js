const express = require('express');
const router = express.Router();

const Dog = require('../../models/dogs');

router.get("/", (req, res) => {
    const dogsData = Dog.all
    res.send(dogsData);
});

router.get('/random', (req, res) => {
    const randDog = Dog.randomDog;
    res.send(randDog);
  })

router.get("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedDog = Dog.findById(id);
        if (!selectedDog) {
            throw new Error("Ruh-roh! Dog not found!")
        }
        res.send(selectedDog)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

router.get("/breed/:breed", (req, res) => {
    try {
        console.log(req.params.breed)
        const breed = req.params.breed;
        const selectedDog = Dog.findByBreed(breed);
        if (!selectedDog) {
            throw new Error("Ruh-roh! Dog not found!")
        }
        res.send(selectedDog)
    } catch (err) {
        console.log(err)
        res.status(404).send({message: err.message})
    }
})

// Unused
router.post("/", (req, res) => {
    const data = req.body;
    const newDog = Dog.create(data);
    res.send({message: `${newDog.breed} successfully added to our kennels!`});
});

module.exports = router;
