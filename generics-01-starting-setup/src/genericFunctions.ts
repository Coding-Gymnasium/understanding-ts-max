// // const names = ['Max', 'Manuel']; // type string[]
// const arr = []; // type any
// const names: Array<string> = []; // type string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, _reject) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

// using type casting
const mergedObj = merge({ name: "Max" }, { age: 30 }) as {
  name: string;
  age: number;
};

// Generic types

function mergeGen<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj2 = mergeGen({ name: "Max" }, { age: 30 });
console.log(mergedObj2.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = `Got 1 element`;
  } else if (element.length > 0) {
    descriptionText = `Got ${element.length} elements`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: "Max" }, "name");
