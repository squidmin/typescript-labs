/*
 * Multiple type arrays
 */
let multipleTypeArray = [1, true, 3];
// Same as:
let multipleTypeArrayExplicit: (number | boolean)[] = [1, true, 3];

/**
 * For maintainability, it is good practice to be explicit.
 * Without explicitly typing the variable, someone could add a string and suddenly, the
 *   variable allows a number, boolean, and string.
 */


/**
 * Instantiate a strongly-typed array object
 */
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


/**
 * Read-only arrays
 */

/**
 * Doesn't compile because list.push() attempts to write to the array,
 *   which is blocked when using read-only arrays.
 */ 
// let list: ReadonlyArray<number> = [1, 2];
// list.push(3);
// console.log(list);

/**
 * Mutating a const array
 */
const _list: number[] = [1, 2];
_list.push(3);  // This works because it doesn't try to change the actual reference to the array.

/**
 * Re-instantiating a read-only array
 */
let list: readonly number[] = [1, 2];
list = [4, 5];
console.log(list);


export {};