import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormSampleHomeComponent } from './form-sample-home.component';
import { SimpleFormComponent } from '../simple-form/simple-form.component';
import { ComplexFormComponent } from '../complex-form/complex-form.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { FormValidationComponent } from '../form-validation/form-validation.component';
import { ValidateFieldsSubmitFormComponent } from '../validate-fields-submit-form/validate-fields-submit-form.component';

describe('FormSampleHomeComponent test', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormSampleHomeComponent,
        SimpleFormComponent,
        ComplexFormComponent,
        LoginFormComponent,
        FormValidationComponent,
        ValidateFieldsSubmitFormComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FormSampleHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h2 tag', async(() => {
    const fixture = TestBed.createComponent(FormSampleHomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Multiple form types and validations');
  }));
});
