import { Injectable } from '@angular/core';

import { Product } from '../../shared/models/unique-id-modal/product';

@Injectable()
export class ProductListService {

	private products : {
    [key: string] : Product
  };

	constructor() {
		this.products = {};
	}

	getActiveProducts(): Product[] {
		return this.getProductsList().filter( t => t.active );
	}

	getInactiveProducts(): Product[] {
		return this.getProductsList().filter( t => !t.active );
	}

	getProductsList(): any[] {
		let myList = [];
		for (let i : number = 1; i <= 9; i++) {
			myList.push(
				{
					id: "00" + i,
					name: "Product no "+i,
					active: (i % 2 === 0) ? false : true,
				}
			);
		}
		return Object.keys(myList).map( key => myList[key] );
	}
}
