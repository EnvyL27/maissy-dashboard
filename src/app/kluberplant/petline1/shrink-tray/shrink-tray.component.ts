import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-shrink-tray',
  templateUrl: './shrink-tray.component.html',
  styleUrls: ['./shrink-tray.component.css']
})
export class ShrinkTrayComponent implements OnInit {


  public resolved: boolean = false;
  public showtable: boolean = false;
  shrinktray: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  shrinktrayobj: object = {};
  shrinktrayarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Krones Packer';
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
    window.open("assets/pdf/Operating Manual kr96k86_bd_ba(kroness).pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.shrinktrayarr.length; i++) {
      if (this.shrinktrayarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.shrinktrayarr[i].images;
        this.detailarr.splice(this.detailarr.lenght, 0, this.shrinktrayarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.shrinktray = this.service.getShrinkTray().subscribe(data => {
      this.shrinktrayobj = data;
      Object.values(this.shrinktrayobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.shrinktrayarr.splice(this.shrinktrayarr.lenght, 0, array[i]);
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
