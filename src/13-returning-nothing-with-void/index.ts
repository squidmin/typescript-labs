/**
 * 'undefined' can be assigned to void. The operation of setting undefined to void is not
 *   useful per se. However, a function that returns nothing should be marked with the reserved
 *   'void' keyword.
 */
function executeFunctionWithoutReturnType(): void {
  return undefined;
}
/**
 * If a function is not explicitly marked with void as the return value, then by default, TypeScript
 *   will mark the return value as void. This may be problematic, because a programmer may
 *   return anything within the function. If it is explicitly set to void, trying to return anything
 *   other than undefined will result in a compilation error.
 */


/*********************************************************************************************/


/**
 * Consider a function that is changed multiple times in version control:
 *   The first developer commits code that does not
 *   explicitly set the return type. As you'll see later, TypeScript infers it to be a number,
 *   not void, because of the return statement (return 1).
 * Later, another developer returns a string instead of a number, and now the same function is 
 *   returning a string, instead of a number or void. It gets tricky if there are many return
 *   statements in a big function. Such a function will return many types, albeit appearing to
 *   return void according to the function signature. In reality, it can return anything. 
 */


/*********************************************************************************************/


/**
 * A good pattern is to leave a function before its last curly braces and use a return statement
 *   with no value. In this case, the return is the equivalent of returning undefined.
 */
console.log(`
A good pattern is to leave a function before its last curly braces and use a return statement
with no value. In this case, the return is the equivalent of returning undefined.`);
function leaveEarly1(leaveFast: boolean) {
  console.log("Hello");
  if (leaveFast) {
    console.log("Quick bye!");
    return;
  }
  console.log("Later good bye!");
}

console.log("-- With true --");
let returnValue1 = leaveEarly1(true);
console.log("-- With false --");
let returnValue2 = leaveEarly1(false);

console.log("-- Types --");
console.log(typeof returnValue1);
console.log(typeof returnValue2);


/*********************************************************************************************/


/**
 * Marking the function as void enables the use of an early return because it is similar to
 *   'return undefined'. However, for TypeScript, the type of the two variables is narrowed to
 *   void. You can see this by hovering over the two return variables in the following code
 *   where the variables are set to void.
 */
console.log(`
Marking the function as void enables the use of an early return because it is similar to
'return undefined'. However, for TypeScript, the type of the two variables is narrowed to
void. You can see this by hovering over the two return variables in the following code
where the variables are set to void.`);
function leaveEarly2(leaveFast: boolean): void {
  console.log("Hello");
  if (leaveFast) {
    console.log("Quick bye!");
    return;
  }
  console.log("Later good bye");
}

console.log("-- With true -- ");
let voidVar1: void = leaveEarly2(true);
console.log(`voidVar1 === ${voidVar1}`);
console.log("-- With false -- ");
let voidVar2: void = leaveEarly2(false);
console.log(`voidVar2 === ${voidVar2}`);


/*********************************************************************************************/


/**
 * It is possible to declare a variable as void but it is not pragmatic.
 */
console.log(`
It is possible to declare a variable as void but it is not pragmatic.`
);
let variableVoid: void;
variableVoid = undefined;
console.log(`variableVoid === ${variableVoid}`);

/**
 * Using void is a way to ensure that a function does not return a value regardless of its evolution.
 */


export {};
