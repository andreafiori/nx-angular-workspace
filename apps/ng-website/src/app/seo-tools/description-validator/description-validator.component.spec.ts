import { Title, Meta } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms/src/form_builder';

import { DescriptionValidatorComponent } from './description-validator.component';
import { SeoService } from '../classes/seo.service';

describe('DescriptionValidatorComponent', () => {
  let component: DescriptionValidatorComponent;
  let fixture: ComponentFixture<DescriptionValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionValidatorComponent ],
      providers: [SeoService, Title, Meta],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test onDescriptionChange', () => {
    component.onDescriptionChange('my new tag description');
    expect(component.stringLength).toBeGreaterThan(0);
    expect(component.wordsCount).toBe(4);
    expect(component.whiteSpaces).toBe(3);
    expect(component.sentences).toBe(0);
    expect(component.paragraphs ).toBe(1);
  });

  it('should test submitForm', () => {
    component.submitForm('my new tag description updated');
    expect(component.stringLength).toBeGreaterThan(0);
    expect(component.showForm).toBeFalsy();
  });

  it('should test toggleForm', () => {
    component.toggleForm();
    expect(component.showForm).toBeFalsy();
    component.toggleForm();
    expect(component.showForm).toBeTruthy();
  });
});
