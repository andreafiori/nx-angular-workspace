import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoSumsComponent } from './two-sums.component';

describe('TwoSumsComponent', () => {
  let component: TwoSumsComponent;
  let fixture: ComponentFixture<TwoSumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoSumsComponent ]
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
