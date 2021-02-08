import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { UniqueIdModalRoutingModule } from './unique-id-modal-routing.module';
import { AutofocusDirective } from '../shared/directives/autofocus.directive';
import { ProductAddComponent } from './product-add/product-add.component';
import { UniqueIdModalHomeComponent } from './unique-id-modal-home/unique-id-modal-home.component';
import { ProductListService } from './shared/product-list.service';
import { ProductCategoryListService } from './shared/product-category-list.service';

@NgModule({
  declarations: [
    ProductAddComponent,
    UniqueIdModalHomeComponent,
    AutofocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    UniqueIdModalRoutingModule
  ],
  providers: [
    ProductListService,
    ProductCategoryListService,
  ]
})
export class UniqueIdModalModule { }
