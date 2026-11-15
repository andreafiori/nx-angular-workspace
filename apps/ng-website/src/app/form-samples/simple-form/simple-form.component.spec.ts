import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SimpleFormComponent } from './simple-form.component';

describe('SimpleFormComponent', () => {
	let component: SimpleFormComponent;
	let fixture: ComponentFixture<SimpleFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
      declarations: [SimpleFormComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule]
    }).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SimpleFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// Generates a (strange) error on Travis:
	/* it('should test submitForm', () => {
		expect(component.submitForm({})).toBeUndefined();
	}); */
});
