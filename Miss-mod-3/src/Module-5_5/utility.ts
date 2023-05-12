// Pick

interface Person {
    name: string;
    email: string;
    contact: string;
};

type Contact = Pick<Person, "contact" | "email">;

// Omit 

type Name = Omit<Person, "contact">;

// Read only type

const data: Readonly<Person> = {
    name: "razib",
    email: "ads@gmail.com",
    contact: "321312312"
}

// data.contact = "4324342";

// Partial type 

type PartialType = Partial<Person>;

// index signature 

type myObj = {
    [key: string]: string;
    // [key: "a"| "b"]: string;
}

const myObjDec: myObj = {
    a: "a",
    b: "b",
    c: 'c'
};

// Record type 

type myObject = Record<"a" | "b" | "c", string>

const res: myObject = {
    a: "s",
    b: "s",
    c: "s"
}