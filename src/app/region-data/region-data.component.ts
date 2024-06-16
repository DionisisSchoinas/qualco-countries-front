import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Region } from '../models/region.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegionStats } from '../models/region-stats.model';

@Component({
  selector: 'app-region-data',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  templateUrl: './region-data.component.html',
  styleUrl: './region-data.component.css'
})
export class RegionDataComponent {
  
  public regions: Region[] = [];
  public regionStats: RegionStats[] = [];

  httpClient: HttpClient;
  form?: any;

  constructor(private fb: FormBuilder, private client: HttpClient) {
    this.httpClient = client;
    this.form = this.fb.group(
      {
        regionId: ['0', Validators.required],
        dateFrom: ['', Validators.required],
        dateTo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.httpClient
      .get("http://localhost:9095/regions")
      .subscribe({
          next: (data: any) => this.regions = data.sort((a: any, b: any) => a.name.localeCompare(b.name)),
          error: (err) => console.log(err)
        }
      );
  }  

  public onSubmit() {
    console.log(this.form.value);
    this.httpClient
      .post("http://localhost:9095/regions", this.form.value)
      .subscribe({
          next: (data: any) => this.regionStats = data,
          error: (err) => console.log(err)
        }
      );
  }
}
