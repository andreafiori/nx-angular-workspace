import { Injectable } from '@angular/core';
import { ProductCategory } from '../../shared/models/unique-id-modal/product-category';

@Injectable()
export class ProductCategoryListService {

	private productCategories : ProductCategory[];

	constructor() {
		this.productCategories = [];
	}

	public getProductCategories() : ProductCategory[] {
		return this.productCategories;
	}
}
