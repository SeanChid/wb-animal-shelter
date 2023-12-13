const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet() {
        console.log(`Hi, I'm ${this.name} the ${this.species}`)
    }

    feed() {
        this.hunger -= 20
        console.log(`Yum, I love food`)
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet(){
        console.log(`Meow, I'm ${this.name} the ${this.species}`)
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}`)
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    greet(){
        console.log(`Woof, I'm ${this.name} the ${this.species}`)
    }

    feed(){
        this.hunger -= 20
        console.log(`Yum, I love ${this.food}`)
    }
}

class AnimalShelter {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    adopt(animal) {
        this.animals.splice(this.animals.indexOf(animal), 1)
    }

    getAnimalsBySpecies(species) {
        return this.animalData.filter(a => a.species === species)
    }
}

const shelter = new AnimalShelter()

for (let a of animalData) {
    let animal
    const hunger = a.hunger ? a.hunger: 50
    if (a.species === 'cat') {
        animal = new Cat(a.name, a.color, hunger)
    } if (a.species === 'dog') {
        animal = new Dog(a.name, a.color, hunger)
    } else {
        animal = new Animal(a.name, a.species, a.color, hunger)
    }
    shelter.addAnimal(animal)
}

for (const animal of shelter.animals) {
    animal.greet()
    animal.feed()
}