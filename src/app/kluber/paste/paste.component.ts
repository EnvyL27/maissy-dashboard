import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from 'src/app/service/master/count.service';

@Component({
  selector: 'app-paste',
  templateUrl: './paste.component.html',
  styleUrls: ['./paste.component.css']
})
export class PasteComponent implements OnInit {

  src: any;
  public resolved: boolean = false;
  private pasteproduct: any;
  paste: object = {};
  pastelist: any = [];
  loaddata: any;
  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
    this.pasteproduct = this.service.getPasteProduct().subscribe(data => {
      this.paste = data;
      Object.values(this.paste).forEach(data => {
        // // //////////////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });

        // // //////////////////////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.pastelist.splice(this.pastelist.lenght, 0, array[i]);
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
