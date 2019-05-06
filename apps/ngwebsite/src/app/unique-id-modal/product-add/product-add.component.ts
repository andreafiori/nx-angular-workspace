import { Component, OnInit, Input } from '@angular/core';
import { NgForm }  from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Product } from '../../shared/models/unique-id-modal/product';
import { ProductAdd } from '../../shared/models/unique-id-modal/product-add';
import { ProductListService } from '../shared/product-list.service';
import { ProductCategory } from '../../shared/models/unique-id-modal/product-category';

@Component({
	selector: 'product-add',
	templateUrl: './product-add.component.html',
	styleUrls: []
})
export class ProductAddComponent implements OnInit {

	@Input() private modalInstance: ModalDirective;

	private _productsToAdd: ProductAdd[];
	private availableIds: string[];
	private uniqueIdSequence = 0;

	private defaultCategories : any[];

	constructor(private productListService : ProductListService) { }

	ngOnInit() {

		this._productsToAdd = [];

		const products : Product[] = this.productListService.getInactiveProducts();
		this.availableIds = products.map( (v) => v.id );

		this.defaultCategories = [
			new ProductCategory('1','TVs'),
			new ProductCategory('2','Mp3 Readers'),
			new ProductCategory('3','Hard Disks'),
			new ProductCategory('4','Playstation'),
			new ProductCategory('5','Laptop'),
		];

		// Add the first row
		this.addNewRow();
	}

	/**
	 * Get available product IDs base on a ProductAdd object
	 */
	getAvailableProductIds(product : ProductAdd) : string[] {
		let usedIds = this._productsToAdd.map( p => p.productId );
		return this.availableIds.filter( id => id === product.productId || usedIds.indexOf(id) === -1 );
	}

	public getCategories() : any[] {
		return this.defaultCategories;
	}

	onProductUpdated(product: ProductAdd, isLast: boolean): ProductAdd | undefined {
		// If the product is not the last or not valid, do nothing.
		if (!isLast || !product.productId || !product.category)
			return;
		// If there are no more products available, do nothing.
		if (this.availableIds.length - this._productsToAdd.length <= 0)
			return;
		// Otherwise, create a new product
		return this.addNewRow();
	}

  /**
   * Add a new row to the product form with an unique ID
   * @returns ProductAdd
   */
	addNewRow(): ProductAdd {
		let newProduct : ProductAdd = new ProductAdd();
		newProduct.uniqueId = this.uniqueIdSequence++;
		this._productsToAdd.push(newProduct);
		return newProduct;
	}

	/**
	 * Delete a row with a form
	 */
	deleteRow(i: number, last: boolean): Array<ProductAdd> {
		if (last) {
			this._productsToAdd[i].clear();
		} else {
			this._productsToAdd.splice(i, 1);
		}
		return this._productsToAdd;
	}

  /**
   * Close modal window
   */
	close() {
		this.modalInstance.hide();
		return this.modalInstance.isShown;
	}

	/**
	 * Add elements from modal
	 *
	 * @param form
	 * @returns boolean
	 */
	submit(form : NgForm): boolean {
		if (form.valid) {
			// Products sent via the modal window
			this.close();
			return true;
		}
		return false;
	}

  /**
   * ProductAdd getter
   *
   * @returns ProductAdd[]
   */
	get productsToAdd(): ProductAdd[] {
		return this._productsToAdd;
	}
}
