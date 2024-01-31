import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../service/master/count.service';
import { TableUtil } from "../service/tabelUtil";
import { NgxCaptureService } from 'ngx-capture';
import { tap } from 'rxjs';
import * as moment from 'moment';
import { ChartOptions } from './chart';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-pdm-m-oci2',
  templateUrl: './pdm-m-oci2.component.html',
  styleUrls: ['./pdm-m-oci2.component.css'],
  providers: [
    DatePipe,
  ]
})
export class PdmMOci2Component implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;
  public dailytotal!: Partial<ChartOptions> | any;
  public monthlytotal!: Partial<ChartOptions> | any;
  current: any = moment().format("YYYY-MM-30");
  month: any = moment().format("YYYY-MM");
  currentChange: any = moment().format("YYYY-MM-30");
  currentDate = new Date();
  newTanggal: any = new Date();
  bulan: any;
  tahun: any;
  finishmonth: any;
  monthArray: any = [];
  yearArray: any = [];
  totaldatayear: any;
  constructor(private service: CountService, private spinner: NgxSpinnerService, private captureService: NgxCaptureService, private cdr: ChangeDetectorRef, private datePipe: DatePipe) { this.newTanggal = this.datePipe.transform(this.newTanggal, 'yyyy-MM-dd'); }

  temuanperday_data_temp: any = [];
  temuanperday_label: any = [];
  temuanperday_data: any = [];
  temuanperday_dum: number = 0;
  boolprep: Boolean = false;
  boolinj: Boolean = false;
  boolblow: Boolean = false;
  boolfill: Boolean = false;
  boolpack: Boolean = false;
  boolkanesho: Boolean = false;
  boolstu1: Boolean = false;
  boolprepnull: Boolean = false;
  boolinjnull: Boolean = false;
  boolblownull: Boolean = false;
  boolfillnull: Boolean = false;
  boolpacknull: Boolean = false;
  boolkaneshonull: Boolean = false;
  boolstu1null: Boolean = false;
  dailytotalchart : boolean = false;
  monthlytotalchart : boolean = true;
  each : boolean = true;
  combine : boolean = false;

  monthlyChartClick(){
    this.each = true
    this.combine = false
    this.monthlytotalchart = !this.monthlytotalchart
    this.dailytotalchart = false
  }

  dailyChartClick(){
    this.each = true
    this.combine = false
    this.dailytotalchart = !this.dailytotalchart
    this.monthlytotalchart = false
  }

  combineChart(){
    this.each = false
    this.combine = true
    this.monthlytotalchart = false
    this.dailytotalchart = false
  }

  changeprep() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprep = !this.boolprep;
    this.cdr.detectChanges();
  }
  changeinj() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolinj = !this.boolinj;
    this.cdr.detectChanges();
  }
  changeblow() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolinj = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolblow = !this.boolblow;
    this.cdr.detectChanges();
  }
  changefill() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolinj = this.boolblow = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolfill = !this.boolfill;
    this.cdr.detectChanges();
  }
  changepack() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolkanesho = this.boolstu1 = false;
    this.boolpack = !this.boolpack;
    this.cdr.detectChanges();
  }
  changekanesho() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolstu1 = false;
    this.boolkanesho = !this.boolkanesho;
    this.cdr.detectChanges();
  }
  changestu() {
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = false;
    this.boolstu1 = !this.boolstu1;
    this.cdr.detectChanges();
  }

  changeprepnull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolprepnull = !this.boolprepnull;
    this.cdr.detectChanges();
  }
  changeinjnull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolinjnull = !this.boolinjnull;
    this.cdr.detectChanges();
  }
  changeblownull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolinjnull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolblownull = !this.boolblownull;
    this.cdr.detectChanges();
  }
  changefillnull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolpacknull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolfillnull = !this.boolfillnull;
    this.cdr.detectChanges();
  }
  changepacknull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolkaneshonull = this.boolstu1null = false;
    this.boolpacknull = !this.boolpacknull;
    this.cdr.detectChanges();
  }
  changekaneshonull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolstu1null = false;
    this.boolkaneshonull = !this.boolkaneshonull;
    this.cdr.detectChanges();
  }
  changestunull() {
    this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
    this.boolprepnull = this.boolinjnull = this.boolblownull = this.boolfillnull = this.boolpacknull = this.boolkaneshonull = false;
    this.boolstu1null = !this.boolstu1null;
    this.cdr.detectChanges();
  }

  removeDuplicatesFromArray(inputArray: any[]): any[] {
    return Array.from(new Set(inputArray));
  }

  totaldataChange() {
    this.temuanperday_data_temp = []
    this.temuanperday_label = []
    this.temuanperday_data = []
    var bulanPilih: any;
    if (this.currentChange == '2023-01') {
      bulanPilih = 1;
    } else if (this.currentChange == '2023-02') {
      bulanPilih = 2;
    } else if (this.currentChange == '2023-03') {
      bulanPilih = 3;
    } else if (this.currentChange == '2023-04') {
      bulanPilih = 4;
    } else if (this.currentChange == '2023-05') {
      bulanPilih = 5;
    } else if (this.currentChange == '2023-06') {
      bulanPilih = 6;
    } else if (this.currentChange == '2023-07') {
      bulanPilih = 7;
    } else if (this.currentChange == '2023-08') {
      bulanPilih = 8;
    } else if (this.currentChange == '2023-09') {
      bulanPilih = 9;
    } else if (this.currentChange == '2023-10') {
      bulanPilih = 10;
    } else if (this.currentChange == '2023-11') {
      bulanPilih = 11;
    } else if (this.currentChange == '2023-12') {
      bulanPilih = 12;
    }
    // ////////////////console.log(bulanPilih);

    this.januari = this.febuari = this.maret = this.april = this.mei = this.juni = this.juli = this.agustus = this.september = this.oktober = this.november = this.desember = 0
    this.valuemonthlist = []
    this.valuemonth = []
    var date : any = [];
    this.service.getOci2Valuemonth(this.current).subscribe(data => {
      // //////////////////console.log(this.currentChange);
      // ////////////////console.log('sini');
      
      ////////////////////console.log(data);

      this.valuemonth = data;
      Object.values(this.valuemonth).forEach(data => {
        // // //////////////////////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });

        // // //////////////////////////////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.valuemonthlist.splice(this.valuemonthlist.lenght, 0, array[i]);
        }
        //////////////////console.log(this.valuemonthlist);

        this.valuemonthlist.forEach((elem: any, i: number) => {
          if (elem.do_date != this.valuemonthlist[i + 1]?.do_date) {
            date.push(elem.do_date)
            // ////////////////console.log(date);
          }
        });

        for (let elem of this.valuemonthlist) {
          //////////////////console.log('ha');

          //////////////////console.log(elem);

          if (elem.month == 1 && elem.month <= bulanPilih) {
            this.januari += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 2 && elem.month <= bulanPilih) {
            this.febuari += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 3 && elem.month <= bulanPilih) {
            this.maret += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 4 && elem.month <= bulanPilih) {
            this.april += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 5 && elem.month <= bulanPilih) {
            this.mei += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 6 && elem.month <= bulanPilih) {
            this.juni += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 7 && elem.month <= bulanPilih) {
            this.juli += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 8 && elem.month <= bulanPilih) {
            this.agustus += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 9 && elem.month <= bulanPilih) {
            this.september += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 10 && elem.month <= bulanPilih) {
            this.oktober += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 11 && elem.month <= bulanPilih) {
            this.november += 1;
            this.temuanperday_data_temp.push(elem)
          } else if (elem.month == 12 && elem.month <= bulanPilih) {
            this.desember += 1;
            this.temuanperday_data_temp.push(elem)
          }
        }
        
        var dummytemuan: any = []
        date.forEach((element: any) => {
          
          this.temuanperday_data_temp.forEach((elem: any) => {
            // ////////////////console.log(elem.bulan);
            // ////////////////console.log(this.month);


            if (elem.bulan == this.currentChange) {
              if (elem.do_date == element) {
                this.temuanperday_dum++
                dummytemuan.push(elem)
              }
            }
          });
        });
        ////////////////console.log(dummytemuan);
        
        dummytemuan.forEach((element: any) => {
          this.temuanperday_label.push(element.do_date)
        });
        const uniqueLabel = this.removeDuplicatesFromArray(this.temuanperday_label)
        ////////////////console.log(this.temuanperday_label);
        
        this.temuanperday_label = []
        this.temuanperday_label = uniqueLabel

        ////////////////console.log(uniqueLabel);
        var dataTotal: number = 0
        for (let j = 0; j < uniqueLabel.length; j++) {
          for (let i = 0; i < this.temuanperday_data_temp.length; i++) {

            if (uniqueLabel[j] === this.temuanperday_data_temp[i].do_date) {
              ////////////////console.log(this.temuanperday_data_temp[i]);
              // ////////////////console.log('aha');
              dataTotal++
            }

          }
          // ////////////////console.log(this.temuanperday_data_temp[i].do_date);
          ////////////////console.log(uniqueLabel);
          // ////////////////console.log(dataTotal);
          this.temuanperday_data.push(dataTotal)
          dataTotal = 0
        };

        // ////////////////console.log(this.totalasset);

        this.totaldatayear.destroy();

        this.dailyChart();
        this.monthlyChart();

        this.totaldatayear = new Chart("valuepermonthchart", {
          type: "bar",
          data: {
            labels: ["January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
              {
                "label": "Total Data OCI1 Data %",
                "data": [Math.round(this.januari * 100 / (this.totalasset / 2)), Math.round(this.febuari * 100 / (this.totalasset / 2)), Math.round(this.maret * 100 / (this.totalasset / 2)), Math.round(this.april * 100 / (this.totalasset / 2)), Math.round(this.mei * 100 / (this.totalasset / 2)), Math.round(this.juni * 100 / (this.totalasset / 2)), Math.round(this.juli * 100 / (this.totalasset / 2)), Math.round(this.agustus * 100 / (this.totalasset / 2)), Math.round(this.september * 100 / (this.totalasset / 2)), Math.round(this.oktober * 100 / (this.totalasset / 2)), Math.round(this.november * 100 / (this.totalasset / 2)), Math.round(this.desember * 100 / (this.totalasset / 2))],
                "backgroundColor": "#34568B"
              },
            ]

          },
          options: {
            // scales: {
            //   yAxes: {
            //     min: 0,
            //     ticks: {

            //       callback: function (value) { return value + "%" },
            //       //beginAtZero: true
            //     },
            //     // scaleLabel: {
            //     //   display: true,
            //     //   labelString: "Percentage"
            //     // }
            //   }
            // }
          }
        });
      })

    }
    );
  }

  changeDate() {
    this.totalfinishtoday2 = [];
    // ////////////////////console.log(this.tgl1);

    this.service.getReadHistoryCheckoci2(this.tgl2, this.tgl3).subscribe(data => {
      //////////////////console.log(this.tgl2 + '  ' + this.tgl3);

      //////////////////console.log(data);
      this.totalfinishtoday = data;

      Object.values(this.totalfinishtoday).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          // this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
          this.totalfinishtoday2down.splice(this.totalfinishtoday2down.lenght, 0, array[i]);
        }
        // this.spinner.hide();
        this.resolved = true;
      })
    })

    this.service.getReadFinishTodayoci2(this.tgl1).subscribe(data => {

      this.totalfinishtoday = data;
      // ////////////////////console.log(data);

      Object.values(this.totalfinishtoday).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
        }
        this.resolved = true;
      })
    }
    );
  }

  
  deviceName : any

  changeDeviceName($event : any) {
    
  if($event == ''){
    
    this.changeDate();
  }
    this.totalfinishtoday2 = [];
    const trim = $event.trim()

    this.service.getReadFinishTodayoci1ByName(trim).subscribe(data => {

      this.totalfinishtoday = data;

      Object.values(this.totalfinishtoday).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
          this.totalfinishtoday2down.splice(this.totalfinishtoday2down.lenght, 0, array[i]);
        }
        // this.spinner.hide();
        this.resolved = true;
      })

    }
    );
  }



  public resolved: boolean = false;
  public exportdata: boolean = false;
  public paginatereset: boolean = false;
  public paginateresetSatis: boolean = false;
  // @ViewChild('screen', { static: true }) screen: any;
  good: number = 0;
  satis: number = 0;
  unsatisf: number = 0;
  good2: number = 0;
  satis2: number = 0;
  unsatisf2: number = 0;
  unacc2: number = 0;
  itemsPerPage: number = 0;
  searchText: any;
  searchDate: any = moment().format("YYYY-MM-DD");
  tgl1: any = moment().format("YYYY-MM-DD");
  tgl2: any = moment().format("YYYY-MM-01");
  tgl3: any = moment().format("YYYY-MM-DD");
  searchDate1: any;
  searchDate2: any;
  searchText2: any;
  searchText3: any;
  currentPage: number = 1;
  currentPageSatis: number = 0;
  public img = "";
  imgBase64 = '';
  @ViewChild("ss")
  taptap!: ElementRef;
  @ViewChild("target")
  target!: ElementRef;
  @ViewChild('screen', { static: true }) screen: any;
  capture() {
    this.captureService
      .getImage(this.taptap.nativeElement, true)
      .subscribe((img: any) => {
        this.imgBase64 = img;
        //////////////////////////////console.log(this.imgBase64);
        this.downloadJson();
      });
  }
  saveImage(img: string) {
    this.img = img;
  }

  downloadJson() {
    var element = document.createElement('a');
    element.setAttribute('href', this.imgBase64);
    element.setAttribute('download', 'reportingdaily.png');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  DataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
  }
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  itemsPerPage2: number = 0;
  currentPage2: number = 1;
  absoluteIndex2(indexOnPage: number): number {
    return this.itemsPerPage2 * (this.currentPage2 - 1) + indexOnPage;
  }
  itemsPerPage3: number = 0;
  currentPage3: number = 1;
  absoluteIndex3(indexOnPage: number): number {
    return this.itemsPerPage3 * (this.currentPage3 - 1) + indexOnPage;
  }
  itemsPerPageSatis2: number = 0;
  currentPageSatis2: number = 1;
  absoluteIndexSatis2(indexOnPage: number): number {
    return this.itemsPerPage3 * (this.currentPage3 - 1) + indexOnPage;
  }
  itemsPerPageSatis3: number = 0;
  currentPageSatis3: number = 1;
  absoluteIndexSatis3(indexOnPage: number): number {
    return this.itemsPerPage3 * (this.currentPage3 - 1) + indexOnPage;
  }

  unacc: number = 0;
  coba: any;
  donut: any = [];
  coba2: any;
  coba3: any;
  asset: object = {};
  asset2: any = [];
  totalasset: any;
  finish: object = {};
  finish2: any = [];
  totalfinish: any;
  goodsatis: object = {};
  goodsatis2: any = [];
  subbarlistobj: object = {};
  subbarlistarr: any = [];
  totalgoodsatis: any;
  unsatis: object = {};
  unsatis2: any = [];
  totalunsatis: any;
  totalfinishtoday: object = {};
  totalfinishtdy: object = {};
  totalfinishresult: any = {};
  totalfinishtdy2: any = [];
  totalfinishtoday2: any = [];
  totalfinishtoday2down: any = [];
  abnormal: object = {};
  listofsatisfactory: any = [];
  listofgood: any = [];
  totalabnormal: any = [];
  totalabnormallist: any = [];
  vibration: object = {};
  totalvibrationlist: any = [];
  totalvibrationdate: any = [];
  ampere: object = {};
  totalamperelist: any = [];
  totalamperedate: any = [];
  temperature: object = {};
  totaltemperaturelist: any = [];
  totaltemperaturedate: any = [];
  headertitle: any = [];
  devicename: any = [];
  statusdevice: any = [];
  public loaddata: any;
  uniqueChars: any;
  uniqueChars2: any;
  uniqueChars3: any;
  deskripsi: any = 'Loading..';
  funloc: any;
  funlocabnormaldate: any;
  funloclist: any = [];
  temperaturelist: any = [];
  temperaturedate: any = [];
  vibrationlist: any = [];
  vibrationdate: any = [];
  amperelist: any = [];
  amperedate: any = [];
  showPaginate: number = 5;
  showPaginate2: number = 5;
  showPaginateSatis: number = 5;
  showPaginateSatis2: number = 5;
  showPaginateSatis3: number = 5;
  showPaginate3: number = 5;
  abnormalasset: object = {};
  abnormalassetlist: any = [];
  ampereR: any = [];
  ampereS: any = [];
  ampereT: any = [];
  ampereFreq: any = [];
  ampereDate: any = [];
  vibration2H: any = [];
  vibrationCF: any = [];
  vibration3H: any = [];
  vibration3CF: any = [];
  vibrationDate: any = [];
  temperatureThermal: any = [];
  temperatureDate: any = [];
  @ViewChild("printsection")
  myNameElem!: ElementRef;
  notepdm: object = {};
  notepdmlist: any = [];
  finishnot: object = {};
  pdmasset: object = {};
  pdmassetlist: any = [];
  finishnotlist: any = [];
  valuemonth: object = {};
  valuemonthlist: any = [];
  picture: any;
  note: any;
  pdmchartfinishnot: any;
  valuepermonthchart: any;
  filterMetadata = { count: 0 };
  filtre: any;
  preparation: number = 0;
  preparationnull: number = 0;
  injection: number = 0;
  injectionnnull: number = 0;
  blow: number = 0;
  blownull: number = 0;
  fill: number = 0;
  fillnull: number = 0;
  pack: number = 0;
  packnull: number = 0;
  pf: number = 0;
  pfnull: number = 0;
  stu: number = 0;
  stunull: number = 0;
  januari: number = 0;
  febuari: number = 0;
  maret: number = 0;
  april: number = 0;
  mei: number = 0;
  juni: number = 0;
  juli: number = 0;
  agustus: number = 0;
  september: number = 0;
  oktober: number = 0;
  november: number = 0;
  desember: number = 0;
  subbar: any;
  listoftotalasset: boolean = false;
  listoftotalsatisfactory: boolean = false;
  listoftotalgood: boolean = false;
  chartofabnormatasset: boolean = true;
  listofabnormatasset: boolean = false;
  finishnotyet: boolean = false;
  totaldatacurrentyear: boolean = false;
  forcapture: boolean = false;
  selectorarrabnormal: any = [];
  isNumber(value: any) {
    return Number.isNaN(value);
  }
  public toFloat(value: string): number {
    return parseFloat(value);
  }
  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }
  date(masukandate: HTMLInputElement) {
    ////////////////////////////////////console.log(moment(masukandate.value).format("DD-MM-YYYY"));
    this.currentPage = 1;
    this.searchDate = masukandate.value;
  }
  generatePaginate() {
    this.showPaginate = this.totalfinishtoday2.length;
    this.showPaginate2 = this.abnormalassetlist.length;
    this.currentPage = 1;
    this.currentPage2 = 1;
    this.exportdata = !this.exportdata;
    this.forcapture = !this.forcapture;
  }

  resetPaginate() {
    this.currentPage3 = 1;
    this.showPaginate3 = 5;
    this.paginatereset = !this.paginatereset;
  }

  generateSatisfactory() {
    this.showPaginateSatis = this.listofsatisfactory.length;
    this.currentPageSatis = 1;
  }

  resetPaginateSatis() {
    this.currentPageSatis = 0;
    this.showPaginateSatis = 5;
  }

  showallPaginate() {
    this.currentPage3 = 1;
    this.paginatereset = !this.paginatereset;
    this.showPaginate3 = this.totalfinishtoday2down.length;
  }
  done() {
    this.exportdata = !this.exportdata;
    this.showPaginate = 5;
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
    this.forcapture = !this.forcapture;
  }
  exportTable() {
    TableUtil.exportTableToExcel("prinsection");
    this.showPaginate = 5;
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
    this.exportdata = !this.exportdata;
  }
  exportTableExcel() {
    TableUtil.exportTableToExcel("printexcel");
    this.currentPage3 = 1;
    this.showPaginate3 = 5;
    this.paginatereset = !this.paginatereset;
  }
  exportwo(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    // ////////////////////////console.log(this.januarielem);

    ////////////////////////////////////console.log(this.findingpending2);
    if (this.listoftotalasset == true) {
      const janexport: any = []
      janexport.push(this.pdmassetlist)
      ////////////////////////console.log(janexport);

      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(janexport[0]);
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
      XLSX.writeFile(wb, 'PDM_Asset.xlsx');
    } else if (this.listoftotalgood == true) {
      const janexport: any = []
      janexport.push(this.listofgood)
      ////////////////////////console.log(janexport);
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(janexport[0]);
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
      XLSX.writeFile(wb, 'PDM_List_Good.xlsx');
    } else if (this.listoftotalsatisfactory == false) {
      const janexport: any = []
      janexport.push(this.listofsatisfactory)
      ////////////////////////console.log(janexport);
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(janexport[0]);
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
      XLSX.writeFile(wb, 'PDM_List_Satisfactory.xlsx');
    }

  }

  dailyChart() {
    this.dailytotal = {
      series: [
        {
          name: "Total Finding / day",
          data: this.temuanperday_data
        },
      ],
      chart: {
        type: "bar",
        height: 600,
        width: 1500,
      },
      chart2: {
        type: "bar",
        height: 500,
        width: 750,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        categories: this.temuanperday_label.reverse()
      },
      yaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1,
        colors: ['#f94b47']
      }, legend: {
      }, colors: ['#f94b47']
    };
  }

  monthlyChart() {
    this.monthlytotal = {
      series: [
        {
          name: "Total Data OCI2 Data %",
          data: [Math.round(this.januari * 100 / (this.totalasset / 2)), Math.round(this.febuari * 100 / (this.totalasset / 2)), Math.round(this.maret * 100 / (this.totalasset / 2)), Math.round(this.april * 100 / (this.totalasset / 2)), Math.round(this.mei * 100 / (this.totalasset / 2)), Math.round(this.juni * 100 / (this.totalasset / 2)), Math.round(this.juli * 100 / (this.totalasset / 2)), Math.round(this.agustus * 100 / (this.totalasset / 2)), Math.round(this.september * 100 / (this.totalasset / 2)), Math.round(this.oktober * 100 / (this.totalasset / 2)), Math.round(this.november * 100 / (this.totalasset / 2)), Math.round(this.desember * 100 / (this.totalasset / 2))],
        },
      ],
      chart: {
        type: "bar",
        height: 600,
        width: 1500,
      },
      chart2: {
        type: "bar",
        height: 600,
        width: 750,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        categories: ["January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      },
      yaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1,
        colors: ["#34568B"]
      }, legend: {
      }, colors: ["#34568B"]
    };
  }

  getphoto(dataget: any) {
    this.picture = dataget;

  }

  print(): void {
    let printContents, popupWin: any;
    printContents = this.myNameElem.nativeElement.innerHTML;
    ////////////////////////////////////console.log(printContents);

    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Reporting Daily</title>
          <style>
          *{
            text-align: center;
            font-family:  'Times New Roman', serif;
          }
          table {
            border-collapse: collapse;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    this.showPaginate = 5;
    this.showPaginate2 = 5;
    this.currentPage = 1;
    this.currentPage2 = 1;
    this.exportdata = !this.exportdata;
    popupWin.document.close();
  }
  daterange() {
    this.totalfinishtoday2down = [];
    //////////////////console.log(this.totalfinishtoday2);

    this.service.getReadHistoryCheckoci2(this.tgl2, this.tgl3).subscribe(data => {
      //////////////////console.log(this.tgl2 + '  ' + this.tgl3);

      //////////////////console.log(data);
      this.totalfinishtoday = data;

      Object.values(this.totalfinishtoday).forEach(data => {
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          // this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
          this.totalfinishtoday2down.splice(this.totalfinishtoday2down.lenght, 0, array[i]);
        }
        // this.spinner.hide();
        this.resolved = true;
      })
    })

  }
  data($event: any, $event2: any) {

    this.target.nativeElement.scrollIntoView();
    // window.scrollTo({
    //   top: 100,
    //   behavior: 'smooth',
    // });
    if (this.coba != null && this.coba2 != null && this.coba3 != null) {
      this.coba.destroy();
      this.coba2.destroy();
      this.coba3.destroy();
    }
    this.note = '';
    this.picture = '';
    this.temperaturelist = [];
    this.amperelist = [];
    this.vibrationlist = [];
    this.ampereDate = [];
    this.vibrationDate = [];
    this.temperatureDate = [];
    this.ampereR = [];
    this.ampereS = [];
    this.ampereT = [];
    this.ampereFreq = [];
    this.vibration2H = [];
    this.vibrationCF = [];
    this.vibration3H = [];
    this.vibration3CF = [];
    this.temperatureThermal = [];
    this.funloc = $event;
    this.funlocabnormaldate = $event2;
    var countagain = 0;

    for (let i = 0; i < this.notepdmlist.length; i++) {
      if (this.notepdmlist[i].device_name === this.funloc && this.notepdmlist[i].do_date === $event2) {
        this.note = this.notepdmlist[i].note;
        this.picture = 'http://192.168.9.47/plan_pdm/files/' + this.notepdmlist[i].picture;
        break;
      }
    }


    for (let i = 0; i < this.totaltemperaturelist.length; i++) {
      if (this.totaltemperaturelist[i].device_name === this.funloc) {
        this.temperaturelist.splice(this.temperaturelist.lenght, 0, this.totaltemperaturelist[i]);
      }
    }
    this.temperaturelist = this.temperaturelist.filter(function (e: any) { return e != null; });
    ////////////////////////////////////console.log(this.temperaturelist);

    for (let i = 0; i < this.temperaturelist.length; i++) {
      if (this.temperaturelist[i].test_name === 'Thermal') {
        this.temperatureThermal.splice(this.temperatureThermal.lenght, 0, this.temperaturelist[i].value);
        this.temperatureDate.splice(this.temperatureDate.lenght, 0, this.temperaturelist[i].do_date);
      }
    }
    ////////////////////////////////////console.log(this.temperatureDate);


    for (let i = 0; i < this.totalamperelist.length; i++) {
      if (this.totalamperelist[i].device_name === this.funloc) {
        this.amperelist.splice(this.amperelist.lenght, 0, this.totalamperelist[i]);
      }
    }
    this.amperelist = this.amperelist.filter(function (e: any) { return e != null; });
    ////////////////////////////console.log(this.amperelist);

    for (let i = 0; i < this.amperelist.length; i++) {
      if (this.amperelist[i].test_name === 'R') {
        this.ampereR.splice(this.ampereR.lenght, 0, this.amperelist[i].value);
        this.ampereDate.splice(this.ampereDate.lenght, 0, this.amperelist[i].do_date);
      } else if (this.amperelist[i].test_name === 'S') {
        this.ampereS.splice(this.ampereS.lenght, 0, this.amperelist[i].value);
      } else if (this.amperelist[i].test_name === 'T') {
        this.ampereT.splice(this.ampereT.lenght, 0, this.amperelist[i].value);
      } else if (this.amperelist[i].test_name === 'freq') {
        this.ampereFreq.splice(this.ampereFreq.lenght, 0, this.amperelist[i].value);
      }

    }

    for (let i = 0; i < this.totalvibrationlist.length; i++) {
      if (this.totalvibrationlist[i].device_name === this.funloc) {
        this.vibrationlist.splice(this.vibrationlist.lenght, 0, this.totalvibrationlist[i]);
      }
    }

    this.vibrationlist = this.vibrationlist.filter(function (e: any) { return e != null; });
    //////////////////console.log(this.vibrationlist);
    var length2h = 0;
    var lengthcf2h = 0;
    var length3h = 0;
    var lengthcf3h = 0;
    var lengthBetween = 0;
    var vibrationYear: any = [];
    // for (let i = 0; i < this.vibrationlist.length; i++) {
    //   if (this.vibrationlist[i].year === 2022) {
    //     twotwo++;
    //   }
    // }
    // //////////////////console.log(twotwo);
    for (let i = 0; i < this.vibrationlist.length; i++) {
      if (i == 0) {
        vibrationYear.splice(vibrationYear.lenght, 0, this.vibrationlist[i].do_date);
      }
      else if (i > 0) {
        if (this.vibrationlist[i - 1].do_date != this.vibrationlist[i].do_date) {
          vibrationYear.splice(vibrationYear.lenght, 0, this.vibrationlist[i].do_date);
        }
      }
    }
    //////////////////console.log(vibrationYear);

    for (let i = 0; i < this.vibrationlist.length; i++) {
        if (this.vibrationlist[i].test_name === '2H') {
          this.vibration2H.splice(this.vibration2H.lenght, 0, this.vibrationlist[i].value);
          length2h++
        }
        if (this.vibrationlist[i].test_name === 'CF+ (2H)') {
          this.vibrationCF.splice(this.vibrationCF.lenght, 0, this.vibrationlist[i].value);
          lengthcf2h++
        }
        if (this.vibrationlist[i].test_name === '3H') {
          this.vibration3H.splice(this.vibration3H.lenght, 0, this.vibrationlist[i].value);
          length3h++
        }
        if (this.vibrationlist[i].test_name === 'CF+ (3H)') {
          this.vibration3CF.splice(this.vibration3CF.lenght, 0, this.vibrationlist[i].value);
          lengthcf3h++
        }
        if(length2h != length3h){
          lengthBetween = length2h - length3h + 1
        }
        //////////////////console.log(lengthBetween);
        if (this.vibrationlist[i].year === 2022) {
          if (this.vibration3H.length < lengthBetween) {
            this.vibration3H.push(null); // You can use null or another placeholder value
          }
  
          if (this.vibration3CF.length < lengthBetween) {
            // Insert a placeholder value for 2022
            this.vibration3CF.push(null); // You can use null or another placeholder value
          }
        }
  
    }

    // //////////////////console.log(length2h);
    // //////////////////console.log(length3h);
    
    // if(length2h != length3h){
    //   lengthBetween = length2h - length3h
    // }
    // //////////////////console.log(lengthBetween);
    
    // if(this.vibration2H.length)
    // //////////////////console.log(this.vibration2H[0].lenght);
    // //////////////////console.log(this.vibration3H);
    

    // for (let i = 0; i < this.vibrationlist.length; i++) {
    //   if (this.vibrationlist[i].test_name === '2H') {
    //     this.vibration2H.splice(this.vibration2H.lenght, 0, this.vibrationlist[i].value);
    //     this.vibrationDate.splice(this.vibrationDate.lenght, 0, this.vibrationlist[i].do_date);
    //   } else if (this.vibrationlist[i].test_name === 'CF+ (2H)') {
    //     this.vibrationCF.splice(this.vibrationCF.lenght, 0, this.vibrationlist[i].value); 
    //   } else if (this.vibrationlist[i].test_name === '3H') {
    //     this.vibration3H.splice(this.vibration3H.lenght, 0, this.vibrationlist[i].value); 
    //   } else if (this.vibrationlist[i].test_name === 'CF+ (3H)') {
    //     this.vibration3CF.splice(this.vibration3CF.lenght, 0, this.vibrationlist[i].value);
    //   }
    // }
    // for (let i = 0; i < this.vibrationlist.length; i++) {
    //   if (this.vibrationlist[i].year === 2022) {
    //     if (this.vibration3H.length < twotwo - 1) {
    //       this.vibration3H.push(null); // You can use null or another placeholder value
    //     }

    //     if (this.vibration3CF.length < twotwo - 1) {
    //       // Insert a placeholder value for 2022
    //       this.vibration3CF.push(null); // You can use null or another placeholder value
    //     }
    //   }
    // }

    var dataVibration = {
      labels: vibrationYear.reverse(),
      datasets: [
        {
          label: '2H',
          data: this.vibration2H.reverse(),
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'CF+ 2H',
          data: this.vibrationCF.reverse(),
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 6,
        },
        {
          label: '3H',
          data: this.vibration3H.reverse(),
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
          lineTension: 0,
          radius: 6,
        },
        {
          label: 'CF+ 3H',
          data: this.vibration3CF.reverse(),
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          fill: false,
          lineTension: 0,
          radius: 6,
        },
      ],
    };
    // //////////////////////////////////console.log(this.ampereR);
    // //////////////////////////////////console.log(this.ampereS);
    // //////////////////////////////////console.log(this.ampereT);
    // //////////////////////////////////console.log(this.ampereFreq);
    var dataAmpere = {
      labels: this.ampereDate.reverse(),
      datasets: [
        {
          label: 'R',
          data: this.ampereR.reverse(),
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
          yAxisID: 'B',
        },
        {
          label: 'S',
          data: this.ampereS.reverse(),
          backgroundColor: 'green',
          borderColor: 'lightgreen',
          fill: false,
          lineTension: 0,
          radius: 7,
          yAxisID: 'B',
        },
        {
          label: 'T',
          data: this.ampereT.reverse(),
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
          lineTension: 0,
          radius: 9,
          yAxisID: 'B',
        },
        {
          label: 'Freq',
          data: this.ampereFreq.reverse(),
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          fill: false,
          lineTension: 0,
          radius: 9,
          yAxisID: 'A',
        },
      ],

    };
    var dataTemperature = {
      labels: this.temperatureDate.reverse(),
      datasets: [
        {
          label: 'Thermal',
          data: this.temperatureThermal.reverse(),
          backgroundColor: 'blue',
          borderColor: 'lightblue',
          fill: false,
          lineTension: 0,
          radius: 5,
        },
      ],
    };
    this.coba = new Chart('dum', {
      type: 'line',
      data: dataVibration,
    }
    );
    this.coba2 = new Chart('dumdum', {
      type: 'line',
      data: dataAmpere,
      options: {
        layout: {
          padding: {
            top: 5
          }
        },
        scales: {
          x: {
            beginAtZero: true, // You can add options for the x-axis here
          },
          'B': {
            type: 'linear',
            position: 'left',
            min: 0, // Define the min value for the left y-axis if needed
          },
          'A': {
            type: 'linear',
            position: 'right',
            min: 0, // Define the min value for the right y-axis if needed
          },
        },
      }
    });
    this.coba3 = new Chart('dumdumdum', {
      type: 'line',
      data: dataTemperature,
    });
  }

  chartFunction() {
    this.chartOptions = {
      series: [
        {
          name: "Done",
          data: [this.preparation, this.injection, this.blow, this.fill, this.pack, this.pf, this.stu]
        },
        {
          name: "Not Yet",
          data: [this.preparationnull, this.injectionnnull, this.blownull, this.fillnull, this.packnull, this.pfnull, this.stunull]
        }
      ],
      chart: {
        type: "bar",
        height: 500,
        events: {
          click: (event: any, chartContext: any, config: any) => {
            // //////////////////////////////////console.log(config);

            if (config.dataPointIndex == '0' && config.seriesIndex == '0') {
              this.changeprep();
            }
            if (config.dataPointIndex == '0' && config.seriesIndex == '1') {
              this.changeprepnull();
            }
            if (config.dataPointIndex == '1' && config.seriesIndex == '0') {
              this.changeinj();
            }
            if (config.dataPointIndex == '1' && config.seriesIndex == '1') {
              this.changeinjnull();
            }
            if (config.dataPointIndex == '2' && config.seriesIndex == '0') {
              this.changeblow();
            }
            if (config.dataPointIndex == '2' && config.seriesIndex == '1') {
              this.changeblownull();
            }
            if (config.dataPointIndex == '3' && config.seriesIndex == '0') {
              this.changefill();
            }
            if (config.dataPointIndex == '3' && config.seriesIndex == '1') {
              this.changefillnull();
            }
            if (config.dataPointIndex == '4' && config.seriesIndex == '0') {
              this.changepack();
            }
            if (config.dataPointIndex == '4' && config.seriesIndex == '1') {
              this.changepacknull();
            }
            if (config.dataPointIndex == '5' && config.seriesIndex == '0') {
              this.changekanesho();
            }
            if (config.dataPointIndex == '5' && config.seriesIndex == '1') {
              this.changekaneshonull();
            }
            if (config.dataPointIndex == '6' && config.seriesIndex == '0') {
              this.changestu();
            }
            if (config.dataPointIndex == '6' && config.seriesIndex == '1') {
              this.changestunull();
            }
            if (config.dataPointIndex == '-1') {
              this.boolprep = this.boolinj = this.boolblow = this.boolfill = this.boolpack = this.boolkanesho = this.boolstu1 = false;
            }
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        categories: [
          "PREPARATION", "INJECTION", "BLOW", "FILL", "PACK", "KANESHO", "STU1"
        ]
      },
      yaxis: {
        axixTicks: {
          show: false,
        },
        crosshairs: {
          show: false,
        },
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1,
        colors: ['#34568B', '#FF6F61']
      }, legend: {
      }, colors: ['#34568B', '#FF6F61']
    };
  }

  totalAsset() {
    this.listoftotalsatisfactory = true
    this.listoftotalgood = false
    this.listoftotalasset = !this.listoftotalasset
    // ////////////////////////console.log(this.listoftotalasset);

  }

  totalgood() {
    this.listoftotalasset = false
    this.listoftotalsatisfactory = true
    this.listoftotalgood = !this.listoftotalgood
  }

  totalSatisfactory() {
    this.listoftotalasset = false
    this.listoftotalgood = false
    this.listoftotalsatisfactory = !this.listoftotalsatisfactory
    // ////////////////////////console.log(this.listoftotalsatisfactory);

  }

  abnormalAssetTable() {
    if (this.chartofabnormatasset == false) {
      this.chartofabnormatasset = true;
    }
  }

  abnormalAsset() {
    if (this.chartofabnormatasset == false) {
      this.chartofabnormatasset = true;
    } else if (this.chartofabnormatasset == true) {
      this.chartofabnormatasset = false;

    }
  }

  listAbnormalAsset() {
    if (this.listofabnormatasset == false) {
      this.listofabnormatasset = true;
    } else if (this.listofabnormatasset == true) {
      this.listofabnormatasset = false;
    }
  }

  finishNotYet() {
    if (this.finishnotyet == false) {
      this.finishnotyet = true;
    } else if (this.finishnotyet == true) {
      this.finishnotyet = false;
      this.totaldatacurrentyear = true;
    }
  }

  dataCurrentYear() {
    if (this.totaldatacurrentyear == false) {
      this.totaldatacurrentyear = true;
    } else if (this.totaldatacurrentyear == true) {
      this.totaldatacurrentyear = false;
    }
  }

  async ngOnInit(): Promise<void> {
    this.abnormalAsset();
    this.listAbnormalAsset();
    this.totalSatisfactory();
    this.finishNotYet();
    this.dataCurrentYear();
    this.chartFunction();
    this.dailyChart(); 
    this.monthlyChart(); 
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getReadTotalPdmAssetoci2().subscribe(data => {
        this.asset = data;
        // ////////////////console.log(data);
        
        var date: any = [];
        Object.values(this.asset).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          this.asset2.splice(this.asset2.lenght, 0, array[0]);
          for (let elem of this.asset2) {
            this.totalasset = elem.total;
          }
          this.service.getOci2Valuemonth(this.current).subscribe(data => {
            //////////////////console.log(this.current);

            // ////////////////console.log(data);

            this.valuemonth = data;
            Object.values(this.valuemonth).forEach(data => {
              // // //////////////////////////////////console.log(data);
              var array = Object.keys(data).map(function (key) {
                return data[key];
              });

              ////////////////console.log(array);
              for (let i = 0; i < array.length; i++) {
                this.valuemonthlist.splice(this.valuemonthlist.lenght, 0, array[i]);
              }

              ////////////////console.log(this.valuemonthlist);

              this.valuemonthlist.forEach((elem: any, i: number) => {
                if (elem.do_date != this.valuemonthlist[i + 1]?.do_date) {
                  date.push(elem.do_date)
                  // ////////////////console.log(date);
                }
              });


              ////////////////console.log(this.valuemonthlist);

              for (let elem of this.valuemonthlist) {
                if (elem.month == 1) {
                  this.januari += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 2) {
                  this.febuari += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 3) {
                  this.maret += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 4) {
                  this.april += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 5) {
                  this.mei += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 6) {
                  this.juni += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 7) {
                  this.juli += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 8) {
                  this.agustus += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 9) {
                  this.september += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 10) {
                  this.oktober += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 11) {
                  this.november += 1;
                  this.temuanperday_data_temp.push(elem)
                } else if (elem.month == 12) {
                  this.desember += 1;
                  this.temuanperday_data_temp.push(elem)
                }
              }
              ////////////////console.log(this.november);
              
              var dummytemuan: any = []
              date.forEach((element: any) => {

                this.temuanperday_data_temp.forEach((elem: any) => {
                  // ////////////////console.log(elem.bulan);
                  // ////////////////console.log(this.month);


                  if (elem.bulan == this.month) {
                    if (elem.do_date == element) {
                      this.temuanperday_dum++
                      dummytemuan.push(elem)
                    }
                  }
                });
              });
              dummytemuan.forEach((element: any) => {
                this.temuanperday_label.push(element.do_date)
                // this.temuanperday_data.push(this.temuanperday_dum)
              });
              const uniqueLabel = this.removeDuplicatesFromArray(this.temuanperday_label)
              // Object.values(uniqueLabel).forEach(data => {
              //   var arrayLabel = Object.keys(data).map(function (key) {
              //     return data[key];
              //   });
              //   ////////////////console.log(arrayLabel);
              // });

              this.temuanperday_label = []
              this.temuanperday_label = uniqueLabel

              ////////////////console.log(uniqueLabel.length);
              var dataTotal: number = 0
              for (let j = 0; j < uniqueLabel.length; j++) {
                for (let i = 0; i < this.temuanperday_data_temp.length; i++) {

                  if (uniqueLabel[j] === this.temuanperday_data_temp[i].do_date) {
                    // ////////////////console.log(this.temuanperday_data_temp[i]);
                    // ////////////////console.log('aha');
                    dataTotal++
                  }

                }
                // ////////////////console.log(this.temuanperday_data_temp[i].do_date);
                // ////////////////console.log(uniqueLabel[i]);
                ////////////////console.log(dataTotal);
                this.temuanperday_data.push(dataTotal)
                dataTotal = 0



              };

              ////////////////console.log(this.totalasset);

              this.totaldatayear = new Chart("valuepermonthchart", {
                type: "bar",
                data: {
                  labels: ["January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                  datasets: [
                    {
                      "label": "Total Data OCI1 Data %",
                      "data": [Math.round(this.januari * 100 / (this.totalasset / 2)), Math.round(this.febuari * 100 / (this.totalasset / 2)), Math.round(this.maret * 100 / (this.totalasset / 2)), Math.round(this.april * 100 / (this.totalasset / 2)), Math.round(this.mei * 100 / (this.totalasset / 2)), Math.round(this.juni * 100 / (this.totalasset / 2)), Math.round(this.juli * 100 / (this.totalasset / 2)), Math.round(this.agustus * 100 / (this.totalasset / 2)), Math.round(this.september * 100 / (this.totalasset / 2)), Math.round(this.oktober * 100 / (this.totalasset / 2)), Math.round(this.november * 100 / (this.totalasset / 2)), Math.round(this.desember * 100 / (this.totalasset / 2))],
                      "backgroundColor": "#34568B"
                    },
                  ]

                },
                options: {
                  // scales: {
                  //   yAxes: {
                  //     min: 0,
                  //     ticks: {

                  //       callback: function (value) { return value + "%" },
                  //       //beginAtZero: true
                  //     },
                  //     // scaleLabel: {
                  //     //   display: true,
                  //     //   labelString: "Percentage"
                  //     // }
                  //   }
                  // }
                }
              });
            })

            this.dailyChart();
            this.monthlyChart();

          }
          );
        })
      }
      );
      this.service.getReadPdmAssetoci2().subscribe(data => {
        this.pdmasset = data;
        //////////////////////////////////console.log(this.pdmasset);
        Object.values(this.pdmasset).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.pdmassetlist.splice(this.pdmassetlist.get, 0, array[i])
          }
          // //////////////////////////////////console.log(this.pdmassetlist);

        })

      });
      this.service.getOci2fNotFinish().subscribe(data => {
        this.finishnot = data;
        // //////////////////////////////////console.log(data);
        Object.values(this.finishnot).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          var m = (new Date().getMonth() + 1).toString().slice(-2)
          var y = new Date().getFullYear().toString();

          for (let i = 0; i < array.length; i++) {

            this.finishnotlist.splice(this.finishnotlist.get, 0, array[i]);

          }

          // //////////////////////////////////console.log(this.finishnotlist);
          // //////////////////////////////////console.log(m);
          // //////////////////////////////////console.log(y);



          for (let i = 0; i < array.length; i++) {
            this.finishmonth = this.finishnotlist[i].plan_date;
            const myArray = this.finishmonth.split("-");
            this.finishmonth = myArray[1];
            this.monthArray.push(this.finishmonth);
          }

          for (let i = 0; i < array.length; i++) {
            this.finishmonth = this.finishnotlist[i].plan_date;
            const myArray = this.finishmonth.split("-");
            this.finishmonth = myArray[0];
            this.yearArray.push(this.finishmonth);
          }

          this.bulan = this.newTanggal.split("-");
          this.bulan = this.bulan[1];

          this.tahun = this.newTanggal.split("-");
          this.tahun = this.tahun[0];

          // //////////////////////////////////console.log(array);

          for (let i = 0; i < this.finishnotlist.length; i++) {
            if (this.finishnotlist[i].month == m) {
              if (this.finishnotlist[i].year == y) {
                // //////////////////////////////////console.log(this.finishnotlist[i]);

                if (this.finishnotlist[i].name_area == 'PREPARATION') {
                  if (this.finishnotlist[i].value == null) {
                    this.preparationnull += 1;
                  } else {
                    this.preparation += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'INJECTION') {
                  if (this.finishnotlist[i].value == null) {
                    this.injectionnnull += 1;
                  } else {
                    this.injection += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'BLOW') {
                  if (this.finishnotlist[i].value == null) {
                    this.blownull += 1;
                  } else {
                    this.blow += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'FILL') {
                  if (this.finishnotlist[i].value == null) {
                    this.fillnull += 1;
                  } else {
                    this.fill += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'PACK') {
                  if (this.finishnotlist[i].value == null) {
                    this.packnull += 1;
                  } else {
                    this.pack += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'PF Transfer/KANESHO') {
                  if (this.finishnotlist[i].value == null) {
                    this.pfnull += 1;
                  } else {
                    this.pf += 1;
                  }
                } else if (this.finishnotlist[i].name_area == 'STU1') {
                  if (this.finishnotlist[i].value == null) {
                    this.stunull += 1;
                  } else {
                    this.stu += 1;
                  }
                }
              }
            }
          }

          this.chartFunction();



        }
        )
        ////////////////////////////////////console.log(this.finishnotlist);

      }
      );
      this.service.getNotePdm().subscribe(data => {
        this.notepdm = data;
        Object.values(this.notepdm).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.notepdmlist.splice(this.notepdmlist.lenght, 0, array[i]);
          }
        })

      }
      );
      // this.fungsi
      this.service.getReadFinishTodayoci2abnormal().subscribe(data => {
        this.abnormalasset = data;
        ////////////////////////////console.log(data);
        Object.values(this.abnormalasset).forEach(data => {
          // // //////
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.abnormalassetlist.splice(this.abnormalassetlist.lenght, 0, array[i]);
          }
          // ////////////////////////////console.log(this.abnormalassetlist);

          for (let elem of this.abnormalassetlist) {
            if (elem.Stat == 'Good') {
              this.good2 += 1;
              this.listofgood.splice(this.listofgood.get, 0, elem)
            } else if (elem.Stat == 'Satisfactory') {
              this.satis2 += 1;
              this.listofsatisfactory.splice(this.listofsatisfactory.get, 0, elem)
            } else if (elem.Stat == 'Unsatisfactory') {
              this.unsatisf2 += 1;
            } else if (elem.Stat == 'Unacceptable') {
              this.unacc2 += 1;
            }
            // //////////////////////////////////console.log(this.listofsatisfactory);

          }
          for (let elem of this.abnormalassetlist) {
            if (elem.Stat == 'Good') {
              this.good += 1;
            } else if (elem.Stat == 'Satisfactory') {
              this.satis += 1;
            } else if (elem.Stat == 'Unsatisfactory') {
              this.unsatisf += 1;
            } else if (elem.Stat == 'Unacceptable') {
              this.unacc += 1;
            }
            ////////////////////////////console.log(this.good2);

          }
          this.coba = new Chart('donut', {
            type: 'doughnut',
            data: {
              labels: ['Total Good', 'Total SatisFactory', 'Total Unsatisactory', 'Total Unacceptable'],
              datasets: [{
                label: '# of Votes',
                data: [this.good, this.satis, this.unsatisf, this.unacc],
                backgroundColor: [
                  '#3ed33e',
                  'rgb(230, 230, 33)',
                  'orange',
                  '#ff3d3d'
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
          // this.abnormalassetlist = this.abnormalassetlist.filter((el: any, i: any, a: any) => i === a.indexOf(el))
          // //////////////////////////////////console.log(this.abnormalassetlist);

          for (let i = 0; i < this.abnormalassetlist.length; i++) {
            if (this.abnormalassetlist[i].Stat == 'Unsatisfactory' || this.abnormalassetlist[i].Stat == 'Unacceptable') {
              this.selectorarrabnormal.splice(this.selectorarrabnormal, 0, this.abnormalassetlist[i]);
            }
          }

        })
      }
      );
      this.service.getTemperatureLineoci2().subscribe(data => {
        this.temperature = data;
        Object.values(this.temperature).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });

          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totaltemperaturelist.splice(this.totaltemperaturelist.lenght, 0, array[i]);
            this.totaltemperaturedate.splice(this.totaltemperaturedate.lenght, 0, array[i]);
            //// //////////////////////////////////console.log(array[i]);
          }
        })
      }
      );
      this.service.getAmpereLineoci2().subscribe(data => {
        this.ampere = data;
        Object.values(this.ampere).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalamperelist.splice(this.totalamperelist.lenght, 0, array[i]);
            this.totalamperedate.splice(this.totalamperedate.lenght, 0, array[i]);
            //// //////////////////////////////////console.log(array[i]);
          }
        })
      }
      );
      this.service.getVibrationLineoci2().subscribe(data => {
        this.vibration = data;
        Object.values(this.vibration).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalvibrationlist.splice(this.totalvibrationlist.lenght, 0, array[i]);
            this.totalvibrationdate.splice(this.totalvibrationdate.lenght, 0, array[i]);
            //// //////////////////////////////////console.log(array[i]);
          }
        })
      }
      );
      this.service.getReadHistoryCheckoci2(this.tgl2, this.tgl3).subscribe(data => {
        //////////////////console.log(this.tgl2 + '  ' + this.tgl3);

        //////////////////console.log(data);
        this.totalfinishtoday = data;

        Object.values(this.totalfinishtoday).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            // this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
            this.totalfinishtoday2down.splice(this.totalfinishtoday2down.lenght, 0, array[i]);
          }
          // this.spinner.hide();
          this.resolved = true;
        })
      })

      this.service.getReadFinishTodayoci2(this.tgl1).subscribe(data => {
        ////////////////////////////////console.log(data);

        this.totalfinishtoday = data;

        Object.values(this.totalfinishtoday).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalfinishtoday2.splice(this.totalfinishtoday2.lenght, 0, array[i]);
            this.totalfinishtoday2down.splice(this.totalfinishtoday2down.lenght, 0, array[i]);
          }
          this.spinner.hide();
          this.resolved = true;
        })

      }
      );
      this.service.getReadPdmFinishoci2().subscribe(data => {
        this.finish = data;
        Object.values(this.finish).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.finish2.splice(this.finish2.lenght, 0, array[i]);
          }
          for (let elem of this.finish2) {
            this.totalfinish = elem.total;
          }


        })
      }
      );
    });
    //// //////////////////////////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};
