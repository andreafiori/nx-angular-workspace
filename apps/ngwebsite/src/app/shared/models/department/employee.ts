export interface EmployeeType {
  expense: number;
  job: string;
}

export class Employee implements EmployeeType {

  expense: number;

  job: string;

  constructor(job: string) {
    this.job = job;

    this.setExpense(job);
  }

  /**
   * Check job props name and set expense
   * 
   * @param job string
   */
  private setExpense(job: string) {
    // Valid jobs
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