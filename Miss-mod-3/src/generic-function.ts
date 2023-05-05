// normal  arrow function
const createArray = (param: string) => {
    return [param];
};

// Generic function
const createArray1 = <T>(param: T): T[] => {
    console.log("d");
    return [param]
};

const result1 = createArray1("Bangladesh");
console.log(result1);

// Tuple generic function
const createArray2 = <T, U>(param: T, param1: U): [T, U] => {
    console.log("d");
    return [param, param1]
};