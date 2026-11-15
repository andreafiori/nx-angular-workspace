import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormSamplesRoutingModule } from './form-samples-routing.module';
import { FormSampleHomeComponent } from './form-sample-home/form-sample-home.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SimpleFormComponent,
    ValidateFieldsSubmitFormComponent,
    LoginFormComponent,
    FormValidationComponent,
    FormSampleHomeComponent,
    FieldErrorDisplayComponent,
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormSamplesRoutingModule
  ]
})
export class FormSamplesModule { }
