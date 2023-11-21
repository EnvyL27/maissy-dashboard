import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-user-level-list',
  templateUrl: './user-level-list.component.html',
  styleUrls: ['./user-level-list.component.css']
})
export class UserLevelListComponent implements OnInit {

  resolved: boolean = false
  searchText: any;
  prData: any
  idDelete: any
  successAlert: boolean = false
  deleteAlert: boolean = false
  imagePopUp: boolean = false
  imageUrl: any
  prDataArray: any = []
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
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  popUp(url : any) {
    this.imagePopUp = !this.imagePopUp
    this.imageUrl = url
    ////console.log(this.imageUrl);
    
  }

  cancelPopUp(){
    this.imagePopUp = !this.imagePopUp
  }

  oke() {
    this.successAlert = !this.successAlert
    history.replaceState({ ...history.state, successAlert: null }, '');
    ////console.log(history.state);
  }

  delete(id: any) {
    this.idDelete = 0
    this.idDelete = id
    this.deleteAlert = !this.deleteAlert
  }

  okeDelete() {
    this.spinner.show()
    this.resolved = false
    this.service.deletePrData(this.idDelete).subscribe((data: any) => {
      this.ngOnInit()
    })
    this.spinner.hide()
    this.resolved = true
    this.deleteAlert = !this.deleteAlert
  }
  cancelDelete() {
    this.deleteAlert = !this.deleteAlert
  }

  navigateUpdate(idData: any) {
    this.router.navigateByUrl('/user_level_update', { state: { id: idData }, })
  }

  ngOnInit() {
    this.spinner.show()
    ////console.log(history.state);
    this.successAlert = history.state.successAlert
    this.service.getTableUser().subscribe(data => {
      this.prData = data
      ////console.log(this.prData);
      this.spinner.hide()
      this.resolved = true
    })

    ////console.log(this.successAlert);

  }

}
