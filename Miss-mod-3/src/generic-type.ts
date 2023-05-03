// Normal type
const clsRollNumber: Array<number> = [3, 4, 5];

// Generic type
type genericType<T> = Array<T>;

const clsRoll: genericType<number> = [4, 4, 5];
const clsRoll2: genericType<string> = ["4", "4", "5"];

// Generic Tuple Type

type GenericTupleType<x, y> = [x, y];

const relation: GenericTupleType<string, string> = ["Alex", "Kate"];

interface relationWithSalaryType { name: string, salary: number } 
const relationWithSalary: GenericTupleType<relationWithSalaryType, string> = [
    {
        name: "Jhon",
        salary: 242343
    },
    "kate winslet"
];

