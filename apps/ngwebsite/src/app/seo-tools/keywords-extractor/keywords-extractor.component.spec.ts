import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeywordsExtractorComponent } from './keywords-extractor.component';

describe('KeywordsExtractorComponent', () => {
  let component: KeywordsExtractorComponent;
  let fixture: ComponentFixture<KeywordsExtractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordsExtractorComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsExtractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test submitForm with valid input', () => {
    const input = {
      description: 'my description tag for unit test'
    };
    expect(component.submitForm(input)).toBeTruthy();
  });

  it('should test submitForm with unvalid input', () => {
    expect(component.submitForm({})).toBeFalsy();
  });
});
