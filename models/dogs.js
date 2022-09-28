const dogsData = require('../data');

class Dog {
    constructor(data) {
        this.id = data.id;
        this.breed = data.breed;
    }

    static get all() {
        const dogs = dogsData.map((dog) => new Dog(dog));
        return dogs
    }

    static create(dog) {
        const newDogId = dogsData.length + 1;
        const newDog = new Dog({id: newDogId, ...dog});
        dogsData.push(newDog)
        return newDog;
    }
}

module.exports = Dog;
