export interface EmployeeType {
  expense: number;

  job: string;
}

// export interface Teams {
//   cost: number;
//   teams: Array<Employee>;
// }

export class Employee implements EmployeeType {

  expense: number;

  job: string;

  constructor(job: string) {
    this.job = job;

    this.setExpense(job);
  }

  /**
   * Check job props name and set expense
   * @param job string
   */
  private setExpense(job: string) {
    // Valid jobs
    // const jobProps: EmployeeType[] = [
    //   { job: 'Manager', expense: 300 },
    //   { job: 'Developer', expense: 1000 },
    //   { job: 'QAtester', expense: 500 },
    // ];

    if (job === 'Developer') {
      this.expense = 1000;
    } else if (job === 'QAtester') {
      this.expense = 500;
    } else if (job === 'Manager') {
      this.expense = 300;
    }

    return this.expense;
  }

  getExpense() {
    return this.expense;
  }

}