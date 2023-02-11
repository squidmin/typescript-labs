// Simple types example

console.log("Simple types example:");
var greet: string = "Greetings!";
var welcome_message: string = "Welcome to this example!";
console.log(greet + "\n" + welcome_message);

console.log("\n");


// Declaring with 'var'

console.log("Declaring with \'var\' example:");
var x;
function varFunction() {
  var x: string = "111";
}
console.log(x);

console.log("\n");


// Declaring with 'let'

console.log("Declaring with \'let\' example:");
function letFunction() {
  let x: string = "111";
  if (true) {
    let x: number = 999;
  }
  console.log(x);
}
letFunction();

console.log("\n");


// Declaring with 'const'

// const y: string = '111';
// y = 'this won\'t compile';  // Can't re-assign to a constant

const user1 = { id: 1, name: "MyName1", };
const user2 = { id: 2, name: "MyName2", };

// user1 = user2;  // Can't re-assign to a constant

user1.name = user2.name;  // Compiles
user1.id = 1000;  // Compiles

function constFunction(): void {
  const myList = [ 1, 2, 3, ];
  // Though the value of the list changes, the reference to the list doesn't.
  // The same holds true for an object.
  myList.push(4);
  console.log(myList);
}
constFunction();

// The below code will throw an error:
// function constBlockedFunction() {
//   const myList = [ 1, 2, 3, ];
//   myList = [ 1, 2, 3, 4, ];
//   console.log(myList);
// }
// constFunction();

console.log("Example: Change const object property value");
function changeConstObjectProperty(): void {
  let obj1 = { p1: "p1value", };
  obj1 = { p1: "p1value changed", };
  const obj2 = { p2: "p2value", };
  // obj2 = { p2: "Does not compile", };  // Doesn't compile
  obj2.p2 = "Compiles";
  console.log(JSON.stringify(obj2));
}
changeConstObjectProperty();

export = {};