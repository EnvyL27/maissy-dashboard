import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart';
import * as XLSX from 'xlsx';

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
  packGood: any = []
  Current_M01: any = []
  Current_M01B: any = []
  Current_M02: any = []
  Current_M03: any = []
  Current_M16: any = []
  Current_M17: any = []
  Current_M18: any = []
  Current_M19: any = []
  Current_M21: any = []
  Current_M22: any = []
  Current_M41: any = []
  Current_M104: any = []
  Current_M105: any = []
  Current_M106: any = []
  Current_M107: any = []
  Current_M108: any = []
  Current_M109: any = []
  Current_M110: any = []
  Current_M111: any = []
  Current_M112: any = []
  Current_M113: any = []
  Current_M114: any = []
  Current_M115: any = []
  Current_M116: any = []
  Current_M117: any = []
  Current_M118: any = []
  Current_M119: any = []
  Current_M119A: any = []
  Current_M119B: any = []
  Current_M120: any = []
  Current_M120A: any = []
  Current_M120B: any = []
  Current_M121: any = []
  Current_M122: any = []
  Current_M123: any = []
  Current_M124: any = []
  Current_M124A: any = []
  Current_M124B: any = []
  Current_M124C: any = []
  Current_M124D: any = []
  Current_M124E: any = []
  Current_M124F: any = []
  Current_M124G: any = []
  Current_M125: any = []
  Current_MG1: any = []
  Current_MG2: any = []

  public loaddata: any;
  showSuccessAlert: boolean = true;
  deskripsi: any = 'Loading..';
  closeSuccessAlert() {

  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  packingChart() {
    this.packing = {
      series: [this.packGood, 0, 0, 0],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Good', 'Satisfactory', 'Unsatisfactory', 'Unacceptable'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
  }

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    //////////////////////////////console.log(this.findingpending2);
    //////////////////console.log(this.findingpending2);


    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.cvpackobj);
    ws["!cols"] = [{ wch: 10 },
    { wch: 60 },
    { wch: 10 },
    { wch: 40 },
    { wch: 30 },
    { wch: 15 },
    { wch: 15 },
    { wch: 10 },
    { wch: 15 }];

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, 'a.xlsx');

  }

  async ngOnInit(): Promise<void> {

    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCvPack1().subscribe(data => {
        this.cvpackobj = data;
        ////////console.log(this.cvpackobj);
        this.cvpackobj.forEach((mappedData: any) => {
          this.Current_M01.push(mappedData.Current_M01);
          this.Current_M01B.push(mappedData.Current_M01B);
          this.Current_M02.push(mappedData.Current_M02);
          this.Current_M03.push(mappedData.Current_M03);
          this.Current_M16.push(mappedData.Current_M16);
          this.Current_M17.push(mappedData.Current_M17);
          this.Current_M18.push(mappedData.Current_M18);
          this.Current_M19.push(mappedData.Current_M19);
          this.Current_M21.push(mappedData.Current_M21);
          this.Current_M22.push(mappedData.Current_M22);
          this.Current_M41.push(mappedData.Current_M41);
          this.Current_M104.push(mappedData.Current_M104);
          this.Current_M105.push(mappedData.Current_M105);
          this.Current_M106.push(mappedData.Current_M106);
          this.Current_M107.push(mappedData.Current_M107);
          this.Current_M108.push(mappedData.Current_M108);
          this.Current_M109.push(mappedData.Current_M109);
          this.Current_M110.push(mappedData.Current_M110);
          this.Current_M111.push(mappedData.Current_M111);
          this.Current_M112.push(mappedData.Current_M112);
          this.Current_M113.push(mappedData.Current_M113);
          this.Current_M114.push(mappedData.Current_M114);
          this.Current_M115.push(mappedData.Current_M115);
          this.Current_M116.push(mappedData.Current_M116);
          this.Current_M117.push(mappedData.Current_M117);
          this.Current_M118.push(mappedData.Current_M118);
          this.Current_M119.push(mappedData.Current_M119);
          this.Current_M119A.push(mappedData.Current_M119A);
          this.Current_M119B.push(mappedData.Current_M119B);
          this.Current_M120.push(mappedData.Current_M120);
          this.Current_M120A.push(mappedData.Current_M120A);
          this.Current_M120B.push(mappedData.Current_M120B);
          this.Current_M121.push(mappedData.Current_M121);
          this.Current_M122.push(mappedData.Current_M122);
          this.Current_M123.push(mappedData.Current_M123);
          this.Current_M124.push(mappedData.Current_M124);
          this.Current_M124A.push(mappedData.Current_M124A);
          this.Current_M124B.push(mappedData.Current_M124B);
          this.Current_M124C.push(mappedData.Current_M124C);
          this.Current_M124D.push(mappedData.Current_M124D);
          this.Current_M124E.push(mappedData.Current_M124E);
          this.Current_M124F.push(mappedData.Current_M124F);
          this.Current_M124G.push(mappedData.Current_M124G);
          this.Current_M125.push(mappedData.Current_M125);
          this.Current_MG1.push(mappedData.Current_MG1);
          this.Current_MG2.push(mappedData.Current_MG2);

        });
        ////////console.log(this.Current_M01);

        // this.packingChart();
        this.spinner.hide();

      }
      );
    });
    //// ////////////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};