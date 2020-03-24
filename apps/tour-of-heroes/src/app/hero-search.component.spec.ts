import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeroSearchComponent } from './hero-search.component';

describe('HeroSearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [HeroSearchComponent]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HeroSearchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
