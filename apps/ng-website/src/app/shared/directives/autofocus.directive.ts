import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[planthaAutofocus]'
})
export class AutofocusDirective implements OnInit {
  @Input('planthaAutofocus') private autofocus: boolean;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      if (this.autofocus !== false) {
        this.elementRef.nativeElement.focus();
      }
    }, 500);
  }
}
