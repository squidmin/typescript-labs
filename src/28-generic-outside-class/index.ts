/**
 * Generic Outside Class
 * This lesson shows how to use generic outside the concept of classes.
 * The following topics are covered:
 *   - Generic with function
 *   - The 'unknown' type as an alternative
 *   - Problems resolved by usage of generic
 */


/*********************************************************************************************/


/**
 * Generic with function
 */

/**
 * Generic is a concept that is not limited to classes. It can also be used directly on global
 * functions or interfaces. You can have a function that takes generic parameters and also
 * returns a generic type.
 */
function countElementInArray1<T>(elements: T[]): number { return elements.length; }
function returnFirstElementInArray1<T>(elements: T[]): T | undefined {
  if (elements.length > 0) { return elements[0]; }
  return undefined;
}
const arr1 = [1, 2, 3,];
console.log(countElementInArray1(arr1));
console.log(returnFirstElementInArray1(arr1));

/**
 * The two functions above are examples of what can be accomplished with generic without
 * residing inside a class. Both take an array of type 'T'. The first one uses that type
 * to return a number that is the length of the array. The second returns a particular 'T'
 * element of the array.
 */


/*********************************************************************************************/


/**
 * The 'unknown' type as an alternative
 */

/**
 * It could be argued that the same code can be written by relying on the 'unknown' type.
 * It is partially true for the former function but it isn't true for the latter, even if
 * that particular example would transpile and produce the desired output.
 */
function countElementInArray2(elements: unknown[]): number { return elements.length; }
function returnFirstElementInArray2(elements: unknown[]): unknown | undefined {
  if (elements.length > 0) { return elements[0]; }
  return undefined;
}
const arr2 = [1, 2, 3,];
console.log(countElementInArray2(arr2));
console.log(returnFirstElementInArray2(arr2));


export {};
