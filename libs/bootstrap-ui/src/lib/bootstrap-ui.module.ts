import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

import { ImageLazyLoadDirective } from './directives/image-lazy-load.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ImageLazyLoadDirective,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  exports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NavbarComponent,
  ]
})
export class BootstrapUiModule { }