import { async } from '@angular/core/testing';
import { StopWords } from './StopWords';

describe('StopWords', () => {
  let stopWords: StopWords;

  beforeEach( async(() => {
    stopWords = new StopWords();
  }));

  beforeEach(() => {

  });

  // Test hasStopWords
  it('should test hasStopWords to be true', () => {
    expect( stopWords.hasStopWords('get what your deserve') ).toBeTruthy();
  });

  it('should test hasStopWords to be false', () => {
    expect( stopWords.hasStopWords('Perfect title tag') ).toBeFalsy();
  });

  // Test hasSeparators
  it('should test hasSeparators to be true', () => {
    expect( stopWords.hasSeparators('string with - tags') ).toBeTruthy();
  });

  it('should test hasSeparators to be false', () => {
    expect( stopWords.hasSeparators('string with no tags') ).toBeFalsy();
  });

  it('should test detectStopWords to have stop words', () => {
    stopWords.detectStopWords('string with no tags');
    expect( stopWords.list.length > 0 ).toBeTruthy();
  });

  it('should test detectStopWords to be false', () => {
    stopWords.detectStopWords('Website valid content');
    expect(stopWords.list.length).toBe(0);
  });

  it('should test getWords', () => {
    expect(stopWords.words).toBeTruthy();
  });
});
