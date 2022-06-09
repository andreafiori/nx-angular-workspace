import { Component, OnInit, OnDestroy, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { EmployeeService } from './employee.service';
import { Employee } from '../../shared/models/department/employee';

@Component({
  selector: 'department-team',
  templateUrl: './department-team.component.html',
  styleUrls: []
})
export class DepartmentTeamComponent implements OnInit, OnDestroy {
  
  modalRef: BsModalRef;

  employeesToDisplay: Employee[] = [];

  employees: Employee[] = [];

  cost = 0;

  constructor(protected service: EmployeeService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.service.currentEmployees.subscribe(employees => this.employees = employees);

    this.service.currentCost.subscribe(cost => this.cost = cost);
  }

  ngOnDestroy() {
    this.service.resetEmployees();
    this.service.resetCost();
  }

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
