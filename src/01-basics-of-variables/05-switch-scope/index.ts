/*
 * The switch statement requires curly brackets after the colon and after the
 *   break statement. Otherwise, variables defined within the parent scope are
 *   shared. This is not a constraint with TypeScript, but it is with ECMAScript.
 */

// Doesn't compile
// function switchFunction(a: number): void {
//   switch (a) {
//     case 1:
//       let variableInCase1 = 'test';
//       console.log(variableInCase1);
//       break;
//     case 2:
//       let variableInCase1 = 'test2';
//       console.log(variableInCase1);
//       break;
//     default:
//       console.log('Default');
//   }
// }

// Compiles
function switchFunction(a: number): void {
  switch (a) {
    case 1: {
      let variableInCase1 = "test";
      console.log(variableInCase1);
      break;
    }
    case 2: {
      let variableInCase1 = "test2";
      console.log(variableInCase1);
      break;
    }
    default:
      console.log("Default");
  }
}
switchFunction(1);
switchFunction(2);

export {};