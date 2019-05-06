import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'ngx-bootstrap';

import { UniqueIdModalHomeComponent } from './unique-id-modal-home.component';
import { ProductListService } from '../shared/product-list.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('UniqueIdModalHomeComponent', () => {
  let component: UniqueIdModalHomeComponent;
  let fixture: ComponentFixture<UniqueIdModalHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UniqueIdModalHomeComponent,
      ],
      providers: [
        ProductListService
      ],
      imports: [
        ModalModule.forRoot()
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueIdModalHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Unique IDs in a modal window');
  }));

  it('should test canAddProducts', () => {
    expect(component.canAddProducts()).toBeTruthy();
  });

  it('should test getProductList', () => {
    expect(component.getProductList()).toBeTruthy();
  });
});
