"use strict";
function add(num1, num2) {
    return num1 + num2;
}
;
add(2, 2);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
const person = {
    name: "Razib",
    balance: 10,
    addBalance(money) {
        return `My balance ${this.balance + money}`;
    }
};
// What is the output of the following code?
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
