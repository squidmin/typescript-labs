# Declaring numbers

## Simple initialization

### Source code

```typescript
const x: number = 10;
let z: number = 15;
let p: number = 123;
console.log("Here are 3 variables of type number", x, z, p);
```

## Number bases

In addition to decimal (base 10), TypeScript supports:
- base 16 (hexadecimal)
- base 8 (octal)
- base 2 (binary)

with the prefixes
- `0x`
- `0o`
- `0b`

respectively, though they're rarely used.

### Source code

```typescript    
let dec: number = 10;
let hex: number = 0x10;
let octo: number = 0o10;
let bin: number = 0b10;
console.log("Here are 4 numbers:", dec, hex, octo, bin);
```

## Numeric separators

### Source code

```typescript
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000");
const numericSeparator6 = parseInt("5_000");
const numericSeparator7 = 0xFAB_F00D;
const numericSeparator8 = 0b1111_11111000_11110000_00001100;
console.log(numericSeparator1);
console.log(numericSeparator2);
console.log(numericSeparator3);
console.log(numericSeparator4);
console.log(numericSeparator5);
console.log(numericSeparator6);
console.log(numericSeparator7);
console.log(numericSeparator8);
```

### Source code explanation

The above code demonstrates the usage of numeric separators in JavaScript and TypeScript.
Numeric separators allow you to enhance the readability of numeric literals by adding underscores (`_`) to separate groups of digits.
These underscores do not affect the numeric value; they are purely for human readability.

Here's an explanation of each part of the code:

```typescript
const numericSeparator1 = 560000067;
const numericSeparator2 = 560_000_067;
const numericSeparator3 = 5_6_0_000_0_6_7;
```

- `numericSeparator1`, `numericSeparator2`, and `numericSeparator3` are declared as constants, each with a numeric value.
- These lines showcase different ways to use numeric separators with large numbers.
- All three variables store the same numeric value, but they use different formatting for readability.

```typescript
const numericSeparator4 = Number(5_000);
const numericSeparator5 = Number("5_000");
const numericSeparator6 = parseInt("5_000");
```

- `numericSeparator4`, `numericSeparator5`, and `numericSeparator6` demonstrate the use of numeric separators when converting strings to numbers.
    - `numericSeparator4` uses the `Number` constructor to convert a numeric string with separators into a number.
    - `numericSeparator5` also uses the `Number` constructor but passes the numeric string with separators as a string argument.
    - `numericSeparator6` uses `parseInt` to convert the numeric string with separators into an integer.

```typescript
const numericSeparator7 = 0xFAB_F00D;
const numericSeparator8 = 0b1111_11111000_11110000_00001100;
```

- `numericSeparator7` and `numericSeparator8` demonstrate the use of numeric separators in hexadecimal and binary literals, respectively.
  Numeric separators can also be used with these numeric bases to improve readability.

```typescript
console.log(numericSeparator1);
console.log(numericSeparator2);
console.log(numericSeparator3);
console.log(numericSeparator4);
console.log(numericSeparator5);
console.log(numericSeparator6);
console.log(numericSeparator7);
console.log(numericSeparator8);
```

- These lines use `console.log` to print the values of the variables to the console, showcasing how numeric separators do not affect the actual numeric values but improve the readability of the code.

When you run this code, you'll see the values of the variables with and without numeric separators printed to the console.
Numeric separators are a helpful feature for making large numbers more readable in your code, especially in scenarios where you deal with complex numeric literals or need to enhance code maintainability.
