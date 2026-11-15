import { Component } from '@angular/core';

@Component({
	selector: 'app-simple-form',
	templateUrl: './simple-form.component.html',
	styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {

	submitForm(form: any): void {
		console.log('Form Data: ');
		console.log(form);
	}

}
