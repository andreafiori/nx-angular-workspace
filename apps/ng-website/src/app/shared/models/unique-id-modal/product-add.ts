import { ProductCategory } from './product-category';

export class ProductAdd {

	uniqueId : number;
	productId : string | undefined;
	category : ProductCategory | undefined;

	isEmpty(): boolean {
		return this.productId === undefined && this.category === undefined;
	}

	clear() {
		this.productId = undefined;
		this.category = undefined;
	}

}
