import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildParentComponent } from './view-child-parent.component';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewChildParentComponent', () => {
  let component: ViewChildParentComponent;
  let fixture: ComponentFixture<ViewChildParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildParentComponent, ViewChildChildComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
