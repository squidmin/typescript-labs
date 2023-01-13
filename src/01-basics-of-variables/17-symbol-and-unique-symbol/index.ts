/**
 * TypeScript strongly types the primitive type, symbol, and its subtype, unique symbol.
 */


/**
 * Symbol
 */

/**
 * Symbol is a primitive type in ECMAScript 2015 and beyond. TypeScript supports the standard.
 * The equal sign assigns a value to a symbol without the keyword new but must have parentheses,
 *   like an object. A symbol's goal is to provide a unique and immutable variable.
 */

/**
 * A symbol can take a parameter with a string value. Defining two symbols with the same parameter
 *   will produce a different symbol. In fact, the parameter is just there to help developers when
 *   printing the symbol to the console. It's a way to differentiate them visually.
 */

/**
 * The main difference between a constant and a symbol is that the symbol is unique. With a string
 *   constant, someone could pass a string with the same value as the constant and it would be
 *   accepted. However, using a constant symbol, only the same symbol constant would equal that value.
 * Nothing can coerce a symbol into a string. This means that you cannot add a string to it and
 *   expect it to become a string.
 */

let v1 = "value1";
let v2 = "value2";
if (v1 === v2) {
  console.log("Equal when string");  // This will print
}
let s1 = Symbol("value1");
let s2 = Symbol("value2");
if (s1 === s2) {
  console.log("Equal when symbol");  // This will not print, they are not equal
}


/*********************************************************************************************/


/**
 * An object property can be a symbol. Its assignment uses the symbol between brackets.
 * Do keep in mind that a property defined with a symbol won’t appear when you invoke
 *   Object.defineProperty or Object.getOwnPropertyNames.
 */

const prop1 = Symbol();
const obj = { [prop1]: "p1" };

// console.log(obj.prop1);  // Does not compile 
console.log(obj[prop1]);  // "p1"


/*********************************************************************************************/


/**
 * Unique symbol
 */

/**
 * A unique symbol can only be defined with the use of const or readonly static.
 *   A unique symbol is used to create a literal type that cannot be of another symbol.
 *   Hence, the type is not symbol but a symbol with a unique identity.
 */

/**
 * Consider that a string can be a string variable or a string literal.
 *   Hovering over the first variable of the following code shows that it is type string,
 *   while the type of the second variable is Value3.
 */

let aString: string = "Value 1";
aString = "Value 2";

const aSecondString = "Value3";


/*********************************************************************************************/


/**
 * Back to the unique symbol, it is similar. In the following code, both the first and
 *   second variables are of type Symbol. However, the last symbol is not of type Symbol,
 *   but of type typeof(aThirdSymbol).
 */

let aSymbol: Symbol = Symbol("Value1");
aSymbol = Symbol("Value2");  // Type is: Symbol

const aSecondSymbol: Symbol = Symbol("Value3");  // Type is: Symbol
const aThirdSymbol: unique symbol = Symbol("Value3");  // Type is: typeof(aThirdSymbol)


/*********************************************************************************************/


/**
 * A unique symbol can only be declared with const. They are also unique therefore, if compared,
 *   will always return false. The next example compares a Symbol with another Symbol as well
 *   as to a unique symbol.
 */

let sym1: Symbol = Symbol("sym1");  // Type is: Symbol
const sym2: Symbol = Symbol("sym2");  // Type is: Symbol
const sym3: unique symbol = Symbol("sym3");  // Type is: typeof(s3)
const sym4: unique symbol = Symbol("sym4");  // Type is: typeof(s4)

if (sym1 === sym2) {
  console.log("sym1 and sym2 are the same symbol");  // Won't print
}

if (sym3 === sym2) {
  console.log("sym3 and sym2 are the same symbol");  // Won't print
}

// if (sym3 === sym4) {
//   // Does not compile
// }


export {};