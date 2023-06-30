// // Union types <type> | <type>
// function combine(input1: number | string, input2: number | string) {
//   let result: number | string;

//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }

// console.log(combine("Max", "Anna"));
// console.log(combine(2, 4));

// Type Alias
type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result: number | string;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

type User = { name: string; age: number };
const u1: User = { name: "Max", age: 30 };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
