"use strict";
const course = "Next level-5 course";
let rollNumber = 123;
// Implicit type declaration
const course2 = {
    name: "Learn typescript",
    price: 20,
    old: 30,
};
// explicit type declaration
const course3 = {
    name: "Learn typescript",
    price: 20,
    // will get error 
    // old: 20,
};
console.log(course2);
console.log(course);
