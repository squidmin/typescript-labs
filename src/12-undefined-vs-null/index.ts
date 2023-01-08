/**
 * Does not compile because the variable is consumed before initialization and TypeScript
 *   when configured to be strict, does not allow for interaction with an unassigned variable.
 */
// let variableNotInitialized: string;
// console.log(variableNotInitialized);


/**
 * Increasing the strictness of TypeScript forces developers to use a question mark to
 *   optionally define their variables, which allows undefined.
 * This distinction is used to ensure consistency in our code.
 * With a clean-cut assertion by type of what can be undefined (optional), null, or with
 *   a specific value, the code becomes more comprehensible.
 * For example, a nullable number is two types, not a single one. Dual type (or more than one)
 *   is possible with the concept of 'union'. The union uses the pipe character between the
 *   main type (for example, a number) and 'null'.
 */
let canBeANumberOrNull: number | null;
canBeANumberOrNull = 10;
canBeANumberOrNull = null;
// canBeANumberOrNull = undefined;  // Uncomment and it will not transpile.
console.log(`canBeANumberOrNull === ${canBeANumberOrNull}`);


/**
 * This code would work before TypeScript 2.0
 */
// let numberNullOrUndefined: number | null | undefined = 123;
// numberNullOrUndefined = null; 
// numberNullOrUndefined = undefined; 
// console.log(numberNullOrUndefined);


/**
 * The union of any other type and undefined makes the type optional.
 * Using the question mark syntax or union with undefined produces a similar result
 *   with only minor differences.
 */
function functionWithUndefinedParameter(a: number | undefined, b: number): void { }
functionWithUndefinedParameter(1, 2);
functionWithUndefinedParameter(undefined, 2);
// functionWithUndefinedParameter(, 2);  // Does not compile
/**
 * The difference is that with '| undefined', the parameter with the value, or undefined, must be passed.
 * However, with ?, you can pass undefined or nothing at all.
 */
function functionWithQuestionMarkParameter1(a: number, b?: number): void { }
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1);
/**
 * The question mark is more succinct and doesn't allow a non-undefined parameter to follow in a
 *   function signature. The following code does not compile because 'a' is using optional
 *   and 'b' doesn't have an 'undefined' type.
 */
// function functionWithQuestionMarkBeforeARequiredParameter(a?: number, b: number) { }
/**
 * Optional parameters should always come after non-optional parameters.
 * A union with 'undefined' means that the user must specify 'undefined' which is not really
 *   optional since it must be explicit.
 */
function function1(a: number | undefined, b: number): void {
  console.log(a);
  console.log(b);
}
function function3(a: number, b?: number): void {
  console.log(a);
  console.log(b);
}
function1(1, 2);
function1(undefined, 2);
function3(3);
function3(3, undefined);



/**
 * It is good practice to avoid using null as much as possible and rely instead on undefined.
 * This avoids having to handle undefined and null as well as the actual type.
 * We chose undefined instead of null because of the natural tendency of JavaScript to
 *   lean toward undefined.
 * At any time a variable does not hold a valid value, undefined is the best option.
 * The following code does not compile in TypeScript. However, the same code in JavaScript
 *   (without the type specified) would print 'undefined'.
 */
// let aNumber: number;
// console.log(aNumber);


/**
 * Members in a class set to a single type (without a union) cannot be defined as null or undefined
 *   explicitly but will be undefined until initialized.
 * The time window in between creates a state where the variable is undefined. A variable can be
 *   undefined regardless of its type.
 * The following code would return undefined normally, but with strictness turned up, TypeScript
 *   will not compile. Instead, it will return an exception indicating that the variable
 *   must be initialized.
 */
// class MyClass {
//   private a: number;  // Does not compile
//   constructor() {
//     console.log(this.a);  // Does not compile
//   }
// }


/**
 * The following code demonstrates that null adds an additional level of complexity that
 *   most of the time can be avoided by using a type or undefined.
 */
console.log("\nThe following output demonstrates that null adds an additional level of complexity that most of the time can be avoided by using a type or undefined.");
function f1(p1: null | undefined, p2: undefined | number, p3?: number): void {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}
f1(null, 2, undefined);


/**
 * Another case in which undefined is useful is when function calls use optional data.
 * Data can be optional and handled with a default behavior or value when code needs to access
 *   the value of the variable. Often, third-party libraries provide default values but let
 *   users customize function calls. The third-party code checks to see if the option is defined
 *   (not undefined) and if it is, uses it. Otherwise, if undefined, the library will use the
 *   default value.
 */
console.log("\nAnother case in which undefined is useful is when function calls use optional data.");
function functionWithDefault(p1: number = 1): void {
  console.log(p1);
}
functionWithDefault();
functionWithDefault(undefined);
functionWithDefault(100);


/**
 * When data is pulled from external sources, undefined may be used. The variable starts undefined
 *   until the data arrives from the external sources.
 */
console.log("\nWhen data is pulled from external sources, undefined may be used. The variable starts undefined until the data arrives from the external sources.");
function getDelayedValue(): string {
  let dataIsNotYetThere = undefined;
  dataIsNotYetThere = fetchData();
  console.log(dataIsNotYetThere);
  return dataIsNotYetThere;  // Should have a value at this point.
}
function fetchData(): string { return 'somevalue'; }
getDelayedValue();


/**
 * Undefined and optional values transpile to the same code as if nothing were assigned to the
 *   variables. This is because JavaScript is not aware of the concept.
 * For example, a numeric variable with no value will simply be undefined (not null).
 */

/**
 * A good use case for null is to differentiate between:
 *   1. An uninitialized variable: should be undefined
 *   2. A variable clearly representing the absence of something: should be null
 *   3. A variable representing a value: should neither be undefined, nor null
 * For example, consider the situation where you fetch data. The function can return an actual
 *   value, null if the data is actually present but has no value, or undefined if the data
 *   has not yet been computed.
 */


export {};