class Developer {
    constructor(public name: string, public age: number, public role: string) { };

    makePractice(time: number): string {
        return `${this.name} will practice ${time} hours daily`
    }
};

class JuniorDeveloper extends Developer {
    constructor(name: string, age: number, role: string, public salary: number) {
        super(name, age, role)
    }
};

class SeniorDeveloper extends JuniorDeveloper {
    constructor(name: string, age: number, role: string, public experience: number, salary: number) {
        super(name, age, role, salary);
        this.experience = experience
    };
};

const developer12 = new JuniorDeveloper("Razib", 20, "Junior front-end developer", 25000);
const developer10 = new SeniorDeveloper("Razib", 20, "Full Stack developer", 60000, 5);

const res12 = developer12.makePractice(8);
// developer12.salary;
// const res10 = developer10
console.log(developer10);