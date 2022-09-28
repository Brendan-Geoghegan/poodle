const express = require('express');
const router = express.Router();

const Dog = require('../../models/dogs');

router.get("/", (req, res) => {
    const dogsData = Dog.all
    res.send(dogsData);
});

router.get("/:id", (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const selectedDog = Dog.findById(id);
        if (!selectedDog) {
            throw new Error("Dog not found")
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
    res.send({message: `${newDog.breed} successfully added to our collection.`});
});

module.exports = router;
