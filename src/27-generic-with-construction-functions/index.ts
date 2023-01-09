/**
 * Generic with Construction Functions
 * This lesson explains how to apply the generic type to a construction function.
 * The following topics are covered:
 *   - Restricting the signature of a constructor
 */



/**
 * Restricting the signature of a constructor
 */

/**
 * In some scenarios, a developer may need to instantiate a generic object from a function, e.g.:
 *   const obj = funct(TypeIWantToInstantiate, parameter1, parameterx);
 * The goal is to have a 'type constraint' on the construction of an object type.
 * It is possible to use the 'constructed signature' in a 'construction function' to dynamically
 * create a new instance of a specific type that requires an exact constructor signature.
 *   - A 'construction function' is a function that returns a new object.
 *   - A constructor signature is the type and number of the parameters.
 * For example, a function taking 'T' as a generic argument can require an argument of type
 *   { new(): T; }
 * and returns 'T'.
 * An interface with a member of 'new' indicates that the class must have a constructor with the
 * defined parameter. In the following code, the line that reads
 *   new(param: string): T;  // Force a new object to have a constructor with the signature of 1 parameter of type 'string'.
 * constrains any type passed to have a constructor with a single parameter of type 'string'.
 */
interface IMyInterfaceWithConstructor<T> {
  new(param: string): T;  // Force a new object to have a constructor with the signature of 1 parameter of type 'string'.
}
function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>, param1: string): T {  // Create a new type T.
  return new ctor(param1);
}
class C1 {
  constructor(name: string) {  // We can create from createInstance function because 1 parameter of type 'string' is declared in the constructor's parameter list.
    console.log("Initializing class C1 with string: " + name);
  }
}
class C2 {
  constructor(name: string) {  // We can create from createInstance function because 1 parameter of type 'string' is declared in the constructor's parameter list.
    console.log("Initializing class C2 with string: " + name);
  }
}

const inst1 = createInstance(C1, "Instance 1");
const inst2 = createInstance(C2, "Instance 2");

/**
 * The line that reads
 *   function createInstance<T>(ctor: IMyInterfaceWithConstructor<T>, param1: string): T {  // Create a new type T.
 * declares a function to an instance of the class that defines the 'param1' object.
 * The constructor function has the specification of having two parameters. The first one is the constraint.
 * It specifies a class with a constructor defined by the interface
 *   IMyInterfaceWithConstructor
 * which was previously defined to have a single-parameter constructor.
 * 
 * Classes 'C1' and 'C2' both respect that constraint and have a constructor that takes a single parameter
 * of type 'string'. The lines that read
 *   const inst1 = createInstance(C1, "Instance 1");
 *   const inst2 = createInstance(C2, "Instance 2");
 * call the function that instantiates 'C1' and 'C2' respectively as it is the type passed in the first
 * parameter. The second parameter could be anything, including nothing. In this example, it is just
 * passing the parameter into the creating function that passes it down to the actual class' constructor.
 */


export {};