# Declaring arrays

## Multiple Type Arrays

TypeScript supports arrays that can contain multiple types, knwon as union types.
Here's how you can declare them:

```typescript
let multipleTypeArray = [1, true, 3];
```

In the above line, `multipleTypeArray` is implicitly typed by TypeScript based on the types of elements in the array.
The inferred type here is `(number | boolean)[]`, meaning an array of elements where each element is either a number or a boolean.

### Explicit Type Declaration

For clarity and maintainability, it's a good practice to explicitly declare the types of variables:

```typescript
let multipleTypeArrayExplicit: (number | boolean)[] = [1, true, 3];
```

Here's `multipleTypeArrayExplicit` is explicitly typed as an array of `number` or `boolean`.
This approach helps prevent errors, such as inadvertently adding unsupported types (e.g., a `string`) to the array, which would broaden the inferred type to include `string` as well.

### Note on Maintainability

Explicit typing helps in maintaining consistent data types in an array, which is crucial is large and complex codebases where arrays are modified across different modules or components.

---

## Instantiate a Strongly-Typed Array Object

TypeScript allows the declaration of arrays in several ways, each suited to different scenarios:

1. **Using the `Array` constructor**:

   ```typescript
   let myArray1 = new Array<number>();
   ```
   
   `myArray1` is declared using the `Array` constructor specifying `number` as its type.
   This syntax is clear but less commonly used than literal syntax.
2. **Using array literal with explicit type**:
   
   ```typescript
   let myArray2: Array<number> = [];
   ```
   
   `myArray2` is declared as an array of numbers using the `Array` generic type.
   It's initialized as an empty array.
3. **Using the shorthand array type syntax**:
   
   ```typescript
   let myArray3: number[] = [];
   ```
   
   This is shorthand syntax for typing arrays, which is more common and preferred for its simplicity and readability.

### Function to Print and Modify Arrays

```typescript
function printArray(a: number[]): void {
  console.log(`Before: ${a}`);
  a.push(1);
  console.log(`After: ${a}`);
}
```

`printArray` is a function that accepts an array of numbers, logs it, modifies it by adding `1` to it, and logs it again.
This function demonstrates how arrays passed to functions can be modified within those functions, affecting the original array due to reference behavior in JavaScript / TypeScript.

---

## Read-only Arrays

Read-only arrays are declared using `ReadonlyArray<T>` or `readonly T[]`.
They cannot be modified after creation (i.e., no adding, removing, or replacing elements):

```typescript
let list: ReadonlyArray<number> = [1, 2];
//list.push(3); // Error: .push() is not allowed on readonly arrays
```

Attempting to use methods like `push` that modify the array will result in a compilation error, enforcing immutability.

---

## Mutating a Const Array

Even if an array is declared as `const`, the contents of the array can still be modified:

```typescript
const _list: number[] = [1, 2];
_list.push(3); // This works because it doesn't try to change the actual reference to the array.
```

The `const` keyword prevents re-assignment of the variable `_list` but does not prevent modifications to the array it holds.

---

## Re-instantiating a Read-Only Array

Re-instantiating a read-only array is possible by assigning a new array to the variable:

```typescript
let list: readonly number[] = [1, 2];
list = [4, 5];
console.log(list);
```

This segment demonstrates that while you cannot modify the elements of a read-only array firectly, you can assign a completely new array to a `let` variable initially declared with a read-only type.
