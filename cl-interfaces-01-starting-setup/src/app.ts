class Department {
  // name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const sales = new Department("1", "Sales");

console.log(sales);
console.log(sales.describe());

sales.addEmployee("Max");
sales.addEmployee("Manu");
sales.printEmployeeInformation();

const itDept = new ITDepartment("2", ["Nico"]);
itDept.addEmployee("Nico");
itDept.addEmployee("Liz");
itDept.printEmployeeInformation();
console.log(itDept.name);
console.log(itDept.admins);
console.log(itDept);

const accountingDept = new AccountingDepartment("3", []);
accountingDept.addReport("Something went wrong");
accountingDept.addEmployee("Max");
accountingDept.addEmployee("Aerin");
accountingDept.printEmployeeInformation();
accountingDept.printReports();
console.log(accountingDept);
