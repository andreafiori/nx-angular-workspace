import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YoutubeChannelsComponent } from './youtube-channels.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

describe('YoutubeChannelsComponent', () => {
  let component: YoutubeChannelsComponent;
  let fixture: ComponentFixture<YoutubeChannelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeChannelsComponent ],
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
        HttpClientTestingModule
      ],
      providers: [
        BsModalService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
