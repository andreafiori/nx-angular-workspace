import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" autofocus>`
})
class TestAutoFocusComponent {}

describe('Directive: Autofocus', () => {
  let component: TestAutoFocusComponent;
  let fixture: ComponentFixture<TestAutoFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestAutoFocusComponent, AutofocusDirective]
    });
    fixture = TestBed.createComponent(TestAutoFocusComponent);
    component = fixture.componentInstance;
  });

  it('autofocus over input', () => {
    inputEl = fixture.debugElement.query(By.css('input'));
  });
});