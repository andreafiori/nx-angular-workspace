import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  @Input() sharedVar: string;
  @Output() sharedVarChange = new EventEmitter();

  /**
   * Update the sharedVar and send it to the parent component
   */
  change(newValue: string): string {
    this.sharedVar = newValue;
    this.sharedVarChange.emit(newValue);
    return newValue;
  }
}
