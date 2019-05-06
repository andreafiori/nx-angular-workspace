import { StringUtils } from './StringUtils';

describe('StringUtils test', () => {

  it('should strip HTML tags', () => {
    const tag = StringUtils.stripTags('<div>Hello World!</div>');
    expect(tag).toEqual('Hello World!');
  });

  it('should remove CDAta tags', () => {
    const tag = StringUtils.stripCDataTag('<![CDATA[Hello World!]]>');
    expect(tag).toEqual('Hello World!');
  });

  it('should remove HTML and CDAta tags', () => {
    const tag = StringUtils.stripTagsAndCData('<![CDATA[<div>Hello World!</div>]]>');
    expect(tag).toEqual('Hello World!');
  });
});
