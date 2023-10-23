  import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
  import { NgxSpinnerService } from 'ngx-spinner';
  
  @Component({
    selector: 'app-energy-weekly-report',
    templateUrl: './energy-weekly-report.component.html',
    styleUrls: ['./energy-weekly-report.component.css']
  })
  export class EnergyWeeklyReportComponent implements OnInit {
    constructor(private spinner: NgxSpinnerService, private renderer: Renderer2, private el: ElementRef) {
      window.scrollTo(0, 0);
    }
  
  
    deskripsi: any = 'Loading..';
    public resolved: boolean = false;
  
  //   deleteSidebar() {
  //     // Get a reference to the app-sidebar element
  // var appSidebar = document.querySelector('app-sidebar');
  
  // // Check if the app-sidebar element exists
  // if (appSidebar) {
  //   // Remove the app-sidebar element from its parent node
  //   appSidebar.parentNode?.removeChild(appSidebar);
  // } else {
  //   //console.log('app-sidebar not found');
  // }
  
  //   }
  
    ngOnInit(): void {
      // this.deleteSidebar()
      this.spinner.show();
      var count = 0;
      var a = setInterval(() => {
        count++;
        this.spinner.hide();
        this.resolved = true;
        if (count = 1) {
          clearInterval(a);
        }
      }, 100);
    }
  
  }
  

