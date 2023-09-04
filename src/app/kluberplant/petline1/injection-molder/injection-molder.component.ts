import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-injection-molder',
  templateUrl: './injection-molder.component.html',
  styleUrls: ['./injection-molder.component.css']
})
export class InjectionMolderComponent implements OnInit {
  public resolved: boolean = false;
  public showtable: boolean = false;
  inject: any;
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  injectobj: object = {};
  injectarr: any = [];
  detailarr: any = [];
  loaddata:any;
  gambar: any;
  deskripsi: any = 'Loading..';
  @ViewChild("target")
  target!: ElementRef;
  nameMachine: any = 'Husky Hypet 500 Injection Molder';
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
    window.open("assets/pdf/SM OCII-2.pdf", "_blank");
  }
  detaildata(id: any) {
    this.gambar = '';
    this.detailarr = [];
    for (let i = 0; i < this.injectarr.length; i++) {
      if (this.injectarr[i].id == id) {
        this.gambar = "http://192.168.9.47/kluber_lubrication/files/" + this.injectarr[i].image;
        this.detailarr.splice(this.detailarr.lenght, 0, this.injectarr[i]);

      }
    }


  }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.inject = this.service.getInject().subscribe(data => {
      this.injectobj = data;
      Object.values(this.injectobj).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.injectarr.splice(this.injectarr.lenght, 0, array[i]);
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
function scrollIntoView() {
  throw new Error('Function not implemented.');
}

