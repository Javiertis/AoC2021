const inputFile = await Deno.readTextFile("./Day1/input.txt");

export const input: number[] = inputFile.split('\n').map(n => parseInt(n));

export const greaterThanPreviousReduce = (prev: number, val: number, index: number, self: number[]): number => {
    if (index < self.length && val < self[index + 1]) {
        return ++prev;
    }
    return prev;
};

const result = input.reduce(greaterThanPreviousReduce, 0);

console.log('1:', result);
