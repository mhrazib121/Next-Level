// Module 
import { add as addTwo } from "./Main";
import methods from "../utils/index";

const add = (p: number, p2: number, p3: number): number => {
    const result = p + p2 - p3;

    return result;
}

add(2, 2, 7);

addTwo(3, 4);

methods.add(4, 5)