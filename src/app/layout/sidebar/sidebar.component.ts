import { AppComponent } from 'src/app/app.component';
import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'
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
  public prSub : boolean = false;
  public energyUsgSub : boolean = false;
  public energySrcSub : boolean = false;
  public energyDaily : boolean = false;
  public seuSub : boolean = false;
  public renewSub : boolean = false;
  public offSub : boolean = false;
  public onSub : boolean = false;
  public liveAlarmSub : boolean = false;
  currentDate = new Date();
  isAllowed:boolean = false;
  userLogged:any;
  constructor(
    public toastr: ToastrService,
    public router: Router,
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,) {
      router.events.subscribe((val) => {
        // see also 
        if(localStorage.getItem('nikLogged') == '0000'){
          this.isAllowed = true;
        }else{
          this.isAllowed = false;
        }
    });
    }
  ngOnInit(): void {
    this.userLogged = localStorage.getItem('nikLogged')
  
    if(localStorage.getItem('nikLogged') == '0000'){
      this.isAllowed = true;
    }else{
      this.isAllowed = false;
    }
    ////////////console.log(this.isAllowed);
    
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
    this.isAllowed = false;
    this.authService.signOut()
    this.showInfo()
    window.location.reload();
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
  prmonitoringsub(){
    this.prSub = !this.prSub;
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
  seu(){
    this.seuSub = !this.seuSub;
  }
  renew(){
    this.renewSub = !this.renewSub;
  }
  pdmmonitoringsub(){
    this.sub2 = !this.sub2;
  }
  pdmoffsub(){
    this.offSub = !this.offSub;
  }
  pdmonsub(){
    this.onSub = !this.onSub;
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
  alarmSub(){
    this.liveAlarmSub = !this.liveAlarmSub;
  }
}
