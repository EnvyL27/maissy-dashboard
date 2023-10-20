import { AppComponent } from 'src/app/app.component';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { VERSION } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { map, share, Subscription, timer } from 'rxjs';
import { AuthService } from './../../service/auth/auth.service';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public resolved: boolean = false;
  public sub1: boolean = false;
  public sub2: boolean = false;
  public sub3: boolean = false;
  public sub4: boolean = false;
  public subCost: boolean = false;
  public ciltsub: boolean = false;
  public lubisub: boolean = false;
  public lubiplantsub: boolean = false;
  public energySub : boolean = false;
  public energyUsgSub : boolean = false;
  public energySrcSub : boolean = false;
  public energyDaily : boolean = false;
  currentDate = new Date();
  constructor(
    public toastr: ToastrService,
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,) {}
  ngOnInit(): void {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  showInfo() {
    this.toastr.info('Thank you for using MAISSY! 😁', 'Log out Success', {
      timeOut: 3000,
    })
  }
  
  signOut(){
    this.authService.signOut()
    this.showInfo()
  }

  lubiPlantClick(){
    this.lubiplantsub = !this.lubiplantsub;
  }
  lubiClick(){
    this.lubisub = !this.lubisub;
  }
  ameventclick(){
    this.resolved = !this.resolved;
  }
  refreshPage(){
    window.location.reload();
  }
  ammonitoringsub(){
    this.sub1 = !this.sub1;
  }
  enmonitoringsub(){
    this.energySub = !this.energySub;
  }
  enusmonitoringsub(){
    this.energyUsgSub = !this.energyUsgSub;
  }
  ensrcmonitoringsub(){
    this.energySrcSub = !this.energySrcSub;
  }
  dailyreport(){
    this.energyDaily = !this.energyDaily;
  }
  pdmmonitoringsub(){
    this.sub2 = !this.sub2;
  }
  costmonitoringsub(){
    this.subCost = !this.subCost;
  }
  ciltmonitoringsub(){
    this.ciltsub = !this.ciltsub;
  }
  gamessub(){
    this.sub3 = !this.sub3;
  }
  big5sub(){
    this.sub4 = !this.sub4;
  }
}
