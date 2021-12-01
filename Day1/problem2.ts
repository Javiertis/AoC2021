import { greaterThanPreviousReduce, input } from "./problem1.ts";

const parsedInput: number[] = input.map((val, index, self) => {
    return (val + self[index - 1] + self[index + 1]);
});

const result = parsedInput.reduce(greaterThanPreviousReduce, 0);
console.log('2:', result);
