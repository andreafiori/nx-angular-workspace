import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  /**
   * Set title and Meta objects
   * @param titleService Title
   * @param meta Meta
   */
  constructor(private titleService: Title, private meta: Meta) {}

  /**
   * Set title
   * @param title
   */
  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  /**
   * Add new meta tag
   * @param tagName string
   * @param tagContent string
   */
  addMetaTag(tagName: string, tagContent: string) {
    this.meta.addTag({ name: tagName, content: tagContent });
  }

  /**
   * Get Meta tag
   *
   * @param tagName string
   * @returns HTMLElement
   */
  getMetaTag(tagName: string): HTMLElement | null {
    return this.meta.getTag(tagName);
  }

  getTitleTag(): string {
    return this.titleService.getTitle();
  }
}
