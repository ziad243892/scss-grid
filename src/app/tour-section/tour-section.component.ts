import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-tour-section',
  standalone: true,
  imports: [MatTabsModule, StarRatingComponent, MatTooltipModule, CommonModule],
  templateUrl: './tour-section.component.html',
  styleUrl: './tour-section.component.scss'
})

export class TourSectionComponent implements OnInit {
  
   hotels = [
    {
      name: "Sheraton Istanbul City",
      rating: 4.9,
      image: "https://cache.marriott.com/content/dam/marriott-renditions/ISTSD/istsd-entrance-9632-hor-feat.jpg",
      location: "Hacıahmet, Kurtuluş Deresi Cd. Beyoğlu/İstanbul",
      amenities: ["wifi", "pool", "fitness_center", "restaurant", "live_tv", "kitchen"]
    },
  
    {
      name: "White House Hotel Istanbul",
      rating: 4.9,
      image: "https://www.istanbulwhitehouse.com/wp-content/uploads/2016/08/s5-960x400.jpg",
      location: "Alemdar, Old City - Sultanahmet, Çatalçeşme",
      amenities: ["wifi", "restaurant", "live_tv", "kitchen"]
    },
    {
      name: "Fer Hotel",
      rating: 4.7,
      image: "https://www.ferhotel.com/wp-content/uploads/2020/01/executive-junior-suit-cover.jpg",
      location: "Mollafenari, Türbedar Sk. Fatih/İstanbul",
      amenities: ["wifi", "restaurant", "live_tv", "kitchen"]
  },
  {
      name: "My Dream Istanbul Hotel",
      rating: 4.8,
      image: "https://cms.booklogic.net/media/banners/461/Banner1.jpg",
      location: "Hoca Paşa, Hüdavendigar Cd. Fatih/İstanbul",
      amenities: ["wifi", "pool", "fitness_center", "restaurant", "live_tv", "kitchen"]
  },
  {
      name: "Hotel Sultania",
      rating: 4.8,
      image: "https://www.hotelsultania.com/wp-content/uploads/2020/11/harem-suite-cover.jpg",
      location: "Hoca Paşa, Mehmet Murat Sk. No 4, Fatih/İstanbul",
      amenities: ["wifi", "restaurant", "live_tv", "kitchen"]
  },
  {
      name: "Feronya Hotel",
      rating: 4.9,
      image: "https://www.feronya.com/file/feronya-slider(2).jpg",
      location: "Talimhane/Taksim, Beyoglu, 34437 Istanbul, Turkey",
      amenities: ["wifi", "restaurant", "live_tv", "kitchen"]
}]

    ngOnInit(): void {
      console.log(this.hotels)
     }


  
}
