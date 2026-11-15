import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

import { SeoService } from '../classes/seo.service';
import { Utils } from './../classes/Utils';

@Component({
  selector: 'app-description-validator',
  templateUrl: './description-validator.component.html'
})
export class DescriptionValidatorComponent {

  showForm: boolean;

  frmGroup: FormGroup;
  minlength = 160;
  maxlength = 170;

  wordsCount: number;
  stringLength: number;
  whiteSpaces: number;
  sentences: number;
  paragraphs: number;

  currentValidDescription: string;

  constructor(fb: FormBuilder, private seoService: SeoService, private titleService: Title, private meta: Meta) {
    this.frmGroup = fb.group({
      'description' : [null, [
        Validators.required,
        Validators.minLength(this.minlength),
        Validators.maxLength(this.maxlength)
      ]],
    });

    this.showForm = true;
    this.wordsCount = 0;
    this.stringLength = 0;
    this.whiteSpaces = 0;
    this.sentences = 0;
    this.paragraphs = 0;

    // Set meta tags
    this.seoService.setTitle('Meta description analyzer. Angular v2+ tool validator');
    meta.addTag({ name: 'description', content: 'Meta description analyzer' });
    meta.addTag({ name: 'keywords', content: 'seo,description,meta,analyzer,angular,tool' });
  }

  onDescriptionChange(description: any) {
    this._setStatistics(description.target?.value);
  }

  submitForm(description: string) {
    this._setStatistics(description);

    // TODO: sanitize and check HTML tags... compare value
    this.currentValidDescription = description;

    this.toggleForm();
  }

  private _setStatistics(description: string) {
    this.wordsCount = Utils.countWords(description);
    this.stringLength = description.length;
    this.whiteSpaces = Utils.countWhitespaces(description);
    this.paragraphs = Utils.countParagraphs(description);
  }

  toggleForm(): boolean {
    this.showForm = (this.showForm) ? false : true;
    return this.showForm;
  }

}
