import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateService } from '@ngx-translate/core';
import { VideoPartComponent } from './video-part/video-part.component';
import { TourSectionComponent } from './tour-section/tour-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SliderComponent, VideoPartComponent, TourSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'Blank Project';
  // private translate: TranslateService
  constructor() {
    // translate.setDefaultLang('en');
    // const translatedText = translate.instant('my.i18n.key');
    // console.log(translatedText);
  }

  ngOnInit(): void {
    
  }

}