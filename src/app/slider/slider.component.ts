import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatTabsModule, StarRatingComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

}
