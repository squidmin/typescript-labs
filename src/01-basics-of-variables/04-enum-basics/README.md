# `enum` with and without values

#### Topics:
- The role of `enum` in TypeScript
  - `enum` with values
  - `enum` without values
- `enum` with bitwise values

## `enum` purpose

An `enum` is a structure that constrains a variable to several allowed values by defining specific possible entries.

## `enum` with values

`enum` can be of `string` type. In that case, every member requires a value without exception.

```typescript
enum MyStringEnum {
  ChoiceA = "A",
  ChoiceB = "B",
}
```

An `enum` consisting of mixed types is acceptable if every member is defined.
For example, you can have one item be an integer and another be a string type.
It is recommended not to mix types since it might be more confusing than pragmatic.

```typescript
enum StringAndNumberEnum {
  ChoiceA,
  ChoiceB = "B",
  ChoiceC = 100,
}
```

## `enum` without values

`enum` is a type that enforces a limited and defined group of constants.
`enum` must have a name and accepted values.
Afterward, you can use the `enum` as a type.
The consumer must use the `enum` with its name followed by a dot and a potential value from the defined list.

```typescript
enum MyEnum1 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}
let x: MyEnum1 = MyEnum1.ChoiceA;
console.log(x);
```

The values are all constants starting from 0 for the first item and increasing by one until the end.
This type of `enum` has implicit value.
Developers can specify a specific value by equating to an integer.
In that case, the `enum` is explicit.

```typescript
enum MyEnum2 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
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
```

`enum` members' values can be set directly or by using computation.
There are two types of computation:

1. a constant one
2. a purely computed one

A computed constant is a value provided by another `enum` or a value computed by addition, subtraction, bitwise, modulo, multiplication, division, "or," "and," "xor" operator (`^`), or complement operator (`~`).
Purely computed values come from a function.
`enum` generates a function in JavaScript with a set that allows us to specify the number or name used to access the value.
Here is the output of the two previously studied `enum`:

### Example 1

```typescript
enum MyEnum4 {
  ChoiceA,
  ChoiceB,
  ChoiceC,
}
```

Transpiles to:

```javascript
var MyEnum4;
(function (MyEnum4) {
  MyEnum4[MyEnum4["ChoiceA"] = 0] = "ChoiceA";
  MyEnum4[MyEnum4["ChoiceB"] = 1] = "ChoiceB";
  MyEnum4[MyEnum4["ChoiceC"] = 2] = "ChoiceC";
})(MyEnum4 || (MyEnum4 = {}));
```

### Example 2

```typescript
enum MyEnum5 {
  ChoiceA, // 0
  ChoiceB = 100, // 100
  ChoiceC, // 101
  ChoiceD = MyEnum4.ChoiceC, // 2
}
```

Transpiles to:

```javascript
var MyEnum5;
(function (MyEnum5) {
  MyEnum5[MyEnum5["ChoiceA"] = 0] = "ChoiceA";
  MyEnum5[MyEnum5["ChoiceB"] = 1] = "ChoiceB";
  MyEnum5[MyEnum5["ChoiceC"] = 2] = "ChoiceC";
  MyEnum5[MyEnum5["ChoiceD"] = 3] = "ChoiceD";
})(MyEnum5 || (MyEnum5 = {}));
```

## `enum` with bitwise values

`enum` is a good candidate for bitwise operations since the value can be explicitly set (value set during the definition of the `enum`) and you can use the bit shift operator.

Once defined, you can use it as any variable to determine if it contains the one you need or use the ampersand (`&`) to check if the one you want is present.

The pipe symbol (`|`) lets you add many `enum` choices to a variable.

THe following code not only initializes the value with the `|`, but also checks the value.
With bitwise, we cannot directly use an assignment operator.
The reason is that bitwise operation returns a `number`, not a `boolean`.
Hence, we need to compare the number to the desired comparison value.

THe line below that reads

```typescipt
if (Power.Telepathy === (power & Power.Telepathy)) {
```

demonstrates how to check the value of an `enum`.

```typescript
enum Power {
  None = 0,  // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0,  // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1,  // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2,  // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values:", power);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("power & Power.Telepathy ===", (power & Power.Telepathy));
  console.log("Power of telepathy available");
}
```

The `power` of the previous example is `3` because the `Invincibility` value is `1 << 0`, which is binary `01`.

The `Telepathy` value is `1 << 1` which given the binary `10` and the `or` operation provided by the pipe symbol gives binary `11` which is `3`.

It is possible to remove a value from a bitwise `enum` on the fly by using `&= ~` which performs an `and` operation on the inverse of the value.

For example, the following code supplements the previous example by removing the `Telepathy` power.

The line below that reads:

```typescript
power &= ~Power.Telepathy;
```

has the remove operation.

```typescript
enum Power {
  None = 0,  // Value 0 in decimal (00 in binary)
  Invincibility = 1 << 0,  // Value 1 in decimal (01 in binary)
  Telepathy = 1 << 1,  // Value 2 in decimal (10 in binary)
  Invisibility = 1 << 2,  // Value 4 in decimal (100 in binary)
  Everything = Invincibility | Telepathy | Invisibility,
}
let power: Power = Power.Invincibility | Power.Telepathy;
console.log("Power values:", power);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}
power &= ~Power.Telepathy;
console.log("Power values:", power);
if (Power.Telepathy === (power & Power.Telepathy)) {
  console.log("Power of telepathy available");
}
power |= 7;
console.log("Power values:", power);
if (power === Power.Everything) {
  console.log("Everything");
}
```
