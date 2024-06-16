import { Component, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CountryLanguage } from '../models/country-language.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-languages',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './country-languages.component.html',
  styleUrl: './country-languages.component.css'
})
export class CountryLanguagesComponent {
  
  @Input() countryId!: string;
  
  public languages: CountryLanguage[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get("http://localhost:9095/countries/" + this.countryId + "/languages")
      .subscribe({
          next: (data: any) => this.languages = data,
          error: (err) => console.log(err)
        }
      );
  }

}
