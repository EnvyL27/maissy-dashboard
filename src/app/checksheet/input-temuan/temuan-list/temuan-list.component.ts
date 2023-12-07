import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import * as moment from 'moment';

@Component({
  selector: 'app-temuan-list',
  templateUrl: './temuan-list.component.html',
  styleUrls: ['./temuan-list.component.css']
})
export class TemuanListComponent implements OnInit {

  resolved: boolean = false
  prData: any
  idDelete: any
  searchText: any
  successAlert: boolean = false
  deleteAlert: boolean = false
  imagePopUp: boolean = false
  imageUrl: any
  prDataArray: any = []
  itemsPerPage: number = 0;
  math = Math;
  currentPage: number = 1;
  currentYear: any = moment().format("YYYY");
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

  constructor(
    private service: CountService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService) { }

  popUp(url: any) {
    this.imagePopUp = !this.imagePopUp
    this.imageUrl = url
    //////console.log(this.imageUrl);

  }

  cancelPopUp() {
    this.imagePopUp = !this.imagePopUp
  }

  oke() {
    this.successAlert = !this.successAlert
    history.replaceState({ ...history.state, successAlert: null }, '');
    //////console.log(history.state);
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
    this.router.navigateByUrl('/pr_update', { state: { id: idData }, })
  }

  ngOnInit() {
    this.spinner.show()
    //////console.log(history.state);
    this.successAlert = history.state.successAlert
    this.service.getTemuanHdata().subscribe((dataH: any) => {
      this.prData = dataH;
      console.log(dataH);

      // Filter the data based on matching id and id_temuan
      this.prDataArray = this.prData.filter((element: any) => { // assuming id represents the related id in TemuanDdata
        return (
          moment(element.tanggal_temuan).format("YYYY") == this.currentYear &&
          element.approve_by == null && element.status == 'Draft' || element.status == 'Submit' || element.status == 'Revise'
        );
      });
      
      console.log(this.prDataArray);
      this.spinner.hide();
      this.resolved = true;
    });

    //////console.log(this.successAlert);

  }

}

