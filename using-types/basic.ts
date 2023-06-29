function add(n1: number, n2: number) {
  console.log(typeof n1);
  return n1 + n2;
}

function trueOrFalse(bool: boolean) {
  if (bool) {
    console.log("It's true");
  } else {
    console.log("It's false");
  }
}


const results = add(1, 2);
console.log(results);
trueOrFalse(true)
trueOrFalse(false)
