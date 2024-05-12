let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];

function print(b: any | any[]): void {
  if (b) {
    console.log(`The value ${b} is true.`);
  } else {
    console.log(`The value ${b} is false.`);
  }
}

print(x1);
print(x2);
print(x3);
print(x4);
print(x5);
print(x6);
print(x7);

// Type conversion with the Boolean() function
console.log(Boolean(false));        // false
console.log(Boolean("false"));      // true
console.log(Boolean("not false"));  // true

export {};
