# String tagged templates

The below code example demonstrates the usage of tagged template literals.

The first parameter is all string literals in the array.

The second parameter is a list of all the placeholders.

```typescript
function analyzeString(literals: TemplateStringsArray, ...placeholders: any[]) {
  let result = "";
  for (let i = 0; i < placeholders.length; i++) {
    result += literals[i];
    result += "*" + placeholders[i] + "*";
  }
  result += literals[literals.length - 1];
  return result;
}

const num1 = 84;
const num2 = 100;
// The tagged template can also return something other than a string.
const result = analyzeString`The number is ${num1} which is not like the second number ${num2}`;

console.log(result);

export {};
```

### Function `analyzeString`

Defines a function called `analyzeString` that takes advantage of tagged template literals.
Tagged template literals allow you to manipulate string literals and placeholders within a template string.

- The function `analyzeString` takes two parameters:
    1. `literals`: This parameter is of type `TemplateStringsArray`, which is an array of string literals from the template string.
    2. `placeholders`: This is a rest parameter (`...placeholders`), which is an array of values that correspond to the placeholders within the template string.

Inside the function:

- `result` is initialized as an empty string to accumulate the final result.
- A `for` loop iterates through the placeholders.
    - `literals[i]` extracts the current string literal.
    - `placeholders[i]` extracts the current placeholder value.
    - The extracted literal and placeholder are concatenated with asterisks (`*`) between them and added to the `result` string.
- After the loop, the last string literal is added to the `result` string.
- Finally, the `result` string is returned.

### Constant Declarations

- Two constants, `num1` and `num2`, are declared and assigned values (84 and 100, respectively).

### Using the `analyzeString` Function

- The `analyzeString` function is invoked as a tagged template literal using the backtick (\`) syntax. This means that the template string is passed to the function.
- The template string contains two placeholders `${num1}` and `${num2}`.
- The function processes the template string and placeholders, and the result is assigned to the `result` constant.

### Logging the Result

- The `result` constant is logged to the console using `console.log`.

### Export Statement

- An empty export statement `export {};` is added at the end of the code.
  This is often included in TypeScript files when there are no exports from the file, ensuring that it is treated as a module.

In summary, this code demonstrates the usage of tagged template literals in TypeScript to process a template string and its placeholders and then logs the resulting string to the console.
The `analyzeString` function can be customized to manipulate template strings and placeholders as needed.