import { TestBed } from '@angular/core/testing';

import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {

  let service: YoutubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeService]
    });

    service = TestBed.get(YoutubeService);
  }
  );

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should test isValidChannelId', () => {
  //   service.isValidChannelId('1');
  // });
});
