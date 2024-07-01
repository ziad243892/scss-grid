import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSectionComponent } from './tour-section.component';

describe('TourSectionComponent', () => {
  let component: TourSectionComponent;
  let fixture: ComponentFixture<TourSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
