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

function mergeGen<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}
const mergedObj2 = mergeGen({ name: "Max" }, { age: 30 });
console.log(mergedObj2.age)
