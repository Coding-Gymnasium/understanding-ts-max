// function add(n1: number, n2: number): number { // we can specify the return type but it's better to use the inferred in most cases

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  // here we could define the return to :void but it's not recommended
  console.log("Result: " + num);
}

printResult(add(5, 12));

// Functions and types

let combinedValues: (a: number, b: number) => number;
combinedValues = add;
combinedValues(8, 8);

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
