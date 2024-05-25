import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeIcon:string = 'dark_mode';

  toggleButton() {
      document.documentElement.classList.toggle('dark');
      document.documentElement.setAttribute('data-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      this.themeIcon === 'dark_mode' ? this.themeIcon = 'light_mode' : this.themeIcon = 'dark_mode';
  }
}