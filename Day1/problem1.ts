import { readInputFileSplitLines } from "../utils/utils.ts";

const inputFile = await readInputFileSplitLines(2021, 1);

const input: number[] = inputFile.map(n => parseInt(n));

const greaterThanPreviousReduce = (prev: number, val: number, index: number, self: number[]): number => {
    if (index < self.length && val < self[index + 1]) {
        return ++prev;
    }
    return prev;
};

const result = input.reduce(greaterThanPreviousReduce, 0);

console.log('1:', result);
