import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Paged } from '../models/paged.model';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [HttpClientModule, NgbHighlight, NgbPaginationModule, FormsModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  
  public paged?: Paged;

  public page: number = 1;
  public pageSize: number= 10;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.httpClient
      .post("http://localhost:9095/countries", {"page": this.page-1, "size": this.pageSize})
      .subscribe({
          next: (data: any) => this.paged = data,
          error: (err) => console.log(err)
        }
      );
  }
}
