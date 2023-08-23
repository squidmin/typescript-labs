let var_1: number = 2;

let var_2: number = var_1 + 1;

const getArrayLength = (arr: any[]): number => {
    return arr.length;
};

console.log("var_2 ===", var_2);

console.log("Array length ===", getArrayLength([1, 2, 3,]));

export {};
