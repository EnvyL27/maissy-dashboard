import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  prData : any 
  idDelete : any
  successAlert : boolean = false
  deleteAlert : boolean = false
  prDataArray : any = []
  itemsPerPage: number = 0;
  math = Math;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

  constructor(
    private service: CountService, 
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  oke(){
    this.successAlert = !this.successAlert
    history.replaceState({ ...history.state, successAlert: null }, '');
    console.log(history.state);
  }

  delete(id : any){
    this.idDelete = 0
    this.idDelete = id
    this.deleteAlert = !this.deleteAlert
  }

  okeDelete(){
    this.service.deletePrData(this.idDelete).subscribe((data:any) => {
      this.ngOnInit()
    })
    this.deleteAlert = !this.deleteAlert
  }
  cancelDelete(){
    this.deleteAlert = !this.deleteAlert
  }

  ngOnInit() {
    console.log(history.state);
    this.successAlert = history.state.successAlert
    this.service.getPrAllData().subscribe(data => {
      this.prData = data
      console.log(this.prData);      
    })

    console.log(this.successAlert);
    
  }

}
