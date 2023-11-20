import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-oil',
  templateUrl: './oil.component.html',
  styleUrls: ['./oil.component.css']
})
export class OilComponent implements OnInit {
  src: any;
  public resolved: boolean = false;
  private oilproduct: any;
  oil: object = {};
  oilist: any = [];
  loaddata: any;
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.oilproduct = this.service.getOilProduct().subscribe(data => {
      this.oil = data;
      Object.values(this.oil).forEach(data => {
        // // ////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });

        // // ////////////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.oilist.splice(this.oilist.lenght, 0, array[i]);
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
  getpdf(link: any) {
    window.open("http://192.168.9.47/kluber_lubrication/files/" + link, "_blank");
  }

}
