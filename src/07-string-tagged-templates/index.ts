/*
 * The first parameter is all string literals in the array.
 * The second parameter is a list of all the placeholders.
 */
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