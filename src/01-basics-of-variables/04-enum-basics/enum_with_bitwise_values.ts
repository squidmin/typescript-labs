/**
 * enum with bitwise values
 */

console.log("Example 1: enum with bitwise values");

/**
 * 'enum' is a good candidate for bitwise operations since the value can be explicitly set
 *   (value set during the definition of the 'enum') and you can use the bit shift operator.
 *   Once defined, you can use it as any variable to determine if it contains the one you need
 *   or use the ampersand (&) to check if the one you want is present. The pipe symbol (|) lets
 *   you add many 'enum' choices to a variable.
 * The following code not only initializes the value with the | but also checks the value. With
 *   bitwise, we cannot directly use an equal sign. The reason is that bitwise operation returns
 *   a number, not a boolean. Hence, we need to compare the number to the desired comparison value.
 *   The line below that reads
 *     if (Power.Telepathy === (power & Power.Telepathy)) {
 *   demonstrates how to check the value of an 'enum'.
 */
enum Power1 {
  None = 0, // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0, // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1, // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2, // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power1: Power1 = Power1.Invincibility | Power1.Telepathy;
console.log("Power values: " + power1);
if (Power1.Telepathy === (power1 & Power1.Telepathy)) {
  console.log("power & Power.Telepathy === " + (power1 & Power1.Telepathy));
  console.log("Power of telepathy available");
}

/**
 * The power of the previous example is 3 because the 'Invincibility' value is '1 << 0', which is
 *   binary '01'.
 * The 'Telepathy' value is '1 << 1' which gives the binary '10' and the 'or' operation provided by
 *   the pipe symbol gives binary '11' which is 3.
 * It is possible to remove a value from a bitwise 'enum' on the fly by using
 *   '&= ~'
 *   which performs an 'and' operation on the inverse of the value.
 * For example, the following code supplements the previous example by removing the 'Telepathy' power.
 *   The line below that reads
 *     power &= ~Power.Telepathy;
 *   has the remove operation.
 */
enum Power2 {
  None = 0, // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0, // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1, // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2, // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power2: Power2 = Power2.Invincibility | Power2.Telepathy;
console.log("Power values: " + power2);
if (Power2.Telepathy === (power2 & Power2.Telepathy)) {
  console.log("Power of telepathy available");
}
power2 &= ~Power1.Telepathy;
console.log("Power values: " + power2);
if (Power2.Telepathy === (power2 & Power2.Telepathy)) {
  console.log("Power of telepathy available");
}

/**
 * The value is 1 because from the '3' (which is in binary '11'), you use 'and' of the inverse of '10'
 *   which is '01'.
 * '11 and 01 = 01' which is 1.
 *
 * Adding a value on the fly uses the pipe as when we initialized the value. The line below that reads
 *   power |= 7;
 * shows that not only can you use 'Power.Everything' to set all the values of the 'enum', but we can
 * also directly use a number that represents the binary of the values. In that case, 7 (with a binary
 * value of '0b111') sets the first three powers to true.
 */
enum Power3 {
  None = 0,
  Invincibility = 1 << 0,
  Telepathy = 1 << 1,
  Invisibility = 1 << 2,
  Everything = Invincibility | Telepathy | Invisibility,
}
let power3: Power3 = Power3.Invincibility | Power1.Telepathy;
console.log("Power values: " + power3);
if (Power3.Telepathy === (power3 & Power3.Telepathy)) {
  console.log("Power of telepathy available");
}
power3 &= ~Power3.Telepathy;
console.log("Power values: " + power3);
if (Power3.Telepathy === (power3 & Power3.Telepathy)) {
  console.log("Power of telepathy available");
}
power3 |= 7; // 7 is 0b111 in binary.
console.log("Power values: " + power3);
if (power3 === Power3.Everything) {
  console.log("Everything");
}

export {};