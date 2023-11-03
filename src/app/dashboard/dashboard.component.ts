import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;
  public resolved: boolean = false;

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
  Preventive: number = 0;
  showSuccessAlert : boolean = true;
  deskripsi: any = 'Loading..';
  closeSuccessAlert(){

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  
  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCountTotalFinding().subscribe(data => {
        console.log(data);
        
        this.totalkategori = data;
        Object.values(this.totalkategori).forEach(data => {
          // // ////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // ////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totalkategoriarr.length; i++) {
            if (this.totalkategoriarr[i].kategori === 'Setting') {
              this.Setting += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Replacement') {
              this.Replacement += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Improvement') {
              this.Improvement += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Preventive') {
              this.Preventive += 1;
            }
          }
          new Chart('donut', {
            type: 'doughnut',
            data: {
              labels: ["Setting", "Replacement", "Improvement", "Preventive"],
              datasets: [{
                label: 'Data',
                data: [this.Setting, this.Replacement, this.Improvement, this.Preventive],
                backgroundColor: [
                  '#316879',
                  '#f47a60',
                  '#7fe7dc',
                  '#ffc13b',
                ],
                borderColor: [
                  'white',
                  'white',
                  'white',
                  'white',
                ],
                borderWidth: 1
              }]
            },
          });
        })
      }
      );
      this.service.getCountTotalFinding().subscribe(data => {
        this.const = data;
        Object.values(this.const).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.const2.splice(this.const2.lenght, 0, array[i]);
          }
          for (let elem of this.const2) {
              if (elem.status2 == 'CLOSED' || elem.status2 == 'TECO') {
                this.finishexecute += 1;

              }
              else if (elem.status2 == 'READY') {
                this.readyexecute += 1;
              } else if (elem.status1 == 'Done' || elem.status1 == 'None') {
                if (elem.status2 == 'RELEASED' || elem.status2 == 'CREATED') {
                  this.pendingexecute += 1;
                }
              }
              else if (elem.status1 == 'Draft' || elem.status1 == 'Submit' || elem.status1 == 'Revise' || elem.status1 == 'Approved' || elem.status1 == 'Not Yet') {
                this.pendingexecute += 1;
            }
          }
          this.spinner.hide();
          this.resolved = true;

          

          new Chart('dum', {
            type: 'bar',
            data: {
              labels: ["Data %"],
              datasets: [
                {
                  label: 'On Progress WO',
                  data: [Math.round((this.pendingexecute / this.const2.length)*100)],
                  backgroundColor: [
                    '#f47a60'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Ready Execute',
                  data: [Math.round((this.readyexecute / this.const2.length)*100)],
                  backgroundColor: [
                    '#7fe7dc'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Finish Execute',
                  data: [Math.round((this.finishexecute / this.const2.length)*100)],
                  backgroundColor: [
                    '#316879'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
              ]
            }, options: {
              scales: {
                // x: {
                //   ticks: {
                //     display: true,
                //   },
                // },
                y: {
                  min: 0,
                  max: 100,
                  
                  ticks: {
                    display: true,
                    
                  },
                },
              },
            }
          });
        })


      }
      );
    });
    //// ////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
