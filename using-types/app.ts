// function add(n1: number, n2: number): number { // we can specify the return type but it's better to use the inferred in most cases

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void { // here we could define the return to :void but it's not recommended
  console.log("Result: " + num);
}

printResult(add(5, 12));
