interface userType {
    // Literal Type
    name: "Razib",
    age: number,
    readonly company: string,
    passion?: string,
    isMarried: false
}
const user2: userType = {
    name: "Razib",
    age: 25,
    company: "Self-employ",
    // passion type is String | undefined 
    passion: "Programming",
    // will get error if uncomment wife
    // wife: "Nai",
    isMarried: false
}

// value of company is not changable
// user2.company = "Programming hero"; 