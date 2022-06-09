import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DepartmentMemberComponent } from './department-member.component';
import { Employee } from '../../../shared/models/department/employee';

describe('DepartmentListComponent', () => {
  let component: DepartmentMemberComponent;
  let fixture: ComponentFixture<DepartmentMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentMemberComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentMemberComponent);
    component = fixture.componentInstance;
    component.member = new Employee('Manager');
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
