import { readInputFileSplitLines } from "../utils/utils.ts";

const inputFile = await readInputFileSplitLines(2021, 3);
const input = inputFile;

const oxygenGeneratorRating = reduce(input, 0, (counts: Array<number>) => {
    if (counts[1] < counts[0]) {
        return 0;
    }
    return 1;

});

const co2ScrubberRating = reduce(input, 0, (counts: Array<number>) => {
    if (counts[0] > counts[1]) {
        return 1;
    }
    return 0;
});

console.log(parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2));

function reduce(input: Array<string>, place: number, comparator: (counts: Array<number>) => number): string {
    const counts = [0, 0];
    if (input.length === 1) {
        return input[0];
    } else {
        for (const value of input) {
            const bit = +value[place];
            counts[bit]++;
        }
        const bit = comparator(counts);
        return reduce(input.filter(value => +value[place] === bit), place + 1, comparator);
    }
}
