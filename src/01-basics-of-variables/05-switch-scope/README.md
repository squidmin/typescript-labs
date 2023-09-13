# `switch` scope

#### Topics:
- `switch` syntax

The `switch` statement requires curly brackets after the colon and after the `break` statement.
Otherwise, variables defined within the parent scope are shared.
This is not a constraint with _TypeScript_, but it is with _ECMAScript_.

The below code does not compile due to invalid syntax:

```typescript
// Doesn't compile
function switchFunction(a: number): void {
  switch (a) {
    case 1:  // Missing curly braces `{}`
      let variableInCase1 = 'test';
      console.log(variableInCase1);
      break;
    case 2:
      let variableInCase1 = 'test2';
      console.log(variableInCase1);
      break;
    default:
      console.log('Default');
  }
}
```

This code compiles:

```typescript
function switchFunction(a: number): void {
  switch (a) {
    case 1: {
      let variableInCase1 = "test";
      console.log(variableInCase1);
      break;
    }
    case 2: {
      let variableInCase1 = "test2";
      console.log(variableInCase1);
      break;
    }
    default:
      console.log("Default");
  }
}

switchFunction(1);
switchFunction(2);

export {};
```
