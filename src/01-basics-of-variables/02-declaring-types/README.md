# Declaring types

### Source code

#### `index.ts`

```typescript
let var_1: number = 2;

let var_2: number = var_1 + 1;

const getArrayLength = (arr: any[]): number => {
    return arr.length;
};

console.log("var_2 ===", var_2);

console.log("Array length ===", getArrayLength([1, 2, 3,]));

export {};
```

---

### Explanation

```typescript
let var_1: number = 2;
```

This line declares a variable named `var_1` with the type `number` and assigns it a value of `2`.

```typescript
let var_2: number = var_1 + 1;
```

This line declares a variable named `var_2` with the type `number`.
It is then assigned the value of `var_1` added to `1`, which is `3` (since `var_1` is `2`).

```typescript
const getArrayLength = (arr: any[]): number => {
return arr.length;
};
```

This is a constant function declaration of `getArrayLength`. The function:

- Accepts one parameter arr which is of type any[] (an array of any type).
- Returns a number, which is the length of the array arr.
- Inside the function body, it returns the length of the array using the .length property.

```typescript
console.log("var_2 ===", var_2);
```

This logs the string `"var_2 ==="` followed by the value of `var_2` (which is `3`) to the console.

```typescript
console.log("Array length ===", getArrayLength([1, 2, 3,]));
```

This logs the string `"Array length ==="` followed by the length of the array `[1, 2, 3]`.
It uses the previously defined `getArrayLength` function to get the length.
The array has a length of `3`, so `3` will be displayed after the string.

```typescript
export {};
```

This is an empty `export` statement.
In TypeScript/ES6 modules, every file is considered a module.
By default, everything in a module is `private` unless it's exported.
This line exports an empty object, essentially making sure nothing from this module is exported.
It can be a way to ensure that no names from this module unintentionally leak to other modules when imported.

Overall, the code defines two variables, a function to get the length of an array, and then logs some values to the console.
