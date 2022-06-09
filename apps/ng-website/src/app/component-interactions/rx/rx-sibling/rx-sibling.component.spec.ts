import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxSiblingComponent } from './rx-sibling.component';

describe('RxSiblingComponent', () => {
  let component: RxSiblingComponent;
  let fixture: ComponentFixture<RxSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
