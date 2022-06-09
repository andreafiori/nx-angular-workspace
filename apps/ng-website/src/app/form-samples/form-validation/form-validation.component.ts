import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-form-validation',
	templateUrl: './form-validation.component.html'
})
export class FormValidationComponent {

	complexForm: FormGroup;

	constructor(fb: FormBuilder) {
		this.complexForm = fb.group({
			'firstName' : [null, Validators.required],
			'lastName': [null,  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
			'gender' : [null, Validators.required],
			'hiking' : [false],
			'running' : [false],
			'swimming' : [false]
		});
		// console.log(this.complexForm);
		this.complexForm.valueChanges.subscribe( (form: any) => {
			// console.log('form changed to:', form);
		});
	}

	submitForm(value: any) {
		// console.log(value);
	}
}
