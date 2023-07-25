// interface Admin = {
type Admin = {
  name: string;
  privileges: string[];
};

// interface Employee = {
type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function Overload

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a == "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultNum = add(1, 5);
const result = add("Max", " Schwarz") as string;
result.split(" ");

// -- Optional Chaining
const fetchdUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchdUserData?.job.title);

// Nullish Coalescing

const userInput = '';
// const userInput = undefined;
// const userInput = null;

// const storedData = userInput || 'Default';
const storedData = userInput ?? 'Default';

console.log(storedData);

// type UnkownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnkownEmployee) {
//   console.log("Name: " + emp.name);

//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log("Privileges: " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);
// printEmployeeInformation({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck ...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log(`${animal.type} moving at speed: ${speed}`);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const paragraph = document.querySelector("p");
// const paragraph = document.getElementById("message-output");

// // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// // exclamation mark accounts for possible nil and ensure it will never yield nil.
// // type between brackets clashes with jsx. Don't use this syntax in React.

// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;
// // Syntax with the type at the end works better with jsx

// userInputElement.value = "Hi there!";

// if (paragraph) {
//   (paragraph as HTMLElement).textContent = "Howdy!";
// }

// // Index Properties
// // flexible error container

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a capitalized character",
// };
