import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart'
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pr-m-oci1',
  templateUrl: './pr-m-oci1.component.html',
  styleUrls: ['./pr-m-oci1.component.css']
})
export class PrMOci1Component implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;
  public resolved: boolean = false;

  const: object = {};
  const2: any = [];
  currentDate = new Date();
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalvendr1: object = {};
  totalvend2: object = {};
  totalkategoriarr: any = [];
  public loaddata: any;
  donut: any = [];
  coba: any = [];
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  Preventive: number = 0;
  totalReq: number = 0;
  totalReqNoNum: number = 0;
  totalReqNum: number = 0;
  totalv1: number = 0;
  totalv2: number = 0;
  showSuccessAlert: boolean = true;
  deskripsi: any = 'Loading..';
  closeSuccessAlert() {

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCountTotalFinding().subscribe(data => {
        ////////////////console.log(data);

        // this.totalkategori = data;
        Object.values(this.totalkategori).forEach(data => {
          // // ////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // ////////////////////////////console.log(array);
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
        // this.const = data;
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
                  data: [Math.round((this.pendingexecute / this.const2.length) * 100)],
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
                  data: [Math.round((this.readyexecute / this.const2.length) * 100)],
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
                  data: [Math.round((this.finishexecute / this.const2.length) * 100)],
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
       
      forkJoin([
        this.service.getTotalRequest(),
        this.service.getTotalNumber(),
        this.service.getTotalVendor1(),
        this.service.getTotalVendor2(),
      ]).subscribe(([dataReq, dataNum, dataV1, dataV2]) => {
        //////console.log(dataReq);
        //////console.log(dataNum);
        //////console.log(dataV1);
        //////console.log(dataV2);
        this.totalkategori = dataReq
        this.const = dataNum
        this.totalvendr1 = dataV1
        this.totalvend2 = dataV2
        Object.values(this.totalkategori).forEach(data => {
          ////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          array.forEach(element => {
            this.totalReq++
          });
          ////////console.log(this.totalReq);

        })
        Object.values(this.const).forEach(data => {
          ////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          array.forEach(element => {
            this.totalReqNum++
          });
          ////////console.log(this.totalReqNum);
        })

        Object.values(this.totalvendr1).forEach(data => {
          ////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          array.forEach(element => {
            this.totalv1++
          });
          ////////console.log(this.totalv1);
          
      })
        Object.values(this.totalvend2).forEach(data => {
          ////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          array.forEach(element => {
            this.totalv2++
          });
          ////////console.log(this.totalv2);
          
      })

        this.totalReqNoNum = this.totalReq - this.totalReqNum
        new Chart('dum', {
          type: 'bar',
          data: {
            labels: ["Total Request"],
            datasets: [
              {
                label: 'Total Request',
                data: [this.totalReq],
                backgroundColor: [
                  '#4ECDC4'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'PR Number',
                data: [this.totalReqNum],
                backgroundColor: [
                  '#FF6B6B'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
            ]
          },
        });

        new Chart('vendor', {
          type: 'bar',
          data: {
            labels: ["Total Request"],
            datasets: [
              {
                label: 'Total Request',
                data: [this.totalReq],
                backgroundColor: [
                  '#4ECDC4'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Vendor 1',
                data: [this.totalv1],
                backgroundColor: [
                  '#FF6B6B'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Vendor 2',
                data: [this.totalv2],
                backgroundColor: [
                  '#FFE66D'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
            ]
          },
        });
        this.spinner.hide();
        this.resolved = true;

      });

    });
    //// ////////////////////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
