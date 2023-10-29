# Declaring strings

## Formatting strings

### Source code

```typescript
let booksAmount: number = 10;
let storeName: string = "Amazon";
let title: string = `Favorite ${booksAmount} books on ${storeName}`;
console.log(title);

function getPrice(): number {
  return 100;
}
let description: string = `The book is about ${2 + 5} chapters long and costs ${getPrice()}$.`;
console.log(description);

export {};
```

### Explanation

```typescript
let booksAmount: number = 10;
```

This line declares a variable named `booksAmount` with the type `number` and assigns it a value of `10`.

```typescript
let storeName: string = "Amazon";
```

This line declares a variable named `storeName` with the type `string` and assigns it the value `"Amazon"`.

```typescript
let title: string = `Favorite ${booksAmount} books on ${storeName}`;
```

This line declares a variable named `title` with the type `string`.
It assigns to it a template string that embeds the values of `booksAmount` and `storeName` within it.
So, the value of `title` will be `"Favorite 10 books on Amazon"`.

```typescript
console.log(title);
```

This logs the value of the `title` variable to the console, which means it will display `"Favorite 10 books on Amazon"`.

```typescript
function getPrice(): number {
return 100;
}
```

This defines a function named `getPrice` that returns a value of type `number`.
The function, when invoked, will return the value `100`.

```typescript
let description: string = `The book is about ${2 + 5} chapters long and costs ${getPrice()}$.`;
```

This line declares a variable named description with the type `string`.
It assigns to it a template string that embeds the result of the expression `2 + 5` (which is `7`) and the result of calling the function `getPrice` (which is `100`).
Hence, the value of description will be `"The book is about 7 chapters long and costs 100$."`.

```typescript
console.log(description);
```

This logs the value of the description variable to the console, which means it will display:

```
"The book is about 7 chapters long and costs 100$."
```

```typescript
export {};
```

The last line is an empty `export` statement, making sure nothing from this module is exported to other modules when imported.

---

### Summary

The code sets some variables related to books, forms a couple of descriptive strings using template literals, and then logs those strings to the console.
