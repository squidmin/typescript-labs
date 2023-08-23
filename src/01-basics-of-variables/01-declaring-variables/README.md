# Declaring variables

<details>
<summary>Simple types example</summary>

```typescript
var greet: string = "ballin' !";
var welcome_message: string = "ballin'";
console.log(greet + "\n" + welcome_message);
```

</details>

<details>
<summary>Declaring with 'var'</summary>

```typescript
var x;
function varFunction() {
  var x: string = "111";
}
console.log(x);
```

</details>

<details>
<summary>Declaring with 'let'</summary>

```typescript
function letFunction() {
  let x: string = "111";
  if (true) {
    let x: number = 999;
  }
  console.log(x);
}
letFunction();
```

</details>

<details>
<summary>Declaring with 'const'</summary>

```typescript
// const y: string = '111';
// y = 'this won\'t compile';  // Can't re-assign to a constant

// const y: string = '111';
// y = 'this won\'t compile';  // Can't re-assign to a constant

const user1 = { id: 1, name: "MyName1", };
const user2 = { id: 2, name: "MyName2", };
// user1 = user2;  // Can't re-assign to a constant
user1.name = user2.name;  // Compiles
user1.id = 1000;  // Compiles

function constListExample(): void {
  const myList = [ 1, 2, 3, ];
  // Though the value of the list changes, the reference to the list doesn't.
  // The same holds true for an object.
  myList.push(4);
  console.log(myList);
}
constListExample();

// The below code will throw an error:
// function constListErrorExample() {
//   const myList = [ 1, 2, 3, ];
//   myList = [ 1, 2, 3, 4, ];
//   console.log(myList);
// }
// constListErrorExample();
```

</details>

<details>
<summary>Example: Change const object property value</summary>

```typescript
function changeConstObjectProperty(): void {
  let obj1 = { p1: "p1value", };
  obj1 = { p1: "p1value changed", };
  const obj2 = { p2: "p2value", };
  // obj2 = { p2: "Does not compile", };  // Doesn't compile
  obj2.p2 = "Compiles";
  console.log(JSON.stringify(obj2));
}
changeConstObjectProperty();
```

</details>
