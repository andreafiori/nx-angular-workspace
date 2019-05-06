import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsOneComponent } from './students-one.component';

describe('StudentsOneComponent', () => {
  let component: StudentsOneComponent;
  let fixture: ComponentFixture<StudentsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
