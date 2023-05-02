function add(num1: number, num2: number): number {
    return num1 + num2;
};

add(2, 2);

const addArrow = (num1: number, num2: number): number => {
    return num1 + num2
};

const person: {
    name: string;
    balance: number;
    // addBalance(money: number): number;
    addBalance(money: number): string;
    // addBalance(money: number): void; // [void is used where there is no data.]
} = {
    name: "Razib",
    balance: 10,
    addBalance(money: number) {
        return `My balance ${this.balance + money}`
    }
};

// What is the output of the following code?

function generateAdder(a: number): (b: number) => number {
    return function (b: number) {
        return a + b;
    };

}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));