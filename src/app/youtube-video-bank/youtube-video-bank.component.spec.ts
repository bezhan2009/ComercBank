import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideoBankComponent } from './youtube-video-bank.component';

describe('YoutubeVideoBankComponent', () => {
  let component: YoutubeVideoBankComponent;
  let fixture: ComponentFixture<YoutubeVideoBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeVideoBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeVideoBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
