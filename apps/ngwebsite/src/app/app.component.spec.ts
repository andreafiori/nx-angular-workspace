import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './shared/services/breadcrumb.service';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        BreadcrumbService
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        BreadcrumbComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
