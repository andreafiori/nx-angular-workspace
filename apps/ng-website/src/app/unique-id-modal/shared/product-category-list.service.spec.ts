import { ProductCategoryListService } from './product-category-list.service';

describe('ProductListService', () => {

  let productCategoryListSrv : ProductCategoryListService;

  beforeEach(() => {
    productCategoryListSrv = new ProductCategoryListService();
  });

  it('should test getProductCategories to be true', () => {
    expect(productCategoryListSrv.getProductCategories()).toBeTruthy();
  });

});
