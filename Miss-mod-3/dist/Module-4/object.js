"use strict";
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    ;
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
    ;
}
;
const dog = new Animal("german shepard", "dog", "ghew ghew");
const cat = new Animal("Persian ", "cat", "Meaw Meaw");
console.log(cat.makeSound());
