//Arrays
const numbers: number[] = [1, 2, 3];
numbers.push(2);

const dados: (string | number)[] = ["1", 2, 3, "4"];

const valores: readonly string[] = ["a", "b"];

//Tupas

const cordinates: [number, number] = [10.2, 23.2];

const cordsOptional: [number, number, number?] = [12, 23, 2];
if (!cordsOptional[2]) {
  cordsOptional.push(40);
}

function returnEven(): [string, number] {
  return ["idade", 24];
}
