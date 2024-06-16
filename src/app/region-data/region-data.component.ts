import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Region } from '../models/region.model';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegionStats } from '../models/region-stats.model';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Paged } from '../models/paged.model';

@Component({
  selector: 'app-region-data',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, NgbHighlight, NgbPaginationModule, FormsModule],
  templateUrl: './region-data.component.html',
  styleUrl: './region-data.component.css'
})
export class RegionDataComponent {
  
  public regions: Region[] = [];
  
  public paged?: Paged;

  public page: number = 1;
  public pageSize: number= 10;

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

  load() {
    this.httpClient
      .post("http://localhost:9095/regions", {
          "regionId": this.form.value.regionId,
          "dateFrom": this.form.value.dateFrom,
          "dateTo": this.form.value.dateTo,
          "page": this.page-1, 
          "size": this.pageSize
        }
      )
      .subscribe({
          next: (data: any) => this.paged = data,
          error: (err) => console.log(err)
        }
      );
  }
}
