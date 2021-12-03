import { readInputFileSplitLines } from "../utils/utils.ts";

const inputFile = await readInputFileSplitLines(2021, 2);

const input: [string, number][] = inputFile.map(n => n.split(' ')).map(a => [a[0], Number(a[1])]);

let depth = 0;
let pos = 0;
let aim = 0;
input.forEach(n => {
    if (n[0] === 'up') {
        aim -= n[1];
    } else if (n[0] === 'down') {
        aim += n[1];
    } else if (n[0] === 'forward') {
        pos += n[1];
        depth += n[1] * aim;
    }
});
console.log('2:', depth * pos);

