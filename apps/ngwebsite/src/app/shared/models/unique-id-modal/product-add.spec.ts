import { ProductCategory } from './product-category';
import { ProductAdd } from './product-add';

describe('ProductAdd', () => {

  let productAdd : ProductAdd;

  beforeEach(() => {
    productAdd = new ProductAdd();
  });

  it('should test isEmpty to be true', () => {
    productAdd.clear();
    expect(productAdd.isEmpty()).toBeTruthy();
  });

  it('should test isEmpty to be false', () => {
    productAdd.productId = '1';
    productAdd.category = new ProductCategory('1', 'TVs');
    expect(productAdd.isEmpty()).toBeFalsy();
  });

  it('should test clear', () => {
    productAdd.clear();
    expect(productAdd.productId).toBe(undefined);
    expect(productAdd.category).toBe(undefined);
  });

});
