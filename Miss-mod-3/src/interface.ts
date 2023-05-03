// Object interface 
interface myFriendsType {
    name: string;
    age: number;
    isMarried: boolean;
};

interface extendFriendsType extends myFriendsType {
    address: string;
}
const myFriends: extendFriendsType = {
    name: "Sazib",
    age: 22,
    isMarried: false,
    address: "Dhaka",
};
console.log({ myFriends });



// Array interface
interface myArrayType {
    [index: number]: string;
};

const rollNumber: myArrayType = ["3", "3"];

// function interface 
interface addMyBalanceType {
    (x: number, y: number): number;
};

const addMyBalance: addMyBalanceType = (x, y) => {
    return x + y;
};

console.log(addMyBalance(2, 5));