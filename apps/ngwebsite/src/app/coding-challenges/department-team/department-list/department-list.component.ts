import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../shared/models/department/employee';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: []
})
export class DepartmentListComponent implements OnInit {

  @Input() employees: Employee;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: number, item: any) {
    return index; // or item.id
  }

}
