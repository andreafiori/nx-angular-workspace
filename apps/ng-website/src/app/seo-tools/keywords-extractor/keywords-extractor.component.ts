import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { KeywordsExtractor } from './../classes/KeywordsExtractor';

class KeywordsExtractorForm {
  description: string;
}

@Component({
  selector: 'app-keywords-extractor',
  templateUrl: './keywords-extractor.component.html',
  styleUrls: []
})
export class KeywordsExtractorComponent {

  keywordsExtractorForm: FormGroup;
  extractionResult: any;

  constructor(fb: FormBuilder) {
    this.keywordsExtractorForm = fb.group({
      'description' : [null, [Validators.required]],
    });
  }

  submitForm(value: KeywordsExtractorForm): any {
    if (typeof value.description === 'undefined') {
      return false;
    }

    this.extractionResult = KeywordsExtractor.extract(value.description);

    return this.extractionResult;
  }
}
