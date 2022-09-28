const express = require('express');
const router = express.Router();

const Dog = require('../../models/dogs');

router.get('/', (req, res) => {
    const dogsData = Dog.all
    res.send(dogsData);
});


// Unused
router.post('/', (req, res) => {
    const data = req.body;
    const newDog = Dog.create(data);
    res.send({message: `${newDog.breed} successfully added to our collection.`});
});

module.exports = router;
