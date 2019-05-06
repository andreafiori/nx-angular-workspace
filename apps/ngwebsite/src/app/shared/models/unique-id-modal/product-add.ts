import { ProductCategory } from './product-category';

export class ProductAdd {

	uniqueId : number;
	productId : string;
	category : ProductCategory;

	isEmpty(): boolean {
		return this.productId === undefined && this.category === undefined;
	}

	clear() {
		this.productId = undefined;
		this.category = undefined;
	}

}
