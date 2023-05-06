"use strict";
class Developer {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    ;
    makePractice(time) {
        return `${this.name} will practice ${time} hours daily`;
    }
}
;
class JuniorDeveloper extends Developer {
    constructor(name, age, role, salary) {
        super(name, age, role);
        this.salary = salary;
    }
}
;
class SeniorDeveloper extends JuniorDeveloper {
    constructor(name, age, role, experience, salary) {
        super(name, age, role, salary);
        this.experience = experience;
        this.experience = experience;
    }
    ;
}
;
const developer12 = new JuniorDeveloper("Razib", 20, "Junior front-end developer", 25000);
const developer10 = new SeniorDeveloper("Razib", 20, "Full Stack developer", 60000, 5);
const res12 = developer12.makePractice(8);
// developer12.salary;
// const res10 = developer10
console.log(developer10);
