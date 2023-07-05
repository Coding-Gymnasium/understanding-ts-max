class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department ${this.id}:  ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const sales = new Department("1", "Sales");
console.log(sales);
console.log(sales.describe());

sales.addEmployee("Max");
sales.addEmployee("Manu");
sales.printEmployeeInformation();
