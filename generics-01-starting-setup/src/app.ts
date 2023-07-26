// const names = ['Max', 'Manuel']; // type string[]
const arr = []; // type any
const names: Array<string> = []; // type string[]
// names[0].split(' ');

const promise: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});
