import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TwoSumsComponent } from './two-sums/two-sums.component';

const routes: Routes = [
  {
    path: 'coding-solutions',
    children: [
      { path: 'two-sums', component: TwoSumsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingSolutionsRoutingModule { }
