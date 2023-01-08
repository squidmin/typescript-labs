/**
 * How to use an enum with explicit and implicit values
 */


/**
 * The following topics are covered in the module:
 *   - THe role of enum
 *     - enum with values
 *     - enum without values
 *   - enum with bitwise values
 */


/**
 * The role of enum
 */

/**
 * An enum is a structure that proposes several allowed values for a variable. It is a way to
 *   constrain variable values by defining specific possible entries.
 */


/**
 * enum with values
 */

/**
 * enum can be of string type. In that case, every member requires a value without exception.
 */

enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
}

/**
 * A mixed enum value type is acceptable if every member is defined. For example, you can have one item
 *   be an integer and another be a string type.
 */

enum MyStringAndNumberEnum1 {
  ChoiceA, // 0
  ChoiceB = "B",
  ChoiceC = 100,
};


/**
 * enum without values
 */

/**
 * enum is a type that enforces a limited and defined group of constants. enum must have a name
 *   and accepted values. Afterward, you can use the enum as a type. The consumer must use the enum
 *   with its name followed by a dot and a potential value from the defined list.
 */

console.log("Example 1:");
enum MyEnum1 {
  ChoiceA, ChoiceB, ChoiceC,
}
let x: MyEnum1 = MyEnum1.ChoiceA;
console.log(`x === ${x}`);

/**
 * The values are all constants starting from 0 for the first item and increasing by one until
 *   the end. This type of enum has implicit value. Developers can specify a specific value by
 *   equating to an integer. In that case, the enum is explicit.
 */

enum MyEnum2 {
  ChoiceA, ChoiceB, ChoiceC,
}
enum MyEnum3 {
  ChoiceA,  // 0
  ChoiceB = 100,  // 100
  ChoiceC,  // 101
  ChoiceD = MyEnum1.ChoiceC,  // 2
}
console.log(MyEnum3.ChoiceA);
console.log(MyEnum3.ChoiceB);
console.log(MyEnum3.ChoiceC);
console.log(MyEnum3.ChoiceD);

/**
 * enum members' values can be set directly or by using computation.
 * There are two types of computation:
 *   1. a constant one
 *   2. a purely computed one
 * A computed constant is a value provided by another enum or a value computed by addition,
 *   subtraction, bitwise, modulo, multiplication, division, "or", "and", "xor" operator, or
 *   complement operator (~). Purely computed values come from a function.
 * enum generates a function in JavaScript with a set that allows us to specify the number or
 *   name used to access the value.
 * Here is the output of the two previously studied enums:
 */

/*
enum MyEnum4 {
  ChoiceA, ChoiceB, ChoiceC,
}
*/

// Became in JavaScript:

// var MyEnum4;
// (function (MyEnum4) {
//   MyEnum4[MyEnum4["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum4[MyEnum4["ChoiceB"] = 1] = "ChoiceB";
//   MyEnum4[MyEnum4["ChoiceC"] = 2] = "ChoiceC";
// })(MyEnum4 || (MyEnum4 = {}));

/*
enum MyEnum5 {
  ChoiceA,  // 0
  ChoiceB = 100,  // 100
  ChoiceC,  // 101
  ChoiceD = MyEnum4.ChoiceC,  // 2
}
*/

// Because in JavaScript

// var MyEnum5;
// (function (MyEnum5) {
//   MyEnum5[MyEnum5["ChoiceA"] = 0] = "ChoiceA";
//   MyEnum5[MyEnum5["ChoiceB"] = 100] = "ChoiceB";
//   MyEnum5[MyEnum5["ChoiceC"] = 101] = "ChoiceC";
//   MyEnum5[MyEnum5["ChoiceD"] = 2] = "ChoiceD";
// })(MyEnum5 || (MyEnum5 = {}));


/**
 * enum with bitwise values
 */

/**
 * enum is a good candidate for bitwise operations since the value can be explicitly set
 *   (value set during the definition of enum) and you can use the bit shift operator.
 * Once defined, you can use it as any variable to determine if it contains the one you need
 *   or use the ampersand (&) to check if the one you want is present. The pipe symbol (|)
 *   lets you add many enum choices to a variable.
 */

/**
 * The following code not only initializes the value with the | symbol but also checks the value.
 *   With bitwise, we cannot directly use an equal sign. The reason is that bitwise operation
 *   returns a number, not a boolean. Hence, we need to compare the number to the desired
 *   comparison value.
 * The line below that reads
 *   "if (Power.Telepathy === (power & Power.Telepathy))"
 *   demonstrates how to check the value of an enum.
 */

enum Power {
  None = 0,  // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0,  // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1,  // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2,  // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power1: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values: " + power1);
if (Power.Telepathy === (power1 & Power.Telepathy)) {  // Use '&' bitwise operator to check the value of an enum
  console.log("Power of telepathy available");
}

/**
 * The value of the previous example is 3 because the Invincibility value is '1 << 0' which
 *   is binary 01.
 */

/**
 * The Telepathy value is '1 << 1' which gives the binary 10 nd the or operation provided by
 *   the pipe symbol gives binary 11 which is 3.
 */

/**
 * It is possible to remove a value from a bitwise enum on the fly by using
 *   &= ~
 *   which performs an 'and' operation on the inverse of the value.
 */

/**
 * For example, the following code supplements the previous example by removing the Telepathy
 *   power. The line that reads
 *   power &= ~Power.Telepathy;
 *   has the remove operation.
 */

enum Power2 {
  None = 0,  // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0,  // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1,  // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2,  // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power2: Power2 = Power.Invincibility | Power.Telepathy;
console.log("Power values: " + power2);
if (Power.Telepathy === (power2 & Power.Telepathy)) {
  console.log("Power of telepathy available");
}
power2 &= ~Power.Telepathy;
console.log("Power values: " + power2);
if (Power.Telepathy === (power2 & Power.Telepathy)) {
  console.log("Power of telepathy available");
}

/**
 * The value is 1 because from the 3 (which is in binary '11'), you use 'and' of the inverse of
 *   '10' which is '01'. '11 and 01 = 01' which is 1 in decimal.
 */

/**
 * Adding a value on the fly uses the pipe as when we initialized the value.
 * In the code below, the line that reads
 *   power |= 7;
 *   shows that not only can you use Power.Everything to set all the values of the enum, but
 *   we can also directly use a number that represents the binary of the values.
 *   In that case, 7 (with a binary value of 0b111) sets the first three powers to true.
 */
enum Power3 {
  None = 0,
  Invincibility = 1 << 0,
  Telepathy = 1 << 1,
  Invisibility = 1 << 2,
  Everything = Invincibility | Telepathy | Invisibility,
}
let power3: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values: " + power3);
if (Power.Telepathy === (power3 & Power.Telepathy)) {
  console.log("Power of telepathy available");
}
power3 &= ~Power.Telepathy;
console.log("Power values: " + power3);
if (Power.Telepathy === (power3 & Power.Telepathy)) {
  console.log("Power of telepathy available");
}
power3 |= 7;  // 7 is 0b111 in binary
console.log("Power values: " + power3);
if (power3 === Power.Everything) {
  console.log("Everything");
}


export {};