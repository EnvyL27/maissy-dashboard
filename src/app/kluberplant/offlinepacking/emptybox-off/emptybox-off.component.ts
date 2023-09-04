import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-emptybox-off',
  templateUrl: './emptybox-off.component.html',
  styleUrls: ['./emptybox-off.component.css']
})
export class EmptyboxOffComponent implements OnInit {

  srcimage: any = 'assets/img/emptybox.png';
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
    },100);
  }

}
