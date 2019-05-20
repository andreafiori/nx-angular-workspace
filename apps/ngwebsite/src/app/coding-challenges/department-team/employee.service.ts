import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Employee } from '../../shared/models/department/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesSource = <BehaviorSubject<Employee[]>>new BehaviorSubject([]);
  currentEmployees = this.employeesSource.asObservable();

  private costSource = <BehaviorSubject<number>>new BehaviorSubject(0);
  currentCost = this.costSource.asObservable();

  constructor() { }

  addEmployee(employee: Employee): Employee[] {
    this.employeesSource.next(this.employeesSource.getValue().concat([employee]));
    return this.employeesSource.getValue();
  }

  incrementCost(expense: number) {
    this.costSource.next(this.costSource.getValue() + expense);
    return this.costSource.getValue();
  }

  getEmploeesSourceValue() {
    return this.employeesSource.getValue();
  }

  resetEmployees() {
    this.employeesSource.next([]);
  }

  resetCost() {
    this.costSource.next(0);
  }
}
