// In guard 

type NormalUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: "admin";
};

const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
        return `${user.name} is an ${user.role}`
    } else {
        return `I am a normal user`
    }
};

const normalUser1: NormalUser = { name: "Mr. X" };
const adminUser1: AdminUser = { name: "Mr. X", role: "admin" };

console.log(getUser(adminUser1));
console.log(getUser(normalUser1));

// instaceof guard

class Animal2 {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

};

class Dog extends Animal2 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeBark() {
        console.log("This dog is barking ")
    }
}
class Cat extends Animal2 {
    constructor(name: string, species: string) {
        super(name, species);
    }
    makeMeaw() {
        console.log("This cat is meawing ")
    }
};

function isDog(animal: Animal2): animal is Dog {
    return animal instanceof Dog;
}
function isCat(animal: Animal2): animal is Cat {
    return animal instanceof Cat;
}

// function getAnimal(animal: Animal2) {
//     if (animal instanceof Dog;) {
//         animal.makeBark()
//     } else if (animal instanceof Cat) {
//         animal.makeMeaw()
//     } else {
//         console.log("I am not animal");
//     }
// };
function getAnimal(animal: Animal2) {
    if (isDog(animal)) {
        animal.makeBark()
    } else if (isCat(animal)) {
        animal.makeMeaw()
    } else {
        console.log("I am not animal");
    }
};

const animal4 = new Dog("German", "dog");
const animal3 = new Cat("Persian", "cat");

getAnimal(animal4);
getAnimal(animal3);
getAnimal({ name: "Mr.y", species: "Man`" })
