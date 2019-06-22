import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
	let component: LoginFormComponent;
	let fixture: ComponentFixture<LoginFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
		  declarations: [ LoginFormComponent ],
		  providers: [
			  FormBuilder
		  ],
		  imports: [
				FormsModule,
				ReactiveFormsModule,
				HttpClientTestingModule,
		  ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// it('should test submitForm', () => {
	// 	expect(component.submitForm({})).toBeUndefined();
	// });

	// it('should test get User Info', () => {
	// 	expect(component.getUserInfo({})).toBeUndefined();
	// });

	// it('should test logout', () => {
	// 	expect(component.logout()).toBeUndefined();
	// 	expect(component.authenticated).toBeFalsy();
	// });
});
