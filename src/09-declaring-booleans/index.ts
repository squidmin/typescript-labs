/**
 * TypeScript allows other value types besides boolean to act like a boolean.
 * For example, undefined and null, -0, 0, and NaN will return false.
 * This is because JavaScript specifies many values to be "falsey."
 */

let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];

/**
 * The parameter of the function is of type any.
 * If you change the type to boolean, TypeScript will not compile.
 * The last two elements are true because an empty object is still an object and an empty
 *   array, even when empty, is still an array.
 */
function print(b: any | any[]): void {
  if (b) {
    console.log(`The value ${b} is true.`);
  } else {
    console.log(`The value ${b} is false.`);
  }
}

print(x1);
print(x2);
print(x3);
print(x4);
print(x5);
print(x6);
print(x7);


// Conversion with the Boolean() function
console.log(Boolean(false));  // False
console.log(Boolean("false"));  // True
console.log(Boolean("not false"));  // True


export {};