import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.css'],
  animations: [
    trigger('contentAnimation', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })), // Slide from top to bottom
      state('hidden', style({ opacity: 0, transform: 'translateY(-120%)' })), // Slide to the top
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
    trigger('componentBeneathAnimation', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 1, transform: 'translateY(-220%)' })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class LimitComponent implements OnInit {
  public resolved: boolean = false;

  isContentVisible = false;
  isComponentBeneathVisible = false;
  tableName!: string;
  satisLimit : number = 0;
  unsatisLimit : number = 0;
  unacceptLimit : number = 0;
  const: object = {};
  const2: any = [];
  currentDate = new Date();
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  public loaddata: any;
  donut: any = [];
  coba: any = [];
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  showSuccessAlert: boolean = true;
  deskripsi: any = 'Loading..';
  closeSuccessAlert() {

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible; this.isComponentBeneathVisible = !this.isComponentBeneathVisible;
  }


  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getNodeRedTable().subscribe(data => {
        console.log(data);
        this.totalkategori = data;

        Object.values(this.totalkategori).forEach(data => {
          // // //////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          console.log(this.totalkategoriarr);

          // // //////////////////////console.log(this.findingpending2);
        })

        this.spinner.hide()
      });
    })

    this.service.postValueLimit(this.tableName, this.satisLimit, this.unsatisLimit, this.unacceptLimit).subscribe(data => {

    })
    //// ////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

