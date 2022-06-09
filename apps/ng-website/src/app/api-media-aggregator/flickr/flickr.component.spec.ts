import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlickrComponent } from './flickr.component';
import { FlickrService } from './flickr.service';

describe('FlickrComponent', () => {
  let component: FlickrComponent;
  let fixture: ComponentFixture<FlickrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        FlickrService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
