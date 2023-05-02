// Ternary operator

const age: number = 22

// if (age >= 18) {
//     console.log({ age });
// }else{
//     console.log("No");
// }
const isAdult = age >= 18 ? "Yes" : "No";

console.log({ isAdult });

// Nullish Coeslancing Operator (It's only work on Null and Undefined)

const isAuthenticatedUser = undefined;

const userName = isAuthenticatedUser ?? "Guest";

console.log({ userName }); 