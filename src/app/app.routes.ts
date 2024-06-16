import { Routes } from '@angular/router';
import { RegionDataComponent } from './region-data/region-data.component';
import { CountryGdpComponent } from './country-gdp/country-gdp.component';
import { CountryComponent } from './country/country.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'region-data', component: RegionDataComponent},
    {path: 'country-data', component: CountryComponent},
    {path: 'country-data/:countryId/languages', component: CountryLanguagesComponent},
    {path: 'country-gdp', component: CountryGdpComponent},
];
