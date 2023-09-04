import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-Packconveyorpt2',
  templateUrl: './Packconveyorpt2.component.html',
  styleUrls: ['./Packconveyorpt2.component.css']
})
export class Packconveyorpt2Component implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  packconveyor: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  packconveyorobj: object = {};
  packconveyorarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'packconveyor packconveyors';
  constructor(private spinner: NgxSpinnerService, private service: CountService) {
    window.scrollTo(0, 0);
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
    window.open("assets/pdf/bottle packconveyor.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.packconveyorarr.length; i++) {
      if (this.packconveyorarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.packconveyorarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.packconveyorarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.packconveyor = this.service.getPackConveyorPt2().subscribe(data => {
      this.packconveyorobj = data;
      Object.values(this.packconveyorobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.packconveyorarr.splice(this.packconveyorarr.lenght, 0, array[i]);
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
