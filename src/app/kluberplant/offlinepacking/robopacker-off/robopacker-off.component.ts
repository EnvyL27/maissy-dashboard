import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-robopacker-off',
  templateUrl: './robopacker-off.component.html',
  styleUrls: ['./robopacker-off.component.css']
})
export class RobopackerOffComponent implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  robopacker: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  robopackerobj: object = {};
  robopackerarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Resealer';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
  }
  show() {
    this.showtable = !this.showtable;
    var count = 0;
    var a = setInterval(() => {
      count++;
      this.target.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      if(count = 1){
        clearInterval(a);
      }
    },100);
  }
  bukapdf() {
    window.open("assets/pdf/3HAC027151 PM IRB 6620-en.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.robopackerarr.length; i++) {
      if (this.robopackerarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.robopackerarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.robopackerarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.robopacker = this.service.getRobotpackerOff().subscribe(data => {
      this.robopackerobj = data;
      Object.values(this.robopackerobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.robopackerarr.splice(this.robopackerarr.lenght, 0, array[i]);
        }

        this.spinner.hide();
        this.resolved = true;
      })


    }
    );
  });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

}
