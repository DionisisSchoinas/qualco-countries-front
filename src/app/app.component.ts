import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegionDataComponent } from './region-data/region-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegionDataComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qualco-front';
}
