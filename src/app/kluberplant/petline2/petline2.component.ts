import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-petline2',
  templateUrl: './petline2.component.html',
  styleUrls: ['./petline2.component.css']
})
export class Petline2Component implements OnInit {
  prevgambar: boolean = true;
  prevgambar2: boolean = true;
  injectmodel: boolean = true;
  bottleshower: boolean = true;
  srcimage: any = 'assets/img/petline2.jpg';
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }

  ngOnInit(): void {
    this.spinner.show();
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.spinner.hide();
      this.resolved = true;
      if(count = 1){
        clearInterval(a);
      }
    },200);
  }

}
