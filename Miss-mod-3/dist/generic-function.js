"use strict";
// normal  arrow function
const createArray = (param) => {
    return [param];
};
// Generic function
const createArray1 = (param) => {
    console.log("d");
    return [param];
};
const result1 = createArray1("Bangladesh");
console.log(result1);
// Tuple generic function
const createArray2 = (param, param1) => {
    console.log("d");
    return [param, param1];
};
