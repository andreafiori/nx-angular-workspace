import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { KeywordsExtractorComponent } from './keywords-extractor/keywords-extractor.component';
import { DescriptionValidatorComponent } from './description-validator/description-validator.component';
import { SeoService } from './classes/seo.service';
import { ChecklistComponent } from './checklist/checklist.component';
import { TitleValidatorComponent } from './title-validator/title-validator.component';

import { StopWords } from './classes/StopWords';
import { Utils } from './classes/Utils';

const routes: Routes = [
  {
    path: 'seo-tools',
    children: [
      { path: 'title-validator', component: TitleValidatorComponent },
      { path: 'keywords-extractor', component: KeywordsExtractorComponent },
      { path: 'description-validator', component: DescriptionValidatorComponent },
      { path: 'checklist', component: ChecklistComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  declarations: [
    TitleValidatorComponent,
    KeywordsExtractorComponent,
    DescriptionValidatorComponent,
    ChecklistComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SeoService,
    StopWords,
    Utils, // TODO refactor \ move this object
  ]
})
export class SeoToolsModule { }
