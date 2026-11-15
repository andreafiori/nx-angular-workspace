import {
  Component,
  ViewChild,
  ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';
import { ViewChildChildComponent } from '../view-child-child/view-child-child.component';

@Component({
  selector: 'app-view-child-parent',
  template: `
    <strong>Message</strong>: {{ message }}
    <app-view-child-child></app-view-child-child>
  `,
})
export class ViewChildParentComponent implements AfterViewChecked {

  message: string;

  @ViewChild(ViewChildChildComponent) child: ViewChildChildComponent;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    // Implementing ngAfterViewChecked instead of ngAfterViewInit avoids expressionChangedAfterItHasBeenCheckedError
    this.message = this.child.message;
    this.cdRef.detectChanges();
  }
}
