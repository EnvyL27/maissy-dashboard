import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-container-conveyor-off',
  templateUrl: './container-conveyor-off.component.html',
  styleUrls: ['./container-conveyor-off.component.css']
})
export class ContainerConveyorOffComponent implements OnInit {

  public resolved: boolean = false;
  public showtable: boolean = false;
  containeroff: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  containeroffobj: object = {};
  containeroffarr: any = [];
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
    this.detailarr = [];
    for (let i = 0; i < this.containeroffarr.length; i++) {
      if (this.containeroffarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.containeroffarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.containeroffarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.containeroff = this.service.getContainerOff().subscribe(data => {
      this.containeroffobj = data;
      Object.values(this.containeroffobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.containeroffarr.splice(this.containeroffarr.lenght, 0, array[i]);
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
