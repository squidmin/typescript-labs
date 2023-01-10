/**
 * Generic constraint
 * This module explains how to transform a generic type with a constraint to control
 *   what can be passed.
 */


/**
 * The following topics are covered:
 *   - Function with constraints
 *   - Accessing properties of the generic type
 */


/**
 * With generic, you can specify that the type passed into your generic class must extend a
 *   specific interface. Generic allows having code that can rely on a minimal interface without
 *   forcing a specific class.
 */

/**
 * For example, with a list, you do not need to force the list to hold a specific object.
 *   Instead, you can create a generic list where the generic type passed must extend a definition.
 */


/*********************************************************************************************/


/**
 * Function with constraints
 */

/**
 * In the following example, we are stating that any object having at least one member named
 *   'id' of type 'number' is allowed. By extending the generic type, you can perform logic on
 *   specific members; for example, access 'id' regardless of the fields not exposed to the
 *   generic code.
 */

interface MyType1 {  // Type that has a single field
  id: number;
}
interface AnotherType1 extends MyType1 {}  // Another type that has all the fields from MyType
function genericFunction1<T extends MyType1>(p1: T) {}  // A function that takes a generic type that must at least have the fields of MyType

const arg1: AnotherType1 = { id: 1, };  // Create an object that is not 'MyType'
genericFunction1(arg1);  // This is legitimate because AnotherType extends MyType, thus has all the required fields
genericFunction1({ id: 123, });  // This is legit as well since id is the only required field from MyType
// genericFunction("Doesn't compile");  // Doesn't compile since a member named 'id' of type 'number' is required.

/**
 * The line that reads
 *   genericFunction({ id: 123, });
 * is commented so that the code compiles successfully. The argument passed does not have a member
 * 'id': it is a string. Hence, TypeScript knows it is not a legit type and throws an error at
 * transpilation time. On the contrary, on the line that reads
 *   genericFunction(arg);  // This is legitimate because AnotherType extends MyType, thus has all the required fields
 * the object has an 'id'. This is also the case on the line that reads
 *   genericFunction({ id: 123, });  // This is legit as well since id is the only required field from MyType
 */


/*********************************************************************************************/


/**
 * Accessing properties of the generic type
 */

/**
 * The benefit is avoiding potential casting errors and accessing members that do not exist.
 * It also allows access to the specified members inside the generic function.
 */

interface MyType2 {
  id1: number;  // 'id' is available
  id2: number;
}
interface AnotherType2 {
  id1: number;  // 'id' is available
}
function genericFunction2<T extends AnotherType2>(p1: T) {
  console.log("Inside generic: " + p1.id1);
}
genericFunction2({ id1: 123, id2: 99999, });

/**
 * The example passes an object with two members 'id1' and 'id2' to a generic function that requires
 * an 'id' of type 'number'. The object passed on the line that reads
 *   genericFunction2({ id1: 123, id2: 99999, });
 * does have 'id1' and 'id2' members. However, inside the generic function, only 'id1' is available.
 * The reason is that the function expects to have the minimum and common understanding that 'T' is
 * respecting the type after the 'extends' keyword, and anything else is not guaranteed; hence, it
 * cannot be accessible.
 * 
 * Many use cases borrow the pattern of allowing a generic type and are concerned only by a subset of
 * properties. For example, you may have a logging library that must have an object with 'errorCode'
 * and 'errorDescription', and still allow any type as long as they have these two fields.
 */


export {};
