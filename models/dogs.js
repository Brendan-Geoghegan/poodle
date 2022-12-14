const dogsData = require('../data');

class Dog {
    constructor(data) {
        this.id = data.id;
        this.breed = data.breed;
        this.link = data.link;
        this.attributes = data.attributes;
        this.image = data.image;
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

    static findByBreed(breed) {
        const dogData = dogsData.filter((dog) => dog.breed === breed)[0];
        if (!dogData) {
            return;
        }
        const dog = new Dog (dogData);
        return dog
    }

    // Unused
    static create(dog) {
        const newDogId = dogsData.length + 1;
        const newDog = new Dog({id: newDogId, ...dog});
        dogsData.push(newDog)
        return newDog;
    }

    static get randomDog() {
        const num = Math.floor(Math.random() * dogsData.length);
        const randomDog = dogsData.filter((dog) => dog.id === num)[0];
        console.log(randomDog);
        const dog = new Dog (randomDog);
        return dog;
    }
}

module.exports = Dog;
