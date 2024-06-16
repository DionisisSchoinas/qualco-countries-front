import { Component } from '@angular/core';
import { Country } from '../models/country.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  
  public countries: Country[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("http://localhost:9095/countries")
      .subscribe({
          next: (data: any) => this.countries = data,
          error: (err) => console.log(err)
        }
      );
  }
}
