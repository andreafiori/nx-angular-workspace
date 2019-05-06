import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'nxprojects-rx-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
})
export class RxSiblingComponent implements OnInit {

  message: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling");
  }

}
