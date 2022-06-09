import { Component, Input } from '@angular/core';

import { EmployeeService } from '../employee.service';
import { Employee } from '../../../shared/models/department/employee';

@Component({
  selector: 'department-member',
  templateUrl: './department-member.component.html',
  styleUrls: []
})
export class DepartmentMemberComponent {

  employeesToDisplay: Employee[] = [];

  @Input() member: Employee;

  constructor(protected service: EmployeeService) { }

  addManager() {
    this.addEmployeeAndIncrementCost(new Employee('Manager'));
  }

  addDeveloper() {
    this.addEmployeeAndIncrementCost(new Employee('Developer'));
  }

  addQAtester() {
    this.addEmployeeAndIncrementCost(new Employee('QAtester'));
  }

  private addEmployeeAndIncrementCost(employee: Employee) {
    this.employeesToDisplay.push(employee);
    this.service.addEmployee(employee);
    this.service.incrementCost(employee.getExpense());
  }

}
