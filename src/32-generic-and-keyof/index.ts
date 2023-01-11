/**
 * Generic and 'keyof'
 * This lesson explains how to combine 'keyof' with generics.
 */


/*********************************************************************************************/


/**
 * You can use the 'extends' keyword to extend a generic type to another type if you want the generic
 *   type to be a subset of the other type.
 * 
 * In the following code, the line that reads
 *     function printProps<T, K extends T>(p1: T, p2: K): void { // K must have all fields from 'T', at minimum.
 *   expects that the generic 'K' extends 'T', which means that the second parameter needs to extend
 *   the former.
 */
interface TypeA {
  prop1: string;
  prop2: number;
}
interface TypeB {
  prop1: string;
  prop3: boolean;
}
interface TypeC extends TypeA {
  prop4: number;
}

function printProps<T, K extends T>(p1: T, p2: K): void {
  console.log(p1);
  console.log(p2);
}

let a: TypeA = { prop1: "p1", prop2: 2, };
let b: TypeB = { prop1: "p1", prop3: true, };
let c: TypeC = { prop1: "p1", prop2: 2, prop4: 4, };

// printProps(a, b); // Does not transpile because 'B' does not extend 'A'.
printProps(a, c);

/**
 * The commented code on the above line that reads
 *     printProps(a, b); // Does not transpile because 'B' does not extend 'A'.
 *   does not transpile because 'TypeB' is not extending 'TypeA'. However the line that reads
 *     printProps(p2);
 *   is successful because 'TypeC' extends 'TypeA', which means that 'TypeC' has all of its
 *   properties merged with 'TypeA' properties.
 * 
 * What if we would like to mention that we want to allow the property names of a generic type?
 *   For example, let's specify an array of property names to output in the console.
 */
interface TypeA1 {
  prop1: string;
  prop2: number;
}
function printProps2<T, K extends keyof T>(p1: T, p2: K[]): void {
  console.log("Printing:");
  p2.forEach(propName => {
    console.log(`Name: ${String(propName)} and value: ${p1[propName]}`);
  });
}

let a2: TypeA1 = { prop1: "p1", prop2: 2, };

printProps2(a, ["prop1"]);
printProps2(a, ["prop1", "prop2"]);

/**
 * The above line that reads
 *     function printProps<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name of T
 *   takes any kind of object, regardless of its type under the generic 'T'. The second parameter is an array
 *   of 'K' type. 'K' is the constraint of 'keyof T'. The 'keyof' keyword returns all the property names of 'T'
 *   as a list of strings.
 * 
 * By extending 'keyof', TypeScript limits the possible strings to be of the property of the specified type
 *   ('T' in this case).
 * 
 * In the above example, the only strings that can be passed in the array are "prop1" and "prop2".
 * 
 * If we remove one or all of the properties of 'TypeA', suddenly, TypeScript will suddenly transpile
 *   successfully and say that the code is reaching properties that do not exist.
 * 
 * Thus, even if the code specifies strings, it's still strongly typed and protected from mistakes.
 */


export {};
