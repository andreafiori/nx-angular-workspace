export class KeywordsExtractor {

  static extract(text: string) {
    const commonWords = ['i', 'a', 'about', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'com', 'de', 'en', 'for', 'from', 'how', 'in', 'is', 'it', 'la', 'of', 'on', 'or', 'that', 'the', 'this', 'to', 'was', 'what', 'when', 'where', 'who', 'will', 'with', 'und', 'the', 'www'];

    text = text.toLowerCase();

    // replace unnesessary chars. leave only chars, numbers and space
    text = text.replace(/[^\w\d ]/g, '');

    let result = text.split(' ');

    // remove commonWords
    result = result.filter(function (word) {
      return commonWords.indexOf(word) === -1;
    });

    // Unique words
    return this.removeDuplicates(result);
  }

  // Remove duplicates from a given array
  private static removeDuplicates(arr: Array<any>): Array<any> {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    return uniqueArray;
  }
}
