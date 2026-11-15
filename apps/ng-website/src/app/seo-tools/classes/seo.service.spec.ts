import { TestBed, inject } from '@angular/core/testing';

import { SeoService } from './seo.service';

describe('SeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeoService]
    });
  });

  it('should be created', inject([SeoService], (service: SeoService) => {
    expect(service).toBeTruthy();
  }));

  it('should test addMetaTag', inject([SeoService], (service: SeoService) => {
    service.addMetaTag('keywords', 'html,frontend,seo,performance');

    expect( service.getMetaTag('keywords') ).toBeDefined();
  }));

  it('should test getTitleTag', inject([SeoService], (service: SeoService) => {
    expect( service.getTitleTag() ).toBeDefined();
  }));
});
