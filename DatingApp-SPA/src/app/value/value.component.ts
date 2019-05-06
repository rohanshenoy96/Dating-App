import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {

  values: any;
  basUrl: string = "http://localhost:5000/api/values"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    // this.http.get(this.basUrl)
    //   .subscribe(
    //     (data) => {
    //       console.log(data);
    //       this.values = data;
    //     },
    //     (error) => {
    //       console.log(error)
    //     }
    //   )
  }

}
