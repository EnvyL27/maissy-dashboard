import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-apps-link',
  templateUrl: './apps-link.component.html',
  styleUrls: ['./apps-link.component.css']
})
export class AppsLinkComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService,
    public router: Router,) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.spinner.show();
    this.loaddata = await this.loaddata;
    var count = 0;
    this.loaddata = new Promise(resolve => {
      console.log('oi');
      
      var a = setInterval(()=>{
        count ++;
        this.spinner.hide();
        this.resolved = true;
        if(count = 1){
          clearInterval(a);
        }
      },100);
    });
  }

}
