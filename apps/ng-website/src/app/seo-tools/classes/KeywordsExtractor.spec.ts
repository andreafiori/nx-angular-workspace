import { async } from '@angular/core/testing';
import { KeywordsExtractor } from './KeywordsExtractor';

describe('StopWords', () => {
  let keywordsExtractor: KeywordsExtractor;

  beforeEach( async(() => {
    keywordsExtractor = new KeywordsExtractor();
  }));

  beforeEach(() => {

  });

  it('should test keywords extraction', () => {
    expect( KeywordsExtractor.extract('get what your deserve') ).toBeTruthy();
  });
});
