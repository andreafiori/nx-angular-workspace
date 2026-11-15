import { Injectable } from '@angular/core';

import { StringUtils } from '../../utils/StringUtils';

interface RssItem {
  image?: string;
  title: string;
  link: string;
  description: string;
  pubDate?: string,
  items: any[]
}

@Injectable()
export class RssParserService {

  domObject: RssItem = {
    image: '',
    title: '',
    description: '',
    link: '',
    items: []
  };

  DOMPARSER = new DOMParser().parseFromString.bind(new DOMParser());

  /**
   * Check if there is an error on doc selector tag
   *
   * @param i
   * @param tag
   * @returns
   */
  checkTagItem(i: any, tag: string) {
    try {
      return StringUtils.stripTagsAndCData(i(tag).textContent);
    } catch (e) {
      // TODO Log error
      return;
    }
  }

  checkTag(domParser: any, tag: string, throwError = false) {
    const tagToCheck = domParser.querySelector(tag);
    const result = (tagToCheck) ? StringUtils.stripTagsAndCData(tagToCheck.innerHTML) : null;
    if (result === null && throwError === true) {
      throw Error(tag + ' tag is required');
    }
    return result;
  }

  parseRssXmlString(xmlString: string, isAtom = false) {
    return (isAtom === true) ? this.parseFeedAtomFormat(xmlString) : this.parseFeedRss(xmlString);
  }

  /**
   * RSS format XML string parser
   *
   * @param {*} xmlString
   */
  parseFeedRss(xmlString: string) {

    const doc = this.DOMPARSER(xmlString, 'text/xml');

    this.domObject.title = this.checkTag(doc, 'channel title', true) || '';
    this.domObject.link = this.checkTag(doc, 'channel link', true) || '';
    this.domObject.description = this.checkTag(doc, 'channel description') || '';
    this.domObject.image = this.checkTag(doc, 'channel image url') || '';

    // Gather items values
    doc.querySelectorAll('item').forEach((item) => {
      const i = item.querySelector.bind(item);

      const pubDateTag = i('pubDate');
      const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

      const dcDateTag = i('date');
      const dcDate = (dcDateTag) ? dcDateTag.textContent : null;

      this.domObject.items.push({
        title: this.checkTagItem(i, 'title'),
        link: i('link')?.textContent,
        description: this.checkTagItem(i, 'description'),
        pubDate: pubDate ? pubDate : dcDate
      });

    });

    return this.domObject;
  }

  /**
   * Atom RSS format XML string parser
   *
   * @param {*} xmlString
   */
  parseFeedAtomFormat(xmlString: string) {
    const doc = this.DOMPARSER(xmlString, 'text/xml');

    this.domObject.title = this.checkTag(doc, 'title', true) || '';
    this.domObject.link = this.checkTag(doc, 'link', true) || '';

    // Gather entry values
    doc.querySelectorAll('entry').forEach((item) => {
      const i = item.querySelector.bind(item);

      const pubDateTag = i('updated');
      const pubDate = (pubDateTag) ? pubDateTag.textContent : null;

      let linkToArticle;
      if (i('link') && i('link')?.textContent) {
        linkToArticle = i('link')?.textContent;
      } else if (i('link') && i('link')?.getAttribute('href')) {
        linkToArticle = i('link')?.getAttribute('href');
      }

      this.domObject.items.push({
        title: this.checkTagItem(i, 'title'),
        link: linkToArticle,
        description: this.checkTagItem(i, 'summary'),
        pubDate: pubDate,
      });

    });

    return this.domObject;
  }
}
