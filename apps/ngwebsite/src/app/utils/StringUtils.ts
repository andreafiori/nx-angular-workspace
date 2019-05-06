import { Injectable } from '@angular/core';

@Injectable()
export class StringUtils {

  static stripTags(str: string): string {
    return str.replace(/(<([^>]+)>)/ig, "");
  }

  static stripCDataTag(str: string): string {
    const tagStripped = str.replace('<![CDATA[', '');
    return tagStripped.replace(']]>', '');
  }

  static stripTagsAndCData(str: string): string {
    return this.stripTags(this.stripCDataTag(str));
  }

  static truncateString(str: string, wordsNumber: number): string {
    return str.split(' ').splice(0, wordsNumber).join(' ');
  }

}