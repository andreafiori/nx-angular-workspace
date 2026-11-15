import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexFormComponent } from './complex-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('ComplexFormComponent', () => {
  let component: ComplexFormComponent;
  let fixture: ComponentFixture<ComplexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplexFormComponent ],
      providers: [
        FormBuilder
      ],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form', () => {
    const sbmtFormData = {
      firstName: '',
      lastName: '',
      gender: ['Female'],
      hiking: false,
      running: false,
      swimming: false
    };
    expect(component.submitForm(sbmtFormData)).toBeUndefined();
  });
});
