async function problem1() {
    const decoder = new TextDecoder("utf-8");

    const input: string[] = decoder.decode(await Deno.readFile("input.txt")).split('\n');
    console.log(input);
    let result = 0;
    input.map(n => Number(n)).forEach((val, index, self) => {
        if (index === 0) {
            return;
        }
        if (val > self[index - 1]) {
            result++;
        }
    });
    console.log(result);
}
problem1();
