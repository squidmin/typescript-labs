/**
 * enum without values
 */

console.log("Example 1: enum without values");

/**
 * 'enum' is a type that enforces a limited and defined group of constants. 'enum' must have a name
 *   and accepted values. Afterward, you can use the 'enum' as a type. The consumer must use the 'enum'
 *   with its name followed by a dot and a potential value from the defined list.
 */
enum MyEnum1 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}
let x: MyEnum1 = MyEnum1.ChoiceA;
console.log(x);

/**
 * The values are all constants starting from 0 for the first item and increasing by one until the end.
 *   This type of 'enum' has implicit value. Developers can specify a specific value by equating
 *   to an integer. In that case, the 'enum' is explicit.
 */
enum MyEnum2 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}
enum MyEnum3 {
  ChoiceA, // 0
  ChoiceB = 100, // 100
  ChoiceC, // 101
  ChoiceD = MyEnum1.ChoiceC, // 2
}
console.log(MyEnum3.ChoiceA);
console.log(MyEnum3.ChoiceB);
console.log(MyEnum3.ChoiceC);
console.log(MyEnum3.ChoiceD);

/**
 * 'enum' members' values can be set directly or by using computation. There are two types of computation:
 *   1. a constant one
 *   2. a purely computed one
 * A computed constant is a value provided by another 'enum' or a value computed by addition,
 *   subtraction, bitwise, modulo, multiplication, division, "or," "and," "xor," operator, or complement
 *   operator (~). Purely computed values come from a function.
 * 'enum' generates a function in JavaScript with a set that allows us to specify the number or name
 *   used to access the value. Here is the output of the two previously studied 'enum':
 */

/*
enum MyEnum4 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}
*/
// Transpiles to:
// var MyEnum4;
// (function (MyEnum4) {
//   MyEnum4[MyEnum4["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum4[MyEnum4["ChoiceB"] = 1] = "ChoiceB";
//   MyEnum4[MyEnum4["ChoiceC"] = 2] = "ChoiceC";
// })(MyEnum4 || (MyEnum4 = {}));

/*
enum MyEnum5 {
  ChoiceA, // 0
  ChoiceB = 100, // 100
  ChoiceC, // 101
  ChoiceD = MyEnum4.ChoiceC, // 2
}
*/
// Transpiles to:
// var MyEnum5;
// (function (MyEnum5) {
//   MyEnum5[MyEnum5["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum5[MyEnum5["ChoiceB"] = 100] = "ChoiceB";
//   MyEnum5[MyEnum5["ChoiceC"] = 101] = "ChoiceC";
//   MyEnum5[MyEnum5["ChoiceD"] = 2] = "ChoiceD";
// })(MyEnum5 || (MyEnum5 = {}));

export {};
