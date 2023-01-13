let variableDefinedSomewhereElse: number = 2;

let newVariable: number = variableDefinedSomewhereElse + 1;

const getArrayLength = (arr: any[]): number => {
  return arr.length;
};

console.log("newVariable === " + newVariable);

console.log("Array length === " + getArrayLength([ 1, 2, 3, ]));

export {};