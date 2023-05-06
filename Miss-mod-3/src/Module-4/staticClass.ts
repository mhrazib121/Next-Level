// class Counter {
//     counter: number;
//     constructor(counter: number) {
//         this.counter = counter;
//     };

//     increment() {
//         return this.counter += 1;
//     }
//     decrement() {
//         return this.counter -= 1;
//     }
// };
class Counter {
    static counter: number = 0;

    increment() {
        return Counter.counter += 1;
    }
    decrement() {
        return Counter.counter -= 1;
    }
};

// const instance1 = new Counter(0);
// const instance2 = new Counter(6);
const instance1 = new Counter();
const instance2 = new Counter();

console.log(instance1.increment());
console.log(instance2.decrement());