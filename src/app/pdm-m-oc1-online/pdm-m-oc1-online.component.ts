import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart';

@Component({
  selector: 'app-pdm-m-oc1-online',
  templateUrl: './pdm-m-oc1-online.component.html',
  styleUrls: ['./pdm-m-oc1-online.component.css']
})
export class PdmMOc1OnlineComponent implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;
  public packing!: Partial<ChartOptions> | any;
  public resolved: boolean = false;

  cvpackobj: any;
  Current_M01 : number = 0
  Current_M01B : number = 0
  Current_M02 : number = 0
  Current_M03 : number = 0
  Current_M16 : number = 0
  Current_M17 : number = 0
  Current_M18 : number = 0
  Current_M19 : number = 0
  Current_M21 : number = 0
  Current_M22 : number = 0
  Current_M41 : number = 0
  Current_M104 : number = 0
  Current_M105 : number = 0
  Current_M106 : number = 0
  Current_M107 : number = 0
  Current_M108 : number = 0
  Current_M109 : number = 0
  Current_M110 : number = 0
  Current_M111 : number = 0
  Current_M112 : number = 0
  Current_M113 : number = 0
  Current_M114 : number = 0
  Current_M115 : number = 0
  Current_M116 : number = 0
  Current_M117 : number = 0
  Current_M118 : number = 0
  Current_M119 : number = 0
  Current_M119A : number = 0
  Current_M119B : number = 0
  Current_M120 : number = 0
  Current_M120A : number = 0
  Current_M120B : number = 0
  Current_M121 : number = 0
  Current_M122 : number = 0
  Current_M123 : number = 0
  Current_M124 : number = 0
  Current_M124A : number = 0
  Current_M124B : number = 0
  Current_M124C : number = 0
  Current_M124D : number = 0
  Current_M124E : number = 0
  Current_M124F : number = 0
  Current_M124G : number = 0
  Current_M125 : number = 0
  Current_MG1 : number = 0
  Current_MG2 : number = 0

  public loaddata: any;
  showSuccessAlert: boolean = true;
  deskripsi: any = 'Loading..';
  closeSuccessAlert() {

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  packings() {
    this.packing = {
      series: [],
      labels: [["Progress CILT", 'OCI 1']],
      chart: {
        height: 385,
        type: "radialBar"
      },
      colors: '#AEE2FF',
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

  async ngOnInit(): Promise<void> {
    this.packings();
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCvPack1().subscribe(data => {
        console.log(data);

        this.cvpackobj = data;
        this.spinner.hide();

      }
      );
    });
    //// ////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
