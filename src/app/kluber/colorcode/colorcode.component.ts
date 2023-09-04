import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-colorcode',
  templateUrl: './colorcode.component.html',
  styleUrls: ['./colorcode.component.css']
})
export class ColorcodeComponent implements OnInit {


  prevgambar: boolean = true;
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
