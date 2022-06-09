import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html'
})
export class ComplexFormComponent {
  complexForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.complexForm = fb.group({
      firstName: '',
      lastName: '',
      gender: ['Female'],
      hiking: false,
      running: false,
      swimming: false
    });
  }

  submitForm(value: any) {
    console.log('Reactive Form Data: ', value);
  }
}
