import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoSumsComponent } from './two-sums/two-sums.component';
import { DepartmentTeamComponent } from './department-team/department-team.component';

const routes: Routes = [
  {
    path: 'coding-challenges',
    children: [
      { path: 'two-sums', component: TwoSumsComponent },
      { path: 'department-team', component: DepartmentTeamComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingChallengesRoutingModule { }
