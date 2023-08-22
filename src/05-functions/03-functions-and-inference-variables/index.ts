const inc = 1;

function myNamedFunction(p: number): number {
    return p + inc;
}

const myAnonymousFunction = function (p: number): number {
    return p + inc;
}
const myAnonymousFunction2 = (p: number): number => {
    return p + inc;
}
const myAnonymousFunction3 = (p: number): number => p + inc;
const myAnonymousFunction4 = (p: number) => p + inc;

console.log("myNamedFunction(1) ==", myNamedFunction(1));
console.log();

console.log("myAnonymousFunction(1) ==", myAnonymousFunction(1));
console.log();

console.log("myAnonymousFunction2(1) ==", myAnonymousFunction2(1));
console.log();

console.log("myAnonymousFunction3(1) ==", myAnonymousFunction3(1));
console.log();

console.log("myAnonymousFunction4(1) ==", myAnonymousFunction4(1));
console.log();

export {};
