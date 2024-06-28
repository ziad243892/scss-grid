import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPartComponent } from './video-part.component';

describe('VideoPartComponent', () => {
  let component: VideoPartComponent;
  let fixture: ComponentFixture<VideoPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
