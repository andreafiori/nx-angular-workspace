import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxParentComponent } from './rx-parent.component';

describe('RxParentComponent', () => {
  let component: RxParentComponent;
  let fixture: ComponentFixture<RxParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
