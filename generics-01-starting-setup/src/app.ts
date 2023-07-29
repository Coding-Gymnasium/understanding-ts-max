class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItem("Aerin");
textStorage.addItem("Noelle");
textStorage.addItem("Liz");
textStorage.removeItem("Liz");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);

console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();

// objectStorage.addItem({ name: "Aerin" });
// objectStorage.addItem({ name: "Noelle" });
// objectStorage.addItem({ name: "Liz" });

// objectStorage.removeItem({ name: "Liz" });
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   return { title: title, description: description, completeUntil: date };
// }

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // doesn't work because we set names as read ony.

