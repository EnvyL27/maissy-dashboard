import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-bottle-shower',
  templateUrl: './bottle-shower.component.html',
  styleUrls: ['./bottle-shower.component.css']
})
export class BottleShowerComponent implements OnInit {
  public resolved: boolean = false;
  public showtable: boolean = false;
  bottle: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  bottleobj: object = {};
  bottlearr: any = [];
  detailarr: any = [];
  loaddata: any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Sidel SBO 20 Bottle Blower';
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
    window.open("assets/pdf/Sidel Botle Blower.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.bottlearr.length; i++) {
      if (this.bottlearr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.bottlearr[i].images;
        this.detailarr.splice(this.detailarr.lenght, 0, this.bottlearr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.bottle = this.service.getBottle().subscribe(data => {
        this.bottleobj = data;
        Object.values(this.bottleobj).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.bottlearr.splice(this.bottlearr.lenght, 0, array[i]);
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
