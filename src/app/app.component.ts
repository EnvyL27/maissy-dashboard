import { Component, Input, OnInit,EventEmitter, Injectable, Output, HostListener } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { Router,NavigationEnd  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isShow: boolean = false;
  topPosToStartShowing = 100;
  name = 'Get Current Url Route Demo';
  currentRoute: string | undefined;
  
  constructor(public router: Router ) {
   
  
  }

  isLoginRoute() {
    return this.router.url === '/login';
  }


  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

   // //console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
