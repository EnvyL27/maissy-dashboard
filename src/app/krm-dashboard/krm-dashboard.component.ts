import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-krm-dashboard',
  templateUrl: './krm-dashboard.component.html',
  styleUrls: ['./krm-dashboard.component.css']
})
export class KrmDashboardComponent  implements OnInit {
  public resolved: boolean = false;

  public loaddata: any;
  searchtext : any;
  currentPage : number = 0
  krmData : any
  krmList : any[] = []
  deskripsi: any = 'Loading..';
  closeSuccessAlert(){

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0); 
    this.loaddata = new Promise(resolve => {
      this.service.getKrmData().subscribe(data => {
        this.krmData = data
        this.krmData.forEach((element : any) => {
            this.krmList.push(element)
        });
        console.log(this.krmList);
        
        this.spinner.hide()
        this.resolved = true
      }
      );
  
    });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

