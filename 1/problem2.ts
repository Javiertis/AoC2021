async function problem2() {
    const decoder = new TextDecoder("utf-8");

    const input: number[] = decoder.decode(await Deno.readFile("input.txt")).split('\n').map(n => Number(n));

    let parsedInput: number[] = [];
    input.forEach((val, index, self) => {
        if (index + 3 >= self.length) {
            return;
        }
        parsedInput.push(val + self[index + 1] + self[index + 2]);
    });
    console.log(parsedInput);
    let result = parsedInput.reduce((prev, val, index, self) => {
        if (index < self.length && val < self[index + 1]) {
            return prev++;
        }
        return prev;
    }, 0);
    console.log(result);
}
problem2();
