import { SafeUrlPipe } from './safe-url.pipe';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { inject, TestBed } from '@angular/core/testing';

describe('SafeUrlPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          BrowserModule
        ]
      });
  });
  
  it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    const pipe = new SafeUrlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  }));
});
