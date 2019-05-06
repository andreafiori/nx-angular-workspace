import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

  /**
   * Strip a string from HTML tags
   * @param str string
   */
  public static stripTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, '');
  }

  /**
   * Find a word in a string
   *
   * @param str string
   * @param wordToSearch string
   * @returns boolean
   */
  public static findWord(str, wordToSearch): boolean {
    return RegExp('\\b' + wordToSearch + '\\b').test(str);
  }

  /**
   * Count words in a string
   *
   * @param str
   * @returns number
   */
  public static countWords(str: string): number {
    return str.length > 0 ? str.split(' ').length : 0;
  }

  /**
   * Count white spaces in a string
   *
   * @param str
   * @returns number
   */
  public static countWhitespaces(str: string): number {
    return str.split(' ').length - 1;
  }

  /**
   * Count paragrahs in a text string
   *
   * @param str
   * @returns number
   */
  public static countParagraphs(str: string): number {
    const lineBreakNumber = str.match(/[^\n]*\n[^\n]*/gi);
    if (lineBreakNumber) {
      return lineBreakNumber.length + 1;
    }

    return str.length > 0 ? 1 : 0;
  }

}
