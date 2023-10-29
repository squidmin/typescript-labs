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
