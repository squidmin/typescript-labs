let myArray1 = new Array<number>();
printArray(myArray1);

let myArray2: Array<number> = [];
printArray(myArray2);

let myArray3: number[] = [];
printArray(myArray3);

function printArray(a: number[]): void {
  console.log(`Before: ${a}`);
  a.push(1);
  console.log(`After: ${a}`);
}

export {};
