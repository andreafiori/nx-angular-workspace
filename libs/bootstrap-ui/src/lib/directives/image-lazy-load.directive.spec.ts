import { ImageLazyLoadDirective } from './image-lazy-load.directive';
import { ElementRef } from '@angular/core';

describe('ImageLazyLoadDirective', () => {
  it('should create an instance', () => {
    const directive = new ImageLazyLoadDirective(
      new ElementRef('<img alt="" src="test.png" appLazyLoad>')
    );
    expect(directive).toBeTruthy();
  });
});
