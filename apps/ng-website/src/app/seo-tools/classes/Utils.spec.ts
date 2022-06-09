import { StopWords } from './StopWords';
import { Utils } from './Utils';

describe('Utils', () => {

  it('should test constructor', () => {
    const util = new Utils();
    expect( util instanceof Utils ).toBeTruthy();
  });

  it('should test stripTags with no tags', () => {
    expect( Utils.stripTags('string with no tags') ).toBe('string with no tags');
  });

  it('should test stripTags with tags', () => {
    expect( Utils.stripTags('<p>string with tags</p>') ).toBe('string with tags');
  });

  it('should test countWords with more words', () => {
    expect( Utils.countWords('my') ).toBe(1);
    expect( Utils.countWords('my three words') ).toBe(3);
  });

  it('should test countWords with no words', () => {
    expect( Utils.countWords('') ).toBe(0);
  });

  it('should test countParagraphs', () => {
    expect( Utils.countParagraphs('') ).toBe(0);
    expect( Utils.countParagraphs('my first paragraph') ).toBe(1);
    expect( Utils.countParagraphs('my multi paragraph\nSecond paragraph') ).toBe(2);
  });
});
