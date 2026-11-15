import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StopWords } from './../classes/StopWords';
import { Utils } from './../classes/Utils';
import { TitleValidatorComponent } from './title-validator.component';

describe('TitleValidatorComponent', () => {
  let component: TitleValidatorComponent;
  let fixture: ComponentFixture<TitleValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleValidatorComponent ],
      providers: [
        StopWords,
        Utils
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onChangeTitle', () => {
    component.onChangeTitle();

    expect(component.hasSeparators).toBeUndefined();
    expect(component.hasStopWords).toBeUndefined();
    expect(component.stopWorsList).toBeUndefined();
  });

  it('should test submitForm', () => {
    component.submitForm('Title tag perfect nonstop words unvalid');

    expect(component.isSubmitted).toBeTruthy();
    expect(component.stopWorsList.length).toBe(0);
    expect(component.hasSeparators).toBeFalsy();
  });

  it('should test onResetForm', () => {
    component.submitForm('Title tag perfect nonstop words unvalid');

    component.onResetForm();

    expect(component.isSubmitted).toBeUndefined();
    expect(component.stopWorsList).toBeUndefined();
    expect(component.hasSeparators).toBeUndefined();
    expect(component.hasSeparators).toBeUndefined();
  });

  it('should test isValid', () => {
    expect( component.isValid('Title tag perfect nonstop words unvalid') ).toBeFalsy();
  });
});
