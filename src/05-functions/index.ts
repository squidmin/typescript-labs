/**
 * Definition
 * In this lesson, you'll see a high-level definition of a function in TypeScript.
 * The following topics are covered:
 *   - Functions and TypeScript
 *   - Functions and keywords
 *   - Functions and scope
 */


/*******************************************************************************************************/


/**
 * Functions and TypeScript
 * Functions are at the core of JavaScript. The language is function-scoped.
 * TypeScript doesn't make any changes in this regard and embraces the use of a class to delimit scope,
 *   which is also a feature of ECMAScript 2015.
 * 
 * Chapter goals:
 *   - Review how you can define functions in TypeScript and draw parallels to JavaScript.
 *   - See how TypeScript enhances functions by providing strong signatures that define parameters
 *       and return types.
 *   - Explore the outline of the 'this' pointer which is often confusing but simplified with TypeScript.
 */


/*******************************************************************************************************/


/**
 * Functions and keywords
 * The keyword 'function' followed by the name of the function defines a new function. 'Named function'
 *   is the explicit use of the 'function' keyword to identify a function. With the same keyword, you can
 *   create an anonymous function with no name. The anonymous function can use a variable for future invocation.
 *   In both cases, the function can be used multiple times and return a single value.
 * 
 * In the below code example, the line that reads
 *     function fctNamedFunction1() {  // Named function
 *   has a named function. It is invoked on the line that reads
 *     fctNamedFunction1();
 *   by using the name with parentheses. Similarly, the named function can be invoked by the variable name 'f1'.
 * Note that you cannot invoke by name. The only role of naming as we did on the line that reads
 *     let f1 = function fctNamedFunction2() {  // Named function
 *   is to provide additional detail when debugging and having the name of the function visible in stack traces.
 * The function defined on the line that reads
 *     let f2 = function () {  // Anonymous function
 *   is anonymous and can be invoked with the variable name 'f2' like on the line that reads
 *     f2();
 * The last example is an anonymous function that does not have a name or a variable to hold a reference to
 *   a function: it is invoked immediately on the last line of the code block:
 *     (function () {  // Anonymous function + automatically invoked
 *       console.log("Anonymous function 2");
 *     })();
 */
function fctNamedFunction1() {  // Named function
  console.log("Named function 1");
}

let f1 = function fctNamedFunction2() {  // Named function
  console.log("Named function 2");
};

let f2 = function () {  // Anonymous function
  console.log("Anonymous function 1");
};

(function () {  // Anonymous function + automatically invoked
  console.log("Anonymous function 2");
})();

fctNamedFunction1();
// fctNamedFunction2();  // Cannot call by name
f1();
f2();

/**
 * In all previous examples, the keyword 'function' was used. However, a function could be used without
 *   the keyword, for example, using the 'fat arrow' (=>) or when used in a class. Both will be covered
 *   in this chapter.
 */


/*******************************************************************************************************/


export {};