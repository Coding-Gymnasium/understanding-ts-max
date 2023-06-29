// const person = {
//   name: "maximilian",
//   age: 30,
// };

// console.log(person.nickname); // this causes an error because property 'nickname' doesn't exist in this object.

// // explicitely assign types
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "maximilian",
//   age: 30,
// };

// console.log(person.name);

// // Array types
// const person = {
//   name: "maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };

// Tuple type
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this enforces length and types.
} = {
  name: "maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
