import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildChildComponent } from './view-child-child.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ViewChildChildComponent', () => {
  let component: ViewChildChildComponent;
  let fixture: ComponentFixture<ViewChildChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewChildChildComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
});
