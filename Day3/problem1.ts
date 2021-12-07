import { readInputFileSplitLines } from "../utils/utils.ts";

const inputFile = await readInputFileSplitLines(2021, 3);

const input: string[] = inputFile;
const gammaString = input[0].split("");
for (let i = 0; i < input[0].length; i++) {
    let zeroes = 0;
    let ones = 0;
    for (let j = 0; j < input.length; j++) {
        if (input[j][i] === '0') {
            zeroes++;
        } else {
            ones++;
        }
    }
    if (zeroes > ones) {
        gammaString[i] = '0';
    } else {
        gammaString[i] = '1';
    }
}
const gamma = parseInt(gammaString.join(''), 2);
const epsilon = parseInt(gammaString.map(a => a === '0' ? '1' : '0').join(''), 2);
console.log('1:', `${gamma} * ${epsilon} =`, gamma * epsilon);
