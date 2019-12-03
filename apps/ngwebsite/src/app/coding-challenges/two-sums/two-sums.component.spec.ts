import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { TwoSumsComponent } from './two-sums.component';
import { TwoSumsService } from './two-sums.service';

describe('TwoSumsComponent', () => {
  let component: TwoSumsComponent;
  let fixture: ComponentFixture<TwoSumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoSumsComponent ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        TwoSumsService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoSumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
