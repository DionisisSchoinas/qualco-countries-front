import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountryGdp } from '../models/country-gdp.model';

@Component({
  selector: 'app-country-gdp',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './country-gdp.component.html',
  styleUrl: './country-gdp.component.css'
})
export class CountryGdpComponent {  
  public countries: CountryGdp[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("http://localhost:9095/countries/gdp")
      .subscribe({
          next: (data: any) => this.countries = data,
          error: (err) => console.log(err)
        }
      );
  }

}
