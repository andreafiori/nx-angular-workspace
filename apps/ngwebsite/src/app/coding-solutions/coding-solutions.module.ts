import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodingSolutionsRoutingModule } from './coding-solutions-routing.module';

import { TwoSumsComponent } from './two-sums/two-sums.component';
import { TwoSumsService } from './two-sums/two-sums.service';

@NgModule({
  declarations: [
    TwoSumsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CodingSolutionsRoutingModule
  ],
  providers: [
    TwoSumsService
  ]
})
export class CodingSolutionsModule { }
