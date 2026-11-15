import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsTwoComponent } from './students-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('StudentsTwoComponent', () => {
  let component: StudentsTwoComponent;
  let fixture: ComponentFixture<StudentsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        StudentsTwoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
