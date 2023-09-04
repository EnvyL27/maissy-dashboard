import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-preparationroom',
  templateUrl: './preparationroom.component.html',
  styleUrls: ['./preparationroom.component.css']
})
export class PreparationroomComponent implements OnInit {

  prevgambar: boolean = true;
  srcimage: any = 'assets/img/preparation_room.jpg';
  deskripsi: any = 'Loading..';
  public resolved: boolean = false;
  constructor(private spinner: NgxSpinnerService) {
    window.scrollTo(0, 0);
   }
  changeimage(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/d13.png';
  }
  changeimage2(){
    this.prevgambar = !this.prevgambar;
    this.srcimage = 'assets/img/prep1_1.png';
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
