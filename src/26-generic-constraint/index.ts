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


/**
 * Function with constraints
 */

/**
 * In the following example, we are stating that any object that has at least a member named
 *   'id' of type 'number' is allowed. By extending the generic type, you can perform logic on
 *   specific members; for example, access 'id' regardless of the fields not exposed to the
 *   generic code.
 */

interface MyType {  // Type that has a single field
  id: number;
}
interface AnotherType extends MyType {}  // Another type that has all the fields from MyType
function genericFunction<T extends MyType>(p1: T) {}  // A function that takes a generic type that must at least have the fields of MyType

const arg: AnotherType = { id: 1, };  // Create an object that is not 'MyType'
genericFunction(arg);  // This is legitimate because AnotherType extends MyType, thus has all the required fields
genericFunction({ id: 123, });  // This is legit as well since id is the only required field from MyType
// genericFunction("Doesn't compile");  // Doesn't compile; not legitimate.


export {};