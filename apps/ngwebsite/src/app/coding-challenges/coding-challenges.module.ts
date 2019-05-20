import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';

import { CodingChallengesRoutingModule } from './coding-challenges-routing.module';

import { TwoSumsComponent } from './two-sums/two-sums.component';
import { TwoSumsService } from './two-sums/two-sums.service';

import { DepartmentTeamComponent } from './department-team/department-team.component';
import { DepartmentListComponent } from './department-team/department-list/department-list.component';
import { DepartmentMemberComponent } from './department-team/department-member/department-member.component';
import { EmployeeService } from './department-team/employee.service';

@NgModule({
  declarations: [
    TwoSumsComponent,
    DepartmentTeamComponent,
    DepartmentListComponent,
    DepartmentMemberComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CodingChallengesRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [
    TwoSumsService,
    EmployeeService
  ]
})
export class CodingChallengesModule { }
