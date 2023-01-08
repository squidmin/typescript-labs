const x: number = 10;
let z: number = 15;
let p: number = 123;
console.log("Here are 3 variables of type number", x, z, p);


// Number base
/*
 * You can also assign base 16 (hexadecimal), base 8 (octal), or base 2 (binary)
 *   with the prefix 0x, 0o, and 0b, though they're rarely used.
 */
let dec: number = 10;
let hex: number = 0x10;
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers:", dec, hex, octo, bin);


// Separator
/**
 * A numberic separator is a feature that simplifies writing numbers.
 * A long number can be hard to read and adding a separator can reduce confusion.
 */
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000");
const numericSeparator6 = parseInt("5_000");
const numericSeparator7 = 0xFAB_F00D;
const numericSeparator8 = 0b1111_11111000_11110000_00001100;
console.log(numericSeparator1);
console.log(numericSeparator2);
console.log(numericSeparator3);
console.log(numericSeparator4);
console.log(numericSeparator5);
console.log(numericSeparator6);
console.log(numericSeparator7);
console.log(numericSeparator8);

/**
 * When using NaN, JavaScript cannot transform a string with a separator as a proper number.
 * TypeScript does not warn or give an error at transpilation time because it only checks that the
 *   type is string which is legit but does not evaluate every operation.
 * 
 * Numeric separators work with decimal, octal, binary, and hexadecimal bases. It is available
 *   from TypeScript 2.7 and is now available in the last version of ECMAScript.
 * It is possible to use thisfeature in older versions of ECMAScript because TypeScript transforms
 *   the separator out during transpilation and you can target older version of ECMAScript and
 *   still use the feature.
 */


export {};