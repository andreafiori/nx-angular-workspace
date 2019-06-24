import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';

import { ProductListService } from '../shared/product-list.service';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductAdd } from '../../shared/models/unique-id-modal/product-add';

describe('ProductAddComponent', () => {

	let component: ProductAddComponent;
	let fixture: ComponentFixture<ProductAddComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ProductAddComponent,
			],
			providers: [
				ProductListService
			],
			imports: [
				BrowserModule,
				FormsModule,
				HttpClientModule,
				ModalModule.forRoot()
			],
			schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', async(() => {
		fixture = TestBed.createComponent(ProductAddComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should test getCategories', async(() => {
		expect(component.getCategories()).toBeTruthy();
	}));

	it('should test onProductUpdated to be undefined', () => {
		expect(component.onProductUpdated(new ProductAdd(), false)).toBeUndefined();
	});

	it('should test onProductUpdated to be false', () => {
		expect(component.onProductUpdated(new ProductAdd(), true)).toBeFalsy();
	});

	it('should test addNewRow', () => {
		const newProduct = component.addNewRow();
		expect(newProduct instanceof ProductAdd).toBeTruthy();
		expect(newProduct.uniqueId).toBe(1);
	});

	it('should test getAvailableProductIds', () => {
		const newProduct = component.addNewRow();
		expect(component.getAvailableProductIds(newProduct)).toBeTruthy();
	});

	it('should test getCategories', () => {
		expect(component.getCategories()).toBeTruthy();
	});

	it('should test deleteRow to be with no rows', () => {
		expect(component.deleteRow(0, false).length === 0).toBeTruthy();
	});

	it('should test deleteRow to be with no rows as last', () => {
		expect(component.deleteRow(0, true).length === 0).toBeFalsy();
	});

	// TODO: fix TypeError: Cannot read property 'hide' of undefined
	/* it('should test close', () => {
		expect(component.close()).toBeFalsy();
	});

	it('should test submit to be true', () => {
	const form = new NgForm([], []);
	form.valid = true;
		expect(component.submit(form)).toBeTruthy();
	});

	it('should test submit to be false', () => {
	const form = new NgForm([], []);
		expect(component.submit(form)).toBeFalsy();
	}); */
});
