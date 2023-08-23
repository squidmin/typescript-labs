# Functions and Inference variables

TypeScript can infer the data type of a variable.

Hence, it's possible to avoid the use of the colon for anonymous functions by simply setting the variable to an unnamed function that has type parameters and a return type.

In the example below, all the `myAnonymous...` functions have no type defined, but they are all strongly typed by inference.

<details>
<summary>Example</summary>

```typescript
const inc = 1;
function myNamedFunction(p: number): number {
    return p + inc;
}
const myAnonymousFunction = function(p: number): number {
    return p + inc;
}
const myAnonymousFunction2 = (p: number): number => {
    return p + inc;
}
const myAnonymousFunction3 = (p: number): number => p + inc;
const myAnonymousFunction4 = (p: number) => p + inc;
```

</details>



