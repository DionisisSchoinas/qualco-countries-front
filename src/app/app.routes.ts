import { Routes } from '@angular/router';
import { RegionDataComponent } from './region-data/region-data.component';
import { CountryLanguagesComponent } from './country-languages/country-languages.component';
import { CountryGdpComponent } from './country-gdp/country-gdp.component';

export const routes: Routes = [
    {path: 'region-data', component: RegionDataComponent},
    {path: 'country-languages', component: CountryLanguagesComponent},
    {path: 'country-gdp', component: CountryGdpComponent},
];
