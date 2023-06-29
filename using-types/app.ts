// const person = {
//   name: "maximilian",
//   age: 30,
// };

// console.log(person.nickname); // this causes an error because property 'nickname' doesn't exist in this object.

// explicitely assign types
const person: {
  name: string;
  age: number;
} = {
  name: "maximilian",
  age: 30,
};

console.log(person.name); // this causes an error because property 'nickname' doesn't exist in this object.
