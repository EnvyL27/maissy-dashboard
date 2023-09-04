import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-pack-conveyor-off',
  templateUrl: './pack-conveyor-off.component.html',
  styleUrls: ['./pack-conveyor-off.component.css']
})
export class PackConveyorOffComponent implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  packconveyoroff: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  packconveyoroffobj: object = {};
  packconveyoroffarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  @ViewChild("target")
  target!: ElementRef;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Container Conveyors';
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
    for (let i = 0; i < this.packconveyoroffarr.length; i++) {
      if (this.packconveyoroffarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.packconveyoroffarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.packconveyoroffarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.packconveyoroff = this.service.getPackConveyorOff().subscribe(data => {
      this.packconveyoroffobj = data;
      Object.values(this.packconveyoroffobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.packconveyoroffarr.splice(this.packconveyoroffarr.lenght, 0, array[i]);
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
