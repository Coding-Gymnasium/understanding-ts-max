abstract class Department {
  // name: string;
  static fiscalYear = 2023;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department ${this.id}:  ${this.name}`);
  // }

  abstract describe(this: Department): void;

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

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("4", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  describe(): void {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const sales = new Department("1", "Sales");

// console.log(sales);
// console.log(sales.describe());

// sales.addEmployee("Max");
// sales.addEmployee("Manu");
// sales.printEmployeeInformation();

const employee1 = Department.createEmployee("Martin");

console.log("Employee 1: ", employee1);
console.log("Fiscal Year: ", Department.fiscalYear);

const itDept = new ITDepartment("2", ["Nico"]);

itDept.addEmployee("Nico");
itDept.addEmployee("Liz");
itDept.printEmployeeInformation();
console.log(itDept.name);
console.log(itDept.admins);
console.log(itDept);
itDept.describe();

// const accountingDept = new AccountingDepartment("3", []);
const accountingDept = AccountingDepartment.getInstance(); 

// console.log(accountingDept.mostRecentReport); // because there are no reports yet this would throw an error.

accountingDept.addReport("Something went wrong");
accountingDept.mostRecentReport = "A new report added through setter";

accountingDept.addEmployee("Max");
accountingDept.addEmployee("Aerin");
accountingDept.printEmployeeInformation();

accountingDept.addReport("Another report");
console.log(accountingDept.mostRecentReport);

accountingDept.printReports();
console.log(accountingDept);

accountingDept.describe();
