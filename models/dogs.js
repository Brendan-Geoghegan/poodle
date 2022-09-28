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

    static findById(id) {
        const dogData = dogsData.filter((dog) => dog.id === id)[0];
        if (!dogData) {
            return;
        }
        const dog = new Dog (dogData);
        return dog
    }

    static create(dog) {
        const newDogId = dogsData.length + 1;
        const newDog = new Dog({id: newDogId, ...dog});
        dogsData.push(newDog)
        return newDog;
    }

    static random() {
        const randomDog = dogData[Math.floor(Math.random() * dogData.length)];
        return randomDog;
    }
}

module.exports = Dog;
