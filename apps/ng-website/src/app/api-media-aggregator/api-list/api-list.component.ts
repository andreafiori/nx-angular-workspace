import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Api, ApiList } from '../../shared/models/api-list.model';
import { ApiListFilterForm } from '../../shared/models/api-media-aggregator/api-media-aggregator.model';
import { Category, Company, Platforms } from '../../shared/models/platforms.model';

@Component({
  selector: 'api-list',
  templateUrl: './api-list.component.html',
  styleUrls: []
})
export class ApiListComponent implements OnInit {

  apis: Array<Api>;
  filteredApis: Array<Api>;

  categoryOptions: Array<Category> = [];
  companyOptions: Array<Company> = [];

  companyOptionValue: string;

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.companyOptions = Object.values(Platforms);

    this.getApis();
  }

  private getApis() {
    this.apis = ApiList;
    this.filteredApis = this.apis;

    this.getCategoryOptions();

    this.initFilterForm();
  }

  private getCategoryOptions() {
    this.categoryOptions = Array.from(new Set(this.apis.map((api: Api) => {
      return {
        name: api.category,
        slug: api.slug
      }
    })));
  }

  private initFilterForm() {
    this.filterForm = this.formBuilder.group({
      category: [''],
      company: ['']
    });

    this.watchFormChanges();
  }

  private watchFormChanges() {
    this.filterForm.valueChanges.subscribe((value: ApiListFilterForm) => this.filterApis(value));
  }

  private filterApis(value: ApiListFilterForm) {
    let filteredStudents: Array<Api> = this.apis;
    if (value.category) {
      filteredStudents = filteredStudents.filter((api: Api) => api.slug === value.category);
    }

    this.companyOptionValue = value.company;

    this.filteredApis = filteredStudents;
  }
}
