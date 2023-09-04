import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-pallet-conveyor',
  templateUrl: './pallet-conveyor.component.html',
  styleUrls: ['./pallet-conveyor.component.css']
})
export class PalletConveyorComponent implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  palletconveyor: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  palletconveyorobj: object = {};
  palletconveyorarr: any = [];
  detailarr: any = [];
  loaddata:any;
  @ViewChild("target")
  target!: ElementRef;
  gambar: any;
  deskripsi: any = 'Loading..';
  nameMachine: any = 'Pallet Conveyors';
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
    for (let i = 0; i < this.palletconveyorarr.length; i++) {
      if (this.palletconveyorarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.palletconveyorarr[i].images;
        this.detailarr.splice(this.detailarr.lenght, 0, this.palletconveyorarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.palletconveyor = this.service.getPalletConveyor().subscribe(data => {
      this.palletconveyorobj = data;
      Object.values(this.palletconveyorobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.palletconveyorarr.splice(this.palletconveyorarr.lenght, 0, array[i]);
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
