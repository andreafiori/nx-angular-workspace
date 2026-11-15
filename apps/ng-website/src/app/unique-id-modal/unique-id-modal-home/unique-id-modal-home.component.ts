import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { ProductListService } from '../shared/product-list.service';
import { Product } from '../../shared/models/unique-id-modal/product';

@Component({
  selector: 'nxprojects-unique-id-modal-home',
  templateUrl: './unique-id-modal-home.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class UniqueIdModalHomeComponent {

  @ViewChild('addProductsModal') addProductsModal: any;

  constructor(private productListSrv: ProductListService) { }

	/**
	 * Check if you can add new rows
	 */
  canAddProducts(): boolean {
    return this.productListSrv.getInactiveProducts().length > 0;
  }

	/**
   * Get main product list
   */
  getProductList(): Product[] {
    return this.productListSrv.getActiveProducts();
  }
}
