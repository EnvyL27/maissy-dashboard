import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  prData : any 
  prDataArray : any = []
  itemsPerPage: number = 0;
  math = Math;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

  constructor(
    private service: CountService, 
    private http: HttpClient,) {}

  ngOnInit() {
    this.service.getPrAllData().subscribe(data => {
      this.prData = data
      console.log(this.prData);
      
      // Object.values(this.prData).forEach(data => {
      //   var array = Object.keys(data).map(function (key) {
      //     return data[key];
      //   });
      // })
      
    })
  }

}
