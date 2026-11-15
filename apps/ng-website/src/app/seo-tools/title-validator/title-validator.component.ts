import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StopWords } from './../classes/StopWords';

@Component({
  selector: 'app-title-validator',
  templateUrl: './title-validator.component.html',
  styleUrls: ['./title-validator.component.css']
})
export class TitleValidatorComponent {

  frmGroup: FormGroup;

  hasSeparators: boolean;
  hasStopWords: boolean;

  isSubmitted: boolean;

  stopWorsList: string[];

  /**
   * Initialize form
   *
   * @param fb FormBuilder
   * @param stopWords StopWords
   */
  constructor(fb: FormBuilder, private stopWords: StopWords) {
    this.frmGroup = fb.group({
      'title' : [null, [Validators.required, Validators.minLength(60)]],
    });
  }

  /**
   * Reset validation results
   */
  onChangeTitle() {
    this._resetResults();
  }

  onResetForm() {
    this._resetResults();
  }

  /**
   * Set validation results
   * @param title string
   * @returns boolean
   */
  submitForm(title: string): boolean {
    this.isSubmitted = true;

    this.stopWorsList = this.stopWords.detectStopWords(title);

    this.hasStopWords = this.stopWords.hasStopWords(title);
    this.hasSeparators = this.stopWords.hasSeparators(title);

    return this.isValid(title);
  }

  isValid(title: string): boolean {
    const isValidLength = title.length > 160 && title.length < 170;
    return (isValidLength && !this.hasSeparators && !this.hasStopWords);
  }

  /** Reset form \ component results */
  private _resetResults() {
    this.stopWorsList = [];

    this.hasStopWords = false;
    this.hasSeparators = false;

    this.isSubmitted = false;
  }
}
