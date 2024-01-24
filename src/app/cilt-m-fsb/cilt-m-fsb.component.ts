import { Component, OnInit, ViewChild } from '@angular/core';
import { CountService } from '../service/master/count.service';
import * as moment from 'moment';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ChartOptions } from './chart';
import { forkJoin } from 'rxjs';
import { ChartOptions } from './chart';


@Component({
  selector: 'app-cilt-m-fsb',
  templateUrl: './cilt-m-fsb.component.html',
  styleUrls: ['./cilt-m-fsb.component.css']
})
export class CiltMFsbComponent {

  public chartOptions!: Partial<ChartOptions> | any;
  public chartDonus!: Partial<ChartOptions> | any;
  public chartPerBulan!: Partial<ChartOptions> | any;
  public chartResume!: Partial<ChartOptions> | any;

  constructor(private service: CountService, private spinner: NgxSpinnerService, private http: HttpClient) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';

  month: any = moment().format("MMMM");
  year: any = moment().format("YYYY");
  dataPengecekan: any[] = [];
  arrayPengecekan: any[] = [];
  dataMaxCycle: object | undefined;
  dataCycle: any = [];
  maxCycle: number = 0;
  totalPengecekan: number = 0;
  pendingPlan: number = 0;
  activePlan: number = 0;
  expiredPlan: number = 0;
  prep: number = 0;
  prepFinish: number = 0;
  ibf: number = 0;
  ibfFinish: number = 0;
  label: number = 0;
  labelFinish: number = 0;
  caser: number = 0;
  caserFinish: number = 0;
  curCycle: any = [];
  resPres1 : number = 0;
  resPres2 : number = 0;
  resPres3 : number = 0;
  resPres4 : number = 0;
  resFill1 : number = 0;
  resFill2 : number = 0;
  resFill3 : number = 0;
  resFill4 : number = 0;
  resBlow1 : number = 0;
  resBlow2 : number = 0;
  resBlow3 : number = 0;
  resBlow4 : number = 0;
  resInj1 : number = 0;
  resInj2 : number = 0;
  resInj3 : number = 0;
  resInj4 : number = 0;
  resLab1 : number = 0;
  resLab2 : number = 0;
  resLab3 : number = 0;
  resLab4 : number = 0;
  resCas1 : number = 0;
  resCas2 : number = 0;
  resCas3 : number = 0;
  resCas4 : number = 0;
  resOff1 : number = 0;
  resOff2 : number = 0;
  resOff3 : number = 0;
  resOff4 : number = 0;
  

  async ngOnInit(): Promise<void> {
    this.spinner.show();
    window.scrollTo(0, 0);
    this.loaddata = await this.loaddata;
    var count = 0;


    this.service.getCurrentCycle().subscribe(data => {
      this.dataMaxCycle = data
      ////////////////////////////console.log(this.dataMaxCycle);
      Object.values(this.dataMaxCycle).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });

        for (let i = 0; i < array.length; i++) {
          this.dataCycle.splice(this.dataCycle.lenght, 0, array[i]);
        }
        this.maxCycle = this.dataCycle[0]
        for(let i = 0; i < this.dataCycle.lenght; i++){
          
          if(this.dataCycle[i+1] > this.dataCycle[i]){
            this.maxCycle = this.dataCycle[i+1]
          }else{
            break
          }
        }       
        
      })

      this.loaddata = new Promise(resolve => {
        var a = setInterval(() => {
          count++;
          this.spinner.hide();
          this.resolved = true;
          if (count = 1) {
            clearInterval(a);
          }
        }, 100);
      });
 
    });

    this.service.getCiltFsb().subscribe(data => {
      
      this.dataPengecekan.push(data);
      // ////////////////////////////console.log(this.dataPengecekan);

      this.arrayPengecekan.push(...this.dataPengecekan[0]);
      this.totalPengecekan = this.arrayPengecekan.length
      for (let elem of this.arrayPengecekan) {

        if (elem.id_cycle == this.maxCycle && elem.result == null) {
          this.pendingPlan++
        } else if (elem.result != null) {
          this.activePlan++
        } else if (elem.id_cycle < this.maxCycle && elem.result == null) {
          this.expiredPlan++
        }
      }



        for(let elem of this.arrayPengecekan){
        ////////////////////////////console.log(this.month);
        
        
          
          if(elem.section == 'Injection' || elem.section == 'Preform Transfer'){
            ////////////////////////////console.log('masuk if');
            if(elem.id_cycle == this.dataCycle[0]){
              this.resInj1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resInj2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resInj3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resInj4++
            }
          }else if(elem.section == 'Preparation'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resPres1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resPres2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resPres3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resPres4++
            }
          }else if(elem.section == 'Blow'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resBlow1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resBlow2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resBlow3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resBlow4++
            }
          }else if(elem.section == 'Filling'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resFill1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resFill2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resFill3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resFill4++
            }
          }else if(elem.section == 'Packing' && elem.sub_section == 'Label'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resLab1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resLab2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resLab3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resLab4++
            }
          }else if(elem.section == 'Packing' && elem.sub_section == 'Packer'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resCas1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resCas2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resCas3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resCas4++
            }
          }else if(elem.section == 'Packing' && elem.sub_section == 'Offline'){
            if(elem.id_cycle == this.dataCycle[0]){
              this.resOff1++
            }else if(elem.id_cycle == this.dataCycle[1]){
              this.resOff2++
            }else if(elem.id_cycle == this.dataCycle[2]){
              this.resOff3++
            }else if(elem.id_cycle == this.dataCycle[3]){
              this.resOff4++
            }
          
          
          
        }
        ////////////////////////////console.log(this.resInj1);
        ////////////////////////////console.log(this.resInj2);
        ////////////////////////////console.log(this.resInj3);
        ////////////////////////////console.log(this.resInj4);
        
      }
      

      for (let elem of this.arrayPengecekan) {
        if (elem.sub_section == 'Preparation') {
          if (elem.result != null) {
            this.prepFinish++
          }
          this.prep++
        } else if (elem.sub_section == 'Injection' || elem.sub_section == 'Blow' || elem.sub_section == 'Filling') {
          if (elem.result != null) {
            this.ibfFinish++
          }
          this.ibf++
        } else if (elem.sub_section == 'Label') {
          if (elem.result != null) {
            this.labelFinish++
          }
          this.label++
        } else if (elem.sub_section == 'Caser') {
          if (elem.result != null) {
            this.caserFinish++
          }
          this.caser++
        }
      }
      if(this.prepFinish != 0 || this.prep != 0){
        this.prepFinish = (this.prepFinish / this.prep * 100)
      }else if(this.ibf != 0 || this.ibfFinish != 0){
        this.ibfFinish = (this.ibfFinish / this.ibf * 100)
      }else if(this.label != 0 || this.labelFinish != 0){
        this.labelFinish = (this.labelFinish / this.label * 100)
      }else if(this.caser != 0 || this.caserFinish != 0){
        this.caserFinish = (this.caserFinish / this.caser * 100)
      }
      // ////////////////////////////console.log(this.ibfFinish);
      
      // for(let i = 0; this.arrayPengecekan.length; i++){
      //   this.totalPengecekan++
      // }

      // Handle the data here

      this.chartOptionss();
      this.chartdonuss();
      this.chartRes();
    });

    this.loaddata = await this.loaddata;
  }

  chartRes(){
    ////////////////////////////console.log();
    
    this.chartResume = {
      series: [
        {
          name: "Cycle " + this.dataCycle[3],
          data: [this.resPres4, this.resFill4, this.resBlow4, this.resInj4, this.resLab4, this.resCas4, this.resOff4]
        },
        {
          name: "Cycle " + this.dataCycle[2],
          data: [this.resPres3, this.resFill3, this.resBlow3, this.resInj3, this.resLab3, this.resCas3, this.resOff3]
        },
        {
          name: "Cycle " + this.dataCycle[1],
          data: [this.resPres2, this.resFill2, this.resBlow2, this.resInj2, this.resLab2, this.resCas2, this.resOff2]
        },
        {
          name: "Cycle " + this.dataCycle[0],
          data: [this.resPres1, this.resFill1, this.resBlow1, this.resInj1, this.resLab1, this.resCas1, this.resOff1]
        }
      ],
      chart: {
        type: "bar",
        height: 600,
       
      },
      colors:['#F5F0BB', '#C4DFAA', '#90C8AC', '#73A9AD'],
      plotOptions: {
        bar: {
          borderRadiusApplication: 'last',
          dataLabels: {
            position: 'top', // This places the data labels on top of the bars
          },
          borderRadius: 20,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Preparation",
          "Filling",
          "Blow",
          "Injection",
          "Label",
          "Packer",
          "Offline"
        ]
      },
      responsive: [{
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              borderRadiusApplication: 'last',
              dataLabels: {
                position: 'top', // This places the data labels on top of the bars
              },
              borderRadius: 0,
            }
          },
        },
    }],
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
    };
  }

  chartBulan(){
    this.chartPerBulan = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26]
        }
      ],
      chart: {
        type: "bar",
        height: 600
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2020",
          "2021",
          "2022",
          "2023",
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
    };
  }

  async chartOptionss(){
          this.chartOptions = {
        series: [
          {
            name: "basic",
            data: [this.prepFinish.toFixed(2), this.ibfFinish.toFixed(2), this.labelFinish.toFixed(2), this.caserFinish.toFixed(2)]
          }
        ],
        chart: {
          type: "bar",
          height: 350
        },
        colors:['#FD8A8A', '#F1F7B5', '#A8D1D1', '#9EA1D4'],
        plotOptions: {
          bar: {
            borderRadiusApplication: 'last',
            horizontal: true,
            dataLabels: {
              position: 'top', // This places the data labels on top of the bars
            },
            borderRadius: 10,
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val:any) {
            return val + '%'
        },
        textAnchor: 'middle',
        offsetX: -30,
        },
        
        xaxis: {
          categories: [
            "Preparation",
            "IBF",
            "Label Area",
            "Caser Area"
          ],
          labels: {
            formatter: function (val:any) {
              return val + '%'
          },
        },
        
          max: 100,
        }
  
      }
  }

  chartdonuss(){
    this.chartDonus = {
      series: [(this.activePlan ? ((this.activePlan * 100 / (this.totalPengecekan)).toFixed(2)) : '0')],
      labels: [["Progress CILT", 'FSB']],
      chart: {
        height: 385,
        type: "radialBar"
      },
      colors : '#AEE2FF',
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "60%",
            background: "#fff",
            image: undefined,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
        dataLabels: {
          name: {
            show: true,
            fontSize: '16px',
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10
          },
          value: {
            show: true,
            fontSize: '14px',
            fontFamily: undefined,
            fontWeight: 400,
            color: undefined,
            offsetY: 16,
          },
        },
        borderRadius: 10,
        }
      },
      
    };
  }


}



