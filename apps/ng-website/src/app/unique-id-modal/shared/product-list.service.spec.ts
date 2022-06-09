import { ProductListService } from './product-list.service';

describe('ProductListService', () => {

  let productListService : ProductListService;

  beforeEach(() => {
    productListService = new ProductListService();
  });

  it('should test getActiveProducts to be true', () => {
    expect(productListService.getActiveProducts()).toBeTruthy();
  });

  it('should test getInactiveProducts to be true', () => {
    expect(productListService.getInactiveProducts()).toBeTruthy();
  });

  it('should test getProductsList to be true', () => {
    expect(productListService.getProductsList()).toBeTruthy();
  });

});
