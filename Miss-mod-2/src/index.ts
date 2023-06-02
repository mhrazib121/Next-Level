// npx ts-node-dev --respawn ./src/index.ts

const course: string = "Next level-5 course";

let rollNumber: number = 123;

// Implicit type declaration
const course2 = {
    name: "Learn typescript",
    price: 20,
    old: 30,
};

// explicit type declaration
const course3: { name: string, price: number } = {
    name: "Learn typescript",
    price: 20,
    // will get error 
    // old: 20,
};

console.log(course2);

console.log(course);

$(document).on("ready", function () {
    // code one
})
$(window).on("load", function () {
    // code two
})
$("button").click(function () {
    alert("clicked")
})

if ($(".some-selector").length) {
    // run the code 
}