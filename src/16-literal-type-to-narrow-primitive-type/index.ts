/**
 * A literal type means that the value is an exact one. For example, a string literal of
 *   “test” would mean that the value of the variable can only be “test”.
 * A literal type can be made up of multiple types or values from primitive JavaScript types.
 */

/**
 * String literals
 */

/**
 * A string literal is a way to define a string that limits the potential values to be used.
 * It’s used mostly with a union, which allows specifying more than one string value.
 * Imagine that you allow several strings’ values but want to limit the choice to specific ones.
 * You could use an enumeration, but a string may be more clear or compatible with
 *   existing libraries. For example, you may want to limit the value to
 *   “north”, “south”, “east”, or “west.”
 */
let direction: string = "no-where";  // We desired to be "north", "south", "east", "west".
/**
 * To create a string literal, define each value separated by the pipe symbol | (union of values).
 * TypeScript will not compile if it goes outside the defined range.
 * The code below does not compile because yourDirection is declared to be of the Direction
 *   string literal type. Changing it to a string allows us to assign any string or change
 *   the value to one of the four defined types, and will fix the transpilation.
 */
type Direction = "north" | "south" | "east" | "west";
let myDirection: Direction = "north";
// let yourDirection:Direction = "no-where"; // Does not compile


/*********************************************************************************************/


/**
 * A string literal can be assigned without type by assigning a string value to with the
 *   const declaration or as const.
 */
const stringLit1 = "oneValueOnly";
let stringLit2 = "oneValueOnly" as const;


/*********************************************************************************************/


/**
 * Number literals
 */

/**
 * Similarly, it is possible to use numbers as a set of values. Using multiple defined numbers
 *   is convenient if you have a set of values that you accept but are not all numbers.
 * For example, if you create a framework where you want to create a view grid system that
 *   works on a grid of twelve columns, you may restrict the choices from one to twelve.
 */
type Column = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
let menuSize: Column = 4;
// let mainContent: Column = 100; // Does not compile because only accept 1 to 12


/*********************************************************************************************/


/**
 * Literal mixed type
 */

/**
 * It is possible to also create a mixed type that causes the literal to be of multiple types
 *   with the union.
 * In the following code, you have a line that does not compile because one
 *   of the literals is not covered, causing the never type to be assigned even though it
 *   cannot be compiled.
 */
type OptionOpen = true | false | "true" | "false"; // Actual: boolean | "true" | "false"

// Uncommenting the false option would result in compilable code since all values of the type are handled.
// function openWindow(option: OptionOpen): void {
//   if (option === "true" || option === true) {

//   } else if (option === "false" /* || option === false */) {

//   } else {
//     const c: never = option;
//   }
// }


export {};
