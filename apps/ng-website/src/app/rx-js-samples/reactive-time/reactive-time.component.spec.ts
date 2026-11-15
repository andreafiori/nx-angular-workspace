import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { ReactiveTimeComponent } from './reactive-time.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('ReactiveTimeComponent', () => {
  let component: ReactiveTimeComponent;
  let fixture: ComponentFixture<ReactiveTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On init time subscriptions should be loaded', fakeAsync(() => {
      spyOn(component, 'date$').and.returnValue(of([String]).pipe(delay(1)));
        // Trigger ngOnInit()
        fixture.detectChanges();
        expect(component.date$).toBeTruthy();
    }));
});
