/**
 * Generic interface
 * This lesson explains how TypeScript can infer a type.
 * The following topics are covered:
 *   - Inference and generic
 *   - Implicit type with generic
 */


/*********************************************************************************************/


/**
 * Inference and generic
 */

/**
 * Inference with generic is possible. If a function takes a parameter of type 'T' and it returns 'T'
 *   as well, the parameter assigned will define the generic type, and the return is inferred to be
 *   type 'T'. The only exception is that if your function doesn't use the value 'T', it will return
 *   an empty object type.
 */
function genericInferred1<T>(param: T) {}
genericInferred1("str"); // T is of type string by inference.
genericInferred1<string>("str"); // Same as above, no inference.

/**
 * The function in the example above takes a string on the line that reads
 *   genericInferred("str"); // T is of type string by inference.
 * implicitly, and on the line that reads
 *   genericInferred<string>("str"); // Same as above, no inference.
 * explicitly, but in both cases could be replaced with any other type.
 * The reason is that 'T' does not have any constraint.
 */
function genericInferred2<T>(param: T) {}
genericInferred2(1);
genericInferred2(true);
genericInferred2({ custom: "sure", });


/*********************************************************************************************/


/**
 * Implicit type with generic
 */

/**
 * The type does not need to be specified, but regardless, the type passed inside the function will
 *   always be generic. For example, the above line that reads
 *     genericInferred2(1);
 *   is using the 'number' type. The above line that reads
 *     genericInferred(true);
 *   is using a 'boolean' type. The above line that reads
 *     genericInferred2({ custom: "sure", });
 *   is using a custom object.
 */

/**
 * As seen, generic constraints must be used in order to access a portion of the inferred type.
 */
function genericInferred3<T extends string>(param: T) { return param.length; }
console.log(genericInferred3("Four"));
// genericInferred3(123); // Does not transpile.
type UUID = string;
let id: UUID = "123-456";
console.log(genericInferred3(id));

/**
 * The code above illustrates that the generic function takes anything that extends the 'string' type.
 *   The line above that reads
 *     function genericInferred3<T extends string>(param: T) {
 *   has a constraint, specified using the 'extends' keyword after the generic type 'T'.
 * This could be a string or a type based on a string (like the 'UUID' type).
 * On the line that reads
 *   type UUID = string;
 *   we define a custom 'UUID' type. It is actually an alias to 'string'. While it might be insignificant,
 *   it is more descriptive, and easier to understand what the string should contain.
 * In both cases, the code infers the type and the specific type of 'T' is not explicitly needed.
 *   In contrast, the commented line
 *     genericInferred3(123); // Does not transpile.
 *   causes a transpilation error because the value '123' is of type 'number' and does not fulfill the
 *   constraint that 'T' ought to be extending 'string'.
 */


export {};
