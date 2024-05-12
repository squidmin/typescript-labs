/**
 * Read-only arrays
 */

/**
 * Doesn't compile because list.push() attempts to write to the array,
 *   which is blocked when using read-only arrays.
 */
// let list: ReadonlyArray<number> = [1, 2];
// list.push(3);
// console.log(list);

export {};
