import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import * as XLSX from 'xlsx';
import { NgxCaptureService } from 'ngx-capture';
import { NgxSpinnerService } from 'ngx-spinner';
import { CountService } from '../service/master/count.service';
import html2canvas from 'html2canvas';
import { ToastrService } from 'ngx-toastr'
import { ChartOptions } from './chart';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-am-m-oci2',
  templateUrl: './am-m-oci2.component.html',
  styleUrls: ['./am-m-oci2.component.css']
})
export class AmMOci2Component implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    //////////////console.log(this.findingpending2);

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.findingpending2);
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
    XLSX.writeFile(wb, this.fileName);

  }

  constructor(
    public toastr: ToastrService,
    private service: CountService,
    private spinner: NgxSpinnerService,
    private captureService: NgxCaptureService,
    private httpClient: HttpClient,
    private cdr: ChangeDetectorRef) { }
  itemsPerPage: number = 0;
  math = Math;
  currentPage: number = 1;
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
  itemsPerPage4: number = 0;
  currentPage4: number = 1;
  absoluteIndex4(indexOnPage: number): number {
    return this.itemsPerPage4 * (this.currentPage4 - 1) + indexOnPage;
  }

  showInfo() {
    this.toastr.info('If the image is cracked, try to resize the screen size!', 'Important!', {
      timeOut: 7000,
      positionClass: 'toast-top-left'
    })
  }

  error: string | null = null;
  fileName = 'FindingPendingOCI1.xlsx';
  public resolved: boolean = false;
  public resolvedchart: boolean = false;
  totalfm: object = {};
  screenWidth: number = window.innerWidth;
  approvalfinding: number = 0;
  totalfindinglist: boolean = false;
  listoffindingpending: boolean = false;
  listofhistorypending: boolean = false;
  listofMonthlyReport: boolean = false;
  listjobfinish: boolean = false;
  listtemuanperhari: boolean = false;
  createorderfinding: number = 0;
  scheduling: number = 0;
  checkexecution: number = 0;
  arrapproval: any = [];
  arrorderfinish: any = [];
  orderfinish: number = 0;
  arrshecdule: any = [];
  ordershecdule: number = 0;
  totalreport: number = 0;
  donereport: number = 0;
  pendingreport: number = 0;
  totalwo02report: number = 0;
  totalwo03report: number = 0;
  totalwo06report: number = 0;
  totalwo07report: number = 0;
  wo02report: number = 0;
  picture: any;
  wo03report: number = 0;
  wo06report: number = 0;
  wo07report: number = 0;
  wo02donereport: number = 0;
  wo03donereport: number = 0;
  wo06donereport: number = 0;
  wo07donereport: number = 0;
  totalwo: number = 0;
  searchSect: any;
  searchText: any;
  searchText2: any;
  searchText3: any;
  totalfm2: any = [];
  findingpending: object = {};
  fpsect: object = {};
  fpsectarr: any = [];
  preparation: number = 0;
  injection: number = 0;
  blow: number = 0;
  packing: number = 0;
  preform: number = 0;
  filling: number = 0;
  findingpending2: any = [];
  funloc: any = [];
  orderobj: object = {};
  orderarr: any = [];
  totallevel: object = {};
  totallevel2: any = [];
  ftotallevel: any = [];
  low: number = 0;
  medium: number = 0;
  high: number = 0;
  totalfindingmonitorbar: any = [];
  totalfindingmonitordonut: any = [];
  totalpm: object = {};
  totalpm2: any = [];
  totalrm: object = {};
  totalrm2: any = [];
  totaldata1year: any = [];
  totalffm: object = {};
  totalffm2: any = [];
  coba: any = [];
  donut: any = [];
  dum: any;
  donut2: any;
  typefinding: any;
  temuanperday: any = [];
  temuanperday_label: any = [];
  temuanperday_data: any = [];
  temuanperday_data_temp: any = [];
  temuanperday_dum: number = 0;
  termuanperday_jan: number = 0;
  termuanperday_feb: number = 0;
  termuanperday_mar: number = 0;
  termuanperday_apr: number = 0;
  termuanperday_mei: number = 0;
  termuanperday_jun: number = 0;
  termuanperday_jul: number = 0;
  termuanperday_ags: number = 0;
  termuanperday_sep: number = 0;
  termuanperday_okt: number = 0;
  termuanperday_nov: number = 0;
  termuanperday_des: number = 0;
  totalfinding1: any;
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
  detailpartarr: any = [];
  desember: number = 0;
  januarielem: any = [];
  febuarielem:  any = [];
  maretelem:  any = [];
  aprilelem:  any = [];
  meielem:  any = [];
  junielem:  any = [];
  julielem:  any = [];
  agustuselem:  any = [];
  septemberelem:  any = [];
  oktoberelem:  any = [];
  novemberelem:  any = [];
  detailpartarrelem: any = [];
  desemberelem:  any = [];
  januariclose: number = 0;
  febuariclose: number = 0;
  maretclose: number = 0;
  aprilclose: number = 0;
  meiclose: number = 0;
  juniclose: number = 0;
  juliclose: number = 0;
  agustusclose: number = 0;
  septemberclose: number = 0;
  oktoberclose: number = 0;
  novemberclose: number = 0;
  desemberclose: number = 0;
  januaricloseelem:  any = [];
  febuaricloseelem:  any = [];
  maretcloseelem:  any = [];
  aprilcloseelem:  any = [];
  meicloseelem:  any = [];
  junicloseelem:  any = [];
  julicloseelem:  any = [];
  agustuscloseelem:  any = [];
  septembercloseelem:  any = [];
  oktobercloseelem:  any = [];
  novembercloseelem:  any = [];
  desembercloseelem:  any = [];
  total_cost: number = 0;
  totalfinding2: any;
  totalfinding3: any;
  public loaddata: any;
  totalfinding4: any;
  bar1report: any;
  bar2report: any;
  funlock: object = {};
  funlockarr: any = [];
  funloclist: any = [];
  deskripsi: any = 'Loading..';
  @ViewChild("ss")
  taptap!: ElementRef;
  @ViewChild("ss2")
  taptap2!: ElementRef;
  reportharian: any = [];
  @ViewChild("ss3")
  taptap3!: ElementRef;
  datarange: any = [];
  pendingexecute: number = 0;
  pendingexecutetop: number = 0;
  chartdestroy: any;
  finishexecute: number = 0;
  finishexecutetop: number = 0;
  imgBase64 = '';
  tgl1: any = moment().format("YYYY-MM") + "-01";
  tgl2: any = moment().format("YYYY-MM-DD");
  tglsearch: any = moment().format("YYYY-MM-DD");
  tgl3: any = moment().format("YYYY") + "-01-" + "01";
  tgl4: any = moment().format("YYYY-MM-DD");
  autodate: any = moment().format("YYYY");
  month: any = moment().format("M");
  bulan: any = moment().format("M");
  readyexecute: number = 0;
  readyexecutetop: number = 0;
  listoftotalfinding : any = [];
  @ViewChild("target")
  target!: ElementRef;
  @ViewChild("target2")
  target2!: ElementRef;
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  
  data($event: any) {
    // ////////console.log(this.scree);

    this.target.nativeElement.scrollIntoView();
    //   behavior: 'smooth',
    //   block: 'center',
    //   inline: 'center',
    // });
    //// //////////////console.log($event);
    this.funloclist = [];
    this.funloc = $event;
    ////////console.log(this.funloc);

    // //////////////console.log(this.funloc);
    for (let i = 0; i < this.orderarr.length; i++) {
      if (this.orderarr[i].func_loc === this.funloc) {
        //////////////console.log(this.orderarr);

        this.total_cost += this.orderarr[i].total_actual;
      }
    }
    for (let i = 0; i < this.orderarr.length; i++) {
      if (this.orderarr[i].func_loc === this.funloc) {
        this.funloclist[i] = this.orderarr[i];
      }
    }
    this.funloclist = this.funloclist.filter(function (e: any) { return e != null; });
    ////////console.log(this.funloclist);
  }
  totalCapture() {
    const element = document.getElementById('ssTotal')!;
    html2canvas(element).then(canvas => {
      // `canvas` contains the captured content as an image.
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'totalreport.png';
      this.showInfo();
      link.click();
    });
  }
  capture() {
    this.captureService
      .getImage(this.taptap.nativeElement, true)
      .subscribe((img: any) => {
        this.imgBase64 = img;
        this.downloadJson();
      });
  }
  getphoto(dataget: any) {
    this.picture = dataget;

  }
  detailpart(no_wo: any) {
    this.currentPage4 = 1;
    this.detailpartarr.splice(0);
    this.service.getTotalPartReporting(no_wo).subscribe(data => {
      this.target2.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
      this.resolved = true;
      this.detailpartarr.push(data);

    });
  }
  capture2() {
    this.captureService
      .getImage(this.taptap2.nativeElement, true)
      .subscribe((img: any) => {
        this.imgBase64 = img;
        this.downloadJson();
      });
  }
  capture3() {
    this.captureService
      .getImage(this.taptap3.nativeElement, true)
      .subscribe((img: any) => {
        this.imgBase64 = img;
        this.downloadJson();
      });
  }
  downloadJson() {
    var element = document.createElement('a');
    element.setAttribute('href', this.imgBase64);
    element.setAttribute('download', 'reportingdaily.png');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
  finddata2() {
    if (this.chartdestroy != null) {
      this.chartdestroy.destroy();
    }
    this.totaldata1year.splice(0);
    this.januari = 0;
    this.januariclose = 0;
    this.febuari = 0;
    this.febuariclose = 0;
    this.maret = 0;
    this.maretclose = 0;
    this.april = 0;
    this.aprilclose = 0;
    this.mei = 0;
    this.meiclose = 0;
    this.juni = 0;
    this.juniclose = 0;
    this.juli = 0;
    this.juliclose = 0;
    this.agustus = 0;
    this.agustusclose = 0;
    this.september = 0;
    this.septemberclose = 0;
    this.oktober = 0;
    this.oktoberclose = 0;
    this.november = 0;
    this.novemberclose = 0;
    this.desember = 0;
    this.desemberclose = 0;

    this.service.getTotalDataPost(this.tgl3, this.tgl4).subscribe(data => {
      this.totaldata1year.push(data);
      //////////////console.log(data);

      for (let elem of this.totaldata1year[0]) {
        if (elem.bulan == 'January') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.januariclose += 1
              this.januaricloseelem.push(elem)
              this.januari += 1;
              this.januarielem.push(elem)
            } else {
              this.januari += 1;
              this.januarielem.push(elem)
            }
          }
        } else if (elem.bulan == 'February') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.febuariclose += 1
              this.febuaricloseelem.push(elem)
              this.febuari += 1;
              this.febuarielem.push(elem)
            } else {
              this.febuari += 1;
              this.febuarielem.push(elem)
            }
          }
        } else if (elem.bulan == 'March') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.maretclose += 1;
              this.maretcloseelem.push(elem)
              this.maret += 1;
              this.maretelem.push(elem)
            } else {
              this.maret += 1;
              this.maretelem.push(elem)
            }
          }
        } else if (elem.bulan == 'April') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.aprilclose += 1;
              this.aprilcloseelem.push(elem)
              this.april += 1;
              this.aprilelem.push(elem)
            }
            else {
              this.april += 1;
              this.aprilelem.push(elem)
            }
          }
        } else if (elem.bulan == 'May') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.meiclose += 1;
              this.meicloseelem.push(elem)
              this.mei += 1;
              this.meielem.push(elem)
            } else {
              this.mei += 1;
              this.meielem.push(elem)
            }
          }
        } else if (elem.bulan == 'June') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.juniclose += 1;
              this.junicloseelem.push(elem)
              this.juni += 1;
              this.junielem.push(elem)
            } else {
              this.juni += 1;
              this.junielem.push(elem)
            }
          }
        } else if (elem.bulan == 'July') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.juliclose += 1;
              this.julicloseelem.push(elem)
              this.juli += 1;
              this.julielem.push(elem)
            } else {
              this.juli += 1;
              this.julielem.push(elem)
            }
          }
        } else if (elem.bulan == 'August') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.agustusclose += 1;
              this.agustuscloseelem.push(elem)
              this.agustus += 1;
              this.agustuselem.push(elem)
            } else {
              this.agustus += 1;
              this.agustuselem.push(elem)
            }
          }
        } else if (elem.bulan == 'September') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.septemberclose += 1;
              this.septembercloseelem.push(elem)
              this.september += 1;
              this.septemberelem.push(elem)
            } else {
              this.september += 1;
              this.septemberelem.push(elem)
            }
          }
        } else if (elem.bulan == 'October') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.oktoberclose += 1;
              this.oktobercloseelem.push(elem)
              this.oktober += 1;
              this.oktoberelem.push(elem)
            } else {
              this.oktober += 1;
              this.oktoberelem.push(elem)
            }
          }
        } else if (elem.bulan == 'November') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.novemberclose += 1;
              this.novembercloseelem.push(elem)
              this.november += 1;
              this.novemberelem.push(elem)
            } else {
              this.november += 1;
              this.novemberelem.push(elem)
            }
          }
        } else if (elem.bulan == 'December') {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.desemberclose += 1;
              this.desembercloseelem.push(elem)
              this.desember += 1;
              this.desemberelem.push(elem)
            } else {
              this.desember += 1;
              this.desemberelem.push(elem)
            }
          }
        }
        
        
        this.chartFunction();
      }
    
      
    }, (error: any) => { }, () => {
      this.spinner.hide();
    });
    
  }

  exportwo(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    // //console.log(this.januarielem);
    
    //////////////console.log(this.findingpending2);
    if(this.booljan == true){
      const janexport : any = []
      janexport.push(this.januarielem)
      //console.log(janexport);
      
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
        XLSX.writeFile(wb, 'WOJanuari.xlsx');
    }else if(this.booljannull == true){
      const janexport : any = []
      janexport.push(this.januaricloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOJanuariClose.xlsx');
    }else if(this.boolFeb == true){
      const janexport : any = []
      janexport.push(this.febuarielem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOFebruari.xlsx');
    }else if(this.boolFebnull == true){
      const janexport : any = []
      janexport.push(this.febuaricloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOFebruariClose.xlsx');
    }else if(this.boolMar == true){
      const janexport : any = []
      janexport.push(this.maretelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOMaret.xlsx');
    }else if(this.boolMarnull == true){
      const janexport : any = []
      janexport.push(this.maretcloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOMaretClose.xlsx');
    }else if(this.boolApr == true){
      const janexport : any = []
      janexport.push(this.aprilelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOApril.xlsx');
    }else if(this.boolAprnull == true){
      const janexport : any = []
      janexport.push(this.aprilcloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOAprilClose.xlsx');
    }else if(this.boolMay == true){
      const janexport : any = []
      janexport.push(this.meielem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOMei.xlsx');
    }else if(this.boolMaynull == true){
      const janexport : any = []
      janexport.push(this.meicloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOMeiClose.xlsx');
    }else if(this.boolJun == true){
      const janexport : any = []
      janexport.push(this.junielem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOJuni.xlsx');
    }else if(this.boolJunnull == true){
      const janexport : any = []
      janexport.push(this.junicloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOJuniClose.xlsx');
    }else if(this.boolJul == true){
      const janexport : any = []
      janexport.push(this.julielem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOJuli.xlsx');
    }else if(this.boolJulnull == true){
      const janexport : any = []
      janexport.push(this.julicloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOJuliClose.xlsx');
    }else if(this.boolAgu == true){
      const janexport : any = []
      janexport.push(this.agustuselem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOAgustus.xlsx');
    }else if(this.boolAgunull == true){
      const janexport : any = []
      janexport.push(this.agustuscloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOAgustusClose.xlsx');
    }else if(this.boolSep == true){
      const janexport : any = []
      janexport.push(this.septemberelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOSeptember.xlsx');
    }else if(this.boolSepnull == true){
      const janexport : any = []
      janexport.push(this.septembercloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOSeptemberClose.xlsx');
    }else if(this.boolOkt == true){
      const janexport : any = []
      janexport.push(this.oktoberelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOOktober.xlsx');
    }else if(this.boolOktnull == true){
      const janexport : any = []
      janexport.push(this.oktobercloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WOOktoberClose.xlsx');
    }else if(this.boolNov == true){
      const janexport : any = []
      janexport.push(this.novemberelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WONovember.xlsx');
    }else if(this.boolNovnull == true){
      const janexport : any = []
      janexport.push(this.novembercloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WONovemberClose.xlsx');
    }else if(this.boolDes == true){
      const janexport : any = []
      janexport.push(this.desemberelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WODesember.xlsx');
    }else if(this.boolDesnull == true){
      const janexport : any = []
      janexport.push(this.desembercloseelem)
      //console.log(janexport);
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
        XLSX.writeFile(wb, 'WODesemberClose.xlsx');
    }
    
    

  }

  booljan: Boolean = false;
  boolFeb: Boolean = false;
  boolMar: Boolean = false;
  boolApr: Boolean = false;
  boolMay: Boolean = false;
  boolJun: Boolean = false;
  boolJul: Boolean = false;
  boolAgu: Boolean = false;
  boolSep: Boolean = false;
  boolOkt: Boolean = false;
  boolNov: Boolean = false;
  boolDes: Boolean = false;
  booljannull: Boolean = false;
  boolFebnull: Boolean = false;
  boolMarnull: Boolean = false;
  boolAprnull: Boolean = false;
  boolMaynull: Boolean = false;
  boolJunnull: Boolean = false;
  boolJulnull: Boolean = false;
  boolAgunull: Boolean = false;
  boolSepnull: Boolean = false;
  boolOktnull: Boolean = false;
  boolNovnull: Boolean = false;
  boolDesnull: Boolean = false;


  changeJan() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull =  false;
    this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljan = !this.booljan;
    this.cdr.detectChanges();
  }
  changeFeb() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolFeb = !this.boolFeb;
    this.cdr.detectChanges();
  }
  changeMar() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolMar = !this.boolMar;
    this.cdr.detectChanges();
  }
  changeApr() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolApr = !this.boolApr;
    this.cdr.detectChanges();
  }
  changeMay() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolMay = !this.boolMay;
    this.cdr.detectChanges();
  }
  changeJun() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolJun = !this.boolJun;
    this.cdr.detectChanges();
  }
  changeJul() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolJul = !this.boolJul;
    this.cdr.detectChanges();
  }
  changeAgu() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolAgu = !this.boolAgu;
    this.cdr.detectChanges();
  }
  changeSep() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolAgu = this.boolJul = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolSep = !this.boolSep;
    this.cdr.detectChanges();
  }
  changeOkt() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolAgu = this.boolSep = this.boolJul = this.boolNov = this.boolDes = false;
    this.boolOkt = !this.boolOkt;
    this.cdr.detectChanges();
  }
  changeNov() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolAgu = this.boolSep = this.boolOkt = this.boolJul = this.boolDes = false;
    this.boolNov = !this.boolNov;
    this.cdr.detectChanges();
  }
  changeDes() {
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = this.boolAgunull = this.boolSepnull = this.boolOktnull = this.boolNovnull = this.boolDesnull  = false;
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolJul = false;
    this.boolDes = !this.boolDes;
    this.cdr.detectChanges();
  }


  changeJannull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = false;
    this.booljannull = !this.booljannull;
    this.cdr.detectChanges();
  }
  changeFebnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = false;
    this.boolFebnull = !this.boolFebnull;
    this.cdr.detectChanges();
  }
  changeMarnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = false;
    this.boolMarnull = !this.boolMarnull;
    this.cdr.detectChanges();
    
    
  }
  changeAprnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolMaynull = this.boolJunnull = this.boolJulnull = false;
    this.boolAprnull = !this.boolAprnull;
    this.cdr.detectChanges();
  }
  changeMaynull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolJunnull = this.boolJulnull = false;
    this.boolMaynull = !this.boolMaynull;
    this.cdr.detectChanges();
  }
  changeJunnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJulnull = false;
    this.boolJunnull = !this.boolJunnull;
    this.cdr.detectChanges();
  }
  changeJulnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  changeAgunull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  changeSepnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  changeOktnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  changeNovnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  changeDesnull() {
    this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
    this.booljannull = this.boolFebnull = this.boolMarnull = this.boolAprnull = this.boolMaynull = this.boolJunnull = false;
    this.boolJulnull = !this.boolJulnull;
    this.cdr.detectChanges();
  }
  


  chartFunction(){
    this.chartOptions = {
      series: [
        {
          name: "Total",
          data: [Math.round(this.januari), Math.round(this.febuari), Math.round(this.maret), Math.round(this.april), Math.round(this.mei), Math.round(this.juni), Math.round(this.juli), Math.round(this.agustus), Math.round(this.september), Math.round(this.oktober), Math.round(this.november), Math.round(this.desember)]
        },
        {
          name: "Closed",
          data: [Math.round(this.januariclose), Math.round(this.febuariclose), Math.round(this.maretclose), Math.round(this.aprilclose), Math.round(this.meiclose), Math.round(this.juniclose), Math.round(this.juliclose), Math.round(this.agustusclose), Math.round(this.septemberclose), Math.round(this.oktoberclose), Math.round(this.novemberclose), Math.round(this.desemberclose)],
        }
      ],
      chart: {
        type: "bar",
        height: 500,
        events: {
          click: (event: any, chartContext: any, config: any) => {
            // ////////////console.log(config);
            ////console.log(this.maretcloseelem);
            if (config.dataPointIndex == '0' && config.seriesIndex == '0') {
              this.changeJan();
            }
            if (config.dataPointIndex == '0' && config.seriesIndex == '1') {
              this.changeJannull();
            }
            if (config.dataPointIndex == '1' && config.seriesIndex == '0') {
              this.changeFeb();
            }
            if (config.dataPointIndex == '1' && config.seriesIndex == '1') {
              this.changeFebnull();
            }
            if (config.dataPointIndex == '2' && config.seriesIndex == '0') {
              this.changeMar();
            }
            if (config.dataPointIndex == '2' && config.seriesIndex == '1') {
              this.changeMarnull();
            }
            if (config.dataPointIndex == '3' && config.seriesIndex == '0') {
              this.changeApr();
            }
            if (config.dataPointIndex == '3' && config.seriesIndex == '1') {
              this.changeAprnull();
            }
            if (config.dataPointIndex == '4' && config.seriesIndex == '0') {
              this.changeMay();
            }
            if (config.dataPointIndex == '4' && config.seriesIndex == '1') {
              this.changeMaynull();
            }
            if (config.dataPointIndex == '5' && config.seriesIndex == '0') {
              this.changeJun();
            }
            if (config.dataPointIndex == '5' && config.seriesIndex == '1') {
              this.changeJunnull();
            }
            if (config.dataPointIndex == '6' && config.seriesIndex == '0') {
              this.changeJul();
            }
            if (config.dataPointIndex == '6' && config.seriesIndex == '1') {
              this.changeJulnull();
            }
            if (config.dataPointIndex == '7' && config.seriesIndex == '0') {
              this.changeAgu();
            }
            if (config.dataPointIndex == '7' && config.seriesIndex == '1') {
              this.changeAgunull();
            }
            if (config.dataPointIndex == '8' && config.seriesIndex == '0') {
              this.changeSep();
            }
            if (config.dataPointIndex == '8' && config.seriesIndex == '1') {
              this.changeSepnull();
            }
            if (config.dataPointIndex == '9' && config.seriesIndex == '0') {
              this.changeOkt();
            }
            if (config.dataPointIndex == '9' && config.seriesIndex == '1') {
              this.changeOktnull();
            }
            if (config.dataPointIndex == '10' && config.seriesIndex == '0') {
              this.changeNov();
            }
            if (config.dataPointIndex == '10' && config.seriesIndex == '1') {
              this.changeNovnull();
            }
            if (config.dataPointIndex == '11' && config.seriesIndex == '0') {
              this.changeDes();
            }
            if (config.dataPointIndex == '11' && config.seriesIndex == '1') {
              this.changeDesnull();
            }
             if (config.dataPointIndex == '-1') {
              this.booljan = this.boolFeb = this.boolMar = this.boolApr = this.boolMay = this.boolJun = this.boolJul = this.boolAgu = this.boolSep = this.boolOkt = this.boolNov = this.boolDes = false;
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
          "January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December",
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
        colors: ['#007bff','#777f83']
      },legend: {
      },colors: ['#007bff','#777f83']
    };
  }

  finddatachange() {
    this.reportharian.splice(0);
    // this.spinner.show();
    this.resolved = false;
    this.service.getReportingHarianam(this.tglsearch, '1').subscribe(data => {
      this.resolved = true;
      this.reportharian.push(data);
    }, (error: any) => { }, () => {
      this.spinner.hide();
    })



  }
  totaldataChange() {
    this.pendingexecute = this.readyexecute = this.finishexecute = this.low = this.medium = this.high = 0; 
    this.totalfm = [];
    this.totalfm2 = [];
    this.totallevel = [];
    this.totallevel2 = [];
    this.totalkategori = [];
    this.totalkategoriarr = [];

    this.service.getCountTotalFinding().pipe(
      catchError((error) => {
        // Handle the error here
        this.error = 'An error occurred while fetching data.';
        return throwError(error);
      })
    ).subscribe(data => {
      this.totalkategori = data;
      
      
      Object.values(this.totalkategori).forEach(data => {
        // // //////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // // //////console.log(array);
        for (let i = 0; i < array.length; i++) {
          this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
        }
        
        for (var i = 0; i < this.totalkategoriarr.length; i++) {
          if(this.totalkategoriarr[i].bulanTahun == this.month){
            if(this.totalkategoriarr[i].id_area == 2){
              console.log(this.totalkategoriarr[i].bulanTahun + ' bt');
              console.log(this.month);
              
              
              if (this.totalkategoriarr[i].kategori === 'Preventive') {
                this.Setting += 1;
              }
              if (this.totalkategoriarr[i].kategori === 'Replacement') {
                this.Replacement += 1;
              }
              if (this.totalkategoriarr[i].kategori === 'Improvement') {
                this.Improvement += 1;
              }
            }
          }
        }

        this.typefinding.destroy()

        this.typefinding = new Chart('typefinding', {
          type: 'doughnut',
          data: {
            labels: ["Setting", "Replacement", "Improvement"],
            datasets: [{
              label: 'Data',
              data: [this.Setting, this.Replacement, this.Improvement],
              backgroundColor: [
                '#316879',
                '#f47a60',
                '#7fe7dc',
              ],
              borderColor: [
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

    //////console.log(this.pendingexecute);
    
    // this.spinner.show();
    // this.resolved = false;
    //////console.log(this.month);

    this.service.getTotalFeeding().pipe(
      catchError((error) => {
        // Handle the error here
        this.error = 'An error occurred while fetching data.';
        return throwError(error);
      })
    ).subscribe(data => {
      this.totallevel = data;

      Object.values(this.totallevel).forEach(data => {
        // // //////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // //////////////console.log(array);

        // // //////////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          if (data[i].id_area == 1)
            this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
        }
        for (var i = 0; i < this.totallevel2.length; i++) {
          if(this.totallevel2[i].bulanTahun == this.month){
          if (this.totallevel2[i].id_area = 1) {
            if (this.totallevel2[i].level === 'Low') {
              this.low += 1;
            }
            if (this.totallevel2[i].level === 'Medium') {
              this.medium += 1;
            }
            if (this.totallevel2[i].level === 'High') {
              this.high += 1;
            }
          }
        }

        this.donut2.destroy();

        }
        this.donut2 = new Chart('donut2', {
          type: 'doughnut',
          data: {
            labels: ['Low', 'Medium', 'High'],
            datasets: [{
              label: '# of Votes',
              data: [this.low, this.medium, this.high],
              backgroundColor: [
                '#626d71',
                '#ffc13b',
                '#ff6e40',
              ],
              borderColor: [
                'white',
                'white',
                'white',
              ],
              borderWidth: 1
            }]
          },
        });
        // // //////////////console.log(this.medium);m
        // // //////////////console.log(this.totallevel2);
      })


    }
    );
    
    this.service.getTotalFeeding().pipe(
      catchError((error) => {
        // Handle the error here
        this.error = 'An error occurred while fetching data.';
        return throwError(error);
      })
    ).subscribe(data => {
      this.totalfm = data;
      //////console.log(data);

      // //////////////console.log(this.totalfm);
      var date: any = [];
      Object.values(this.totalfm).forEach(data => {
        //////////////console.log(data);

        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.totalfm2.splice(this.totalfm2.lenght, 0, array[i]);
        }
        // ////////////console.log(this.totalfm2);


        this.totalfm2.forEach((elem: any, i: number) => {
          // //////console.log(i);
          
          if (elem.id_area == 1 && elem.tanggal_temuan != this.totalfm2[i + 1]?.tanggal_temuan) {
            date.push(elem.tanggal_temuan)
          }
          ////////console.log(elem.tanggal_temuan);

          if (elem.id_area == 1) {


            if (elem.status_pengerjaan == 'Done') {
              if (elem.bulanTahun == this.month) { this.finishexecute += 1; }

              this.temuanperday_data_temp.push(elem)
            }
            else if (elem.status2 == 'READY') {
              if (elem.bulanTahun == this.month) { this.readyexecute += 1; }

              this.temuanperday_data_temp.push(elem)
            } else if (elem.status1 == 'Create' || elem.status1 == 'None' || elem.status1 == 'Emergency') {
              if (elem.status2 == 'RELEASED' || elem.status2 == 'CREATED') {
                if (elem.bulanTahun == this.month) { this.pendingexecute += 1; }

                this.temuanperday_data_temp.push(elem)
              }
            }
            else if (elem.status1 == 'Draft' || elem.status1 == 'Submit' || elem.status1 == 'Revise' || elem.status1 == 'Approved' || elem.status1 == 'Not Yet') {
              if (elem.bulanTahun == this.month) { this.pendingexecute += 1; }

              this.temuanperday_data_temp.push(elem)
            }
          }


        })
        
        this.dum.destroy();

        this.dum = new Chart('dum', {
          type: 'bar',
          data: {
            labels: [""],
            datasets: [
              {
                label: 'Total Finding',
                data: [this.pendingexecute + this.readyexecute + this.finishexecute],
                backgroundColor: [
                  '#7fe7dc'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'On Progress WO',
                data: [this.pendingexecute],
                backgroundColor: [
                  '#ffc13b'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Ready Execute',
                data: [this.readyexecute],
                backgroundColor: [
                  '#ff6e40'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Finish Execute',
                data: [this.finishexecute],
                backgroundColor: [
                  '#316879'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
            ]
          },
        });
        
        this.resolved = true;
        //////console.log(this.pendingexecute);
      })
      }, (error: any) => { }, () => {
        this.spinner.hide();
      })
  }
  finddata() {
    this.spinner.show();
    this.resolved = false;
    if (this.bar1report != null && this.bar2report != null) {
      this.bar1report.destroy();
      this.bar2report.destroy();
    }
    this.datarange.splice(0);
    this.totalreport = 0;
    this.donereport = 0;
    this.pendingreport = 0;
    this.totalwo02report = 0;
    this.totalwo03report = 0;
    this.totalwo06report = 0;
    this.totalwo07report = 0;
    this.wo02report = 0;
    this.wo03report = 0;
    this.wo06report = 0;
    this.wo07report = 0;
    this.wo02donereport = 0;
    this.wo03donereport = 0;
    this.wo06donereport = 0;
    this.wo07donereport = 0;
    this.service.getTotalDataPost(this.tgl1, this.tgl2).pipe(
      catchError((error) => {
        // Handle the error here
        this.error = 'An error occurred while fetching data.';
        return throwError(error);
      })
    ).subscribe(data => {
      this.datarange.push(data);
      for (let elem of this.datarange[0]) {
        if (elem.plant_section == "Prod OCI 2") {
          if (elem.teco_date != null) {
            this.donereport += 1;
          } else {
            this.pendingreport += 1;
          }
          this.totalreport += 1;
        }
      }
      for (let elem of this.datarange[0]) {
        if (elem.plant_section == "Prod OCI 2") {
          if (elem.order_type == 'WO02') {
            if (elem.teco_date != null) {
              this.wo02donereport += 1;
            } else {
              this.wo02report += 1;
            }
            this.totalwo02report += 1;
          } else if (elem.order_type == 'WO03') {
            if (elem.teco_date != null) {
              this.wo03donereport += 1;
            } else {
              this.wo03report += 1;
            }
            this.totalwo03report += 1;
          } else if (elem.order_type == 'WO06') {
            if (elem.teco_date != null) {
              this.wo06donereport += 1;
            } else {
              this.wo06report += 1;
            }
            this.totalwo06report += 1;
          } else if (elem.order_type == 'WO07') {
            if (elem.teco_date != null) {
              this.wo07donereport += 1;
            } else {
              this.wo07report += 1;
            }
            this.totalwo07report += 1;
          }
        }
      }

      this.bar1report.destroy();

      this.bar1report = new Chart('barreport', {
          type: 'bar',
          data: {
            labels: [""],
            datasets: [
              {
                label: 'Total WO',
                data: [this.totalwo02report + this.totalwo03report + this.totalwo06report + this.totalwo07report],
                backgroundColor: [
                  '#7fe7dc'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Done WO',
                data: [this.wo02donereport + this.wo03donereport + this.wo06donereport + this.wo07donereport],
                backgroundColor: [
                  '#316879'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
              {
                label: 'Pending WO',
                data: [this.wo02report + this.wo03report + this.wo06report + this.wo07report],
                backgroundColor: [
                  '#ff6e40'
                ],
                borderColor: [
                  'white'
                ],
                borderWidth: 1
              },
            ]
          },
        });
        this.bar2report.destroy();

        this.bar2report = new Chart('barreport2', {
            type: 'bar',
            data: {
              labels: [""],
              datasets: [
                {
                  label: 'WO02 Corrective',
                  data: [Math.round((this.wo02donereport / this.totalwo02report) * 100)],
                  backgroundColor: [
                    '#ffc13b'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'WO03 Improvement',
                  data : [Math.round((this.wo03donereport / this.totalwo03report) * 100)],
                  backgroundColor: [
                    '#7fe7dc'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'WO06 Preventive',
                  data:[Math.round((this.wo06donereport / this.totalwo06report) * 100)],
                  backgroundColor: [
                    '#ff6e40'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'WO07 Over Haul',
                  data:[Math.round((this.wo07donereport / this.totalwo07report) * 100)],
                  backgroundColor: [
                    '#1e3d59'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
              ]
            },
          });
      
    }, (error: any) => { }, () => {
      this.spinner.hide();
    } );

  }

  showFinding() {
    if (this.totalfindinglist == false) {
      this.totalfindinglist = true;
    } else if (this.totalfindinglist == true) {
      this.totalfindinglist = false;
    }
  }

  showFindingPending() {
    if (this.listoffindingpending == false) {
      this.listoffindingpending = true;
    } else if (this.listoffindingpending == true) {
      this.listtemuanperhari = true;
      this.listoffindingpending = false;
      this.listjobfinish = true;
      this.listofMonthlyReport = true;
      this.listofhistorypending = true;
    }
  }

  showHistoryPending() {
    if (this.listofhistorypending == false) {
      this.listofhistorypending = true;
    } else if (this.listofhistorypending == true) {
      this.listtemuanperhari = true;
      // this.listoffindingpending = true;
      this.listjobfinish = true;
      this.listofMonthlyReport = true;
      this.listofhistorypending = false;
    }
  }

  showFindingHistory() {
    if (this.listofhistorypending == false) {
      // this.listofhistorypending = true;
    } else if (this.listofhistorypending == true) {
      this.listtemuanperhari = true;
      // this.listoffindingpending = true;
      this.listjobfinish = true;
      this.listofMonthlyReport = true;
      this.listofhistorypending = false;
    }
  }

  showMonthlyReport() {
    if (this.listofMonthlyReport == false) {
      this.listofMonthlyReport = true;
    } else if (this.listofMonthlyReport == true) {
      this.listtemuanperhari = true;
      this.listoffindingpending = true;
      this.listjobfinish = true;
      this.listofMonthlyReport = false;
      this.listofhistorypending = true;
    }
  }

  showListJobFinish() {
    if (this.listjobfinish == false) {
      this.listjobfinish = true;
    } else if (this.listjobfinish == true) {
      this.listtemuanperhari = true;
      this.listoffindingpending = true;
      this.listjobfinish = false;
      this.listofMonthlyReport = true;
      this.listofhistorypending = true;
    }
  }

  showTemuanPerDay() {
    if (this.listtemuanperhari == false) {
      this.listtemuanperhari = true;
    } else if (this.listtemuanperhari == true) {
      this.listtemuanperhari = false;
      this.listoffindingpending = true;
      this.listjobfinish = true;
      this.listofMonthlyReport = true;
      this.listofhistorypending = true;
    }
  }

  scrollPoint1(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }

  async ngOnInit(): Promise<void> {
    this.chartFunction()
    this.showFinding();
    this.spinner.show();
    this.showFindingHistory();
    this.showFindingPending();
    this.showHistoryPending();
    this.showMonthlyReport();
    this.showListJobFinish();
    this.showTemuanPerDay();
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.datarange.splice(0);
      this.totalreport = 0;
      this.donereport = 0;
      this.pendingreport = 0;
      this.totalwo02report = 0;
      this.totalwo03report = 0;
      this.totalwo06report = 0;
      this.totalwo07report = 0;
      this.wo02report = 0;
      this.wo03report = 0;
      this.wo06report = 0;
      this.wo07report = 0;
      this.wo02donereport = 0;
      this.wo03donereport = 0;
      this.wo06donereport = 0;
      this.wo07donereport = 0;
      this.service.getReportingHarianam(this.tglsearch, '1').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.reportharian.push(data);
      })

      this.service.getCountTotalFinding().pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.totalkategori = data;
        
        
        Object.values(this.totalkategori).forEach(data => {
          // // //////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          //console.log(this.totalkategoriarr[0].bulan);
          //console.log(this.month + ' bulan');
          
          for (var i = 0; i < this.totalkategoriarr.length; i++) {
            if(this.totalkategoriarr[i].bulan == this.month){
              if(this.totalkategoriarr[i].id_area == 2){
                if (this.totalkategoriarr[i].kategori === 'Preventive') {
                  this.Setting += 1;
                }
                if (this.totalkategoriarr[i].kategori === 'Replacement') {
                  this.Replacement += 1;
                }
                if (this.totalkategoriarr[i].kategori === 'Improvement') {
                  this.Improvement += 1;
                }
              }
            }
          }

          // this.typefinding.destroy()

          this.typefinding = new Chart('typefinding', {
            type: 'doughnut',
            data: {
              labels: ["Setting", "Replacement", "Improvement"],
              datasets: [{
                label: 'Data',
                data: [this.Setting, this.Replacement, this.Improvement],
                backgroundColor: [
                  '#316879',
                  '#f47a60',
                  '#7fe7dc',
                ],
                borderColor: [
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

      this.service.getTotalDataPost(this.tgl1, this.tgl2).pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.datarange.push(data);
        for (let elem of this.datarange[0]) {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.teco_date != null) {
              this.donereport += 1;
            } else {
              this.pendingreport += 1;
            }
            this.totalreport += 1;
          }
        }
        for (let elem of this.datarange[0]) {
          if (elem.plant_section == "Prod OCI 2") {
            if (elem.order_type == 'WO02') {
              if (elem.teco_date != null) {
                this.wo02donereport += 1;
              } else {
                this.wo02report += 1;
              }
              this.totalwo02report += 1;
            } else if (elem.order_type == 'WO03') {
              if (elem.teco_date != null) {
                this.wo03donereport += 1;
              } else {
                this.wo03report += 1;
              }
              this.totalwo03report += 1;
            } else if (elem.order_type == 'WO06') {
              if (elem.teco_date != null) {
                this.wo06donereport += 1;
              } else {
                this.wo06report += 1;
              }
              this.totalwo06report += 1;
            } else if (elem.order_type == 'WO07') {
              if (elem.teco_date != null) {
                this.wo07donereport += 1;
              } else {
                this.wo07report += 1;
              }
              this.totalwo07report += 1;
            }
          }
        }
      });
      this.bar1report = new Chart("barreport", {
        type: "bar",
        data: {
          datasets: [
            {
              "label": "Total WO",
              "data": [this.totalwo02report + this.totalwo03report + this.totalwo06report + this.totalwo07report],
              "backgroundColor": "#7fe7dc",
            },
            {
              "label": "Done WO",
              "data": [this.wo02donereport + this.wo03donereport + this.wo06donereport + this.wo07donereport],
              "backgroundColor": "#316879",
            },
            {
              "label": "Pending WO",
              "data": [this.wo02report + this.wo03report + this.wo06report + this.wo07report],
              "backgroundColor": "#ff6e40",
            },

          ],


        },
        // options: {
        //   scales: {
        //     yAxes: 
        //       {
        //         ticks: {
        //           // beginAtZero: true
        //         }
        //       }

        //   }
        // }
      });
      this.bar2report = new Chart("barreport2", {
        type: "bar",
        data: {
          datasets: [
            {
              "label": "WO02 Corrective",
              "data": [Math.round((this.wo02donereport / this.totalwo02report) * 100)],
              "backgroundColor": "#ffc13b",
            },
            {
              "label": "WO03 Improvement",
              "data": [Math.round((this.wo03donereport / this.totalwo03report) * 100)],
              "backgroundColor": "#7fe7dc",
            },
            {
              "label": "WO06 Preventive",
              "data": [Math.round((this.wo06donereport / this.totalwo06report) * 100)],
              "backgroundColor": "#ff6e40",
            },
            {
              "label": "WO07 Over Haul",
              "data": [Math.round((this.wo07donereport / this.totalwo07report) * 100)],
              "backgroundColor": "#1e3d59",
            },
          ],


        },
        // options: {
        //   scales: {
        //     yAxes: {
        //       min: 0,
        //       max: 100,
        //       ticks: {

        //         callback: function (value) { return value + "%" },
        //         //beginAtZero: true
        //       },
        //       // scaleLabel: {
        //       //   display: true,
        //       //   labelString: "Percentage"
        //       // }
        //     }
        //   }
        // }
      });
      this.service.getTotalApprovalOrderFinish('2').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.arrorderfinish.push(data);
        for (let elem of this.arrorderfinish[0]) {
          this.orderfinish = elem.total;
        }
      });
      this.service.getTotalApprovalCreateOrder('2').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.arrorderfinish = []
        this.arrorderfinish.push(data);
        for (let elem of this.arrorderfinish[0]) {
          this.createorderfinding = elem.total;
        }
      });
      this.service.getTotalApprovalSpv('2').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.arrorderfinish = []
        this.arrorderfinish.push(data);
        for (let elem of this.arrorderfinish[0]) {
          this.approvalfinding = elem.total;
        }
      });
      this.service.getTotalApprovalReadyExecution('2').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.arrorderfinish = []
        this.arrorderfinish.push(data);
        for (let elem of this.arrorderfinish[0]) {
          this.readyexecutetop = elem.total;
        }
      });
      this.service.getTotalApprovalShcedule('2').pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.arrshecdule.push(data);
        // ////////////console.log('hoi', data);
        for (let elem of this.arrshecdule[0]) {
          this.ordershecdule = elem.total;
        }
      });
      this.service.getTotalDataPost(this.tgl3, this.tgl4).pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.totaldata1year.push(data);
        // ////////////console.log(this.totaldata1year);
        // ////////////console.log(this.tgl3);
        // ////////////console.log(this.tgl4);




        for (let elem of this.totaldata1year[0]) {
          if (elem.bulan == 'January') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.januariclose += 1
              } else {
                this.januari += 1;
              }
            }
          } else if (elem.bulan == 'February') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.febuariclose += 1
              } else {
                this.febuari += 1;
              }
            }
          } else if (elem.bulan == 'March') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.maretclose += 1;
              } else {
                this.maret += 1;
              }
            }
          } else if (elem.bulan == 'April') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.aprilclose += 1;
              }
              else {
                this.april += 1;
              }
            }
          } else if (elem.bulan == 'May') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.meiclose += 1;
              } else {
                this.mei += 1;
              }
            }
          } else if (elem.bulan == 'June') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.juniclose += 1;
              } else {
                this.juni += 1;
              }
            }
          } else if (elem.bulan == 'July') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.juliclose += 1;
              } else {
                this.juli += 1;
              }
            }
          } else if (elem.bulan == 'August') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.agustusclose += 1;
              } else {
                this.agustus += 1;
              }
            }
          } else if (elem.bulan == 'September') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.septemberclose += 1;
              } else {
                this.september += 1;
              }
            }
          } else if (elem.bulan == 'October') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.oktoberclose += 1;
              } else {
                this.oktober += 1;
              }
            }
          } else if (elem.bulan == 'November') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.novemberclose += 1;
              } else {
                this.november += 1;
              }
            }
          } else if (elem.bulan == 'December') {
            if (elem.plant_section == "Prod OCI 2") {
              if (elem.teco_date != null) {
                this.desemberclose += 1;
              } else {
                this.desember += 1;
              }
            }
          }
        }
        this.januari = this.januari + this.januariclose;
        this.febuari = this.febuari + this.febuariclose;
        this.maret = this.maret + this.maretclose;
        this.april = this.april + this.aprilclose;
        // ////////////console.log(this.mei);
        // ////////////console.log(this.meiclose);

        this.mei = this.mei + this.meiclose;
        this.juni = this.juni + this.juniclose;
        this.juli = this.juli + this.juliclose;
        this.agustus = this.agustus + this.agustusclose;
        this.september = this.september + this.septemberclose;
        this.oktober = this.oktober + this.oktoberclose;
        this.november = this.november + this.novemberclose;
        this.desember = this.desember + this.desemberclose;
        new Chart("valuepermonthchart", {
          type: "bar",
          data: {
            labels: ["January", "February", "Maret", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [
              {
                "label": "Total",
                "data": [Math.round(this.januari), Math.round(this.febuari), Math.round(this.maret), Math.round(this.april), Math.round(this.mei), Math.round(this.juni), Math.round(this.juli), Math.round(this.agustus), Math.round(this.september), Math.round(this.oktober), Math.round(this.november), Math.round(this.desember)],
                "backgroundColor": "#777f83",
              },
              {
                "label": "Close",
                "data": [Math.round(this.januariclose), Math.round(this.febuariclose), Math.round(this.maretclose), Math.round(this.aprilclose), Math.round(this.meiclose), Math.round(this.juniclose), Math.round(this.juliclose), Math.round(this.agustusclose), Math.round(this.septemberclose), Math.round(this.oktoberclose), Math.round(this.novemberclose), Math.round(this.desemberclose)],
                "backgroundColor": "#007bff",
              },

            ],


          },
          // options: {
          //   scales: {
          //     yAxes: 
          //       {
          //         ticks: {
          //           // beginAtZero: true
          //         }
          //       }

          //   }
          // }
        });
      });
      // this.service.getTotalApproval().subscribe(data => {
      //   this.arrapproval.push(data);

      //   for (let elem of this.arrapproval[0].get) {
      //     if (elem.id_area == '2') {
      //       // ////////////console.log(elem);
      //       if (elem.status == 'Submit') {
      //         this.approvalfinding += 1;
      //       } else if (elem.status == 'Create' || elem.status == 'Emergency' || elem.status == null) {
      //         this.createorderfinding += 1;
      //       }
      //     }
      //   }

      // });
      this.service.getOrder().pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.orderobj = data;
        Object.values(this.orderobj).forEach(data => {
          //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.orderarr.splice(this.orderarr.lenght, 0, array[i]);
          }
          //////////////console.log(this.orderarr);

          // // //////////////console.log(this.findingpending2);
        })
      });
      this.service.getReadfpSectionOci2().pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.fpsect = data;
        Object.values(this.fpsect).forEach(data => {
          // // //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.fpsectarr.splice(this.fpsectarr.lenght, 0, array[i]);
          }
          // //////////////console.log(this.fpsectarr);

          // // //////////////console.log(this.findingpending2);
        })
      });
      this.service.getTotalFeeding().pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.totallevel = data;
        //////console.log(this.totallevel);

        Object.values(this.totallevel).forEach(data => {
          // // //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////console.log(array);

          // // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            if (data[i].id_area == 2)
              this.totallevel2.splice(this.totallevel2.lenght, 0, array[i]);
            //////console.log(this.totallevel2);
            //////console.log(this.totallevel2.lenght);
            
            
          }
          for (var i = 0; i < this.totallevel2.length; i++) {
            if(this.totallevel2[i].bulan == this.month){
            if (this.totallevel2[i].id_area == 2) {
              if (this.totallevel2[i].level === 'Low') {
                this.low += 1;
              }
              if (this.totallevel2[i].level === 'Medium') {
                this.medium += 1;
              }
              if (this.totallevel2[i].level === 'High') {
                this.high += 1;
              }
            }
          }

          }
          this.donut2 = new Chart('donut2', {
            type: 'doughnut',
            data: {
              labels: ['Low', 'Medium', 'High'],
              datasets: [{
                label: '# of Votes',
                data: [this.low, this.medium, this.high],
                backgroundColor: [
                  '#626d71',
                  '#ffc13b',
                  '#ff6e40',
                ],
                borderColor: [
                  'white',
                  'white',
                  'white',
                ],
                borderWidth: 1
              }]
            },
          });
          // // //////////////console.log(this.medium);m
          // // //////////////console.log(this.totallevel2);
        })


      }
      );
      this.service.getFuncLocOci2().pipe(
        catchError((error) => {
          // Handle the error here
          this.error = 'An error occurred while fetching data.';
          return throwError(error);
        })
      ).subscribe(data => {
        this.funlock = data;
        Object.values(this.funlock).forEach(data => {
          // //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.funlockarr.splice(this.funlockarr.lenght, 0, array[i]);
          }

          // //////////////console.log(this.funlockarr);

          // // //////////////console.log(this.findingpending2);
        })
       
      }, (error: any) => { }, () => {
        this.spinner.hide();
      });
      this.service.getReadFindingPendingoci2().subscribe(data => {
        this.findingpending = data;
        Object.values(this.findingpending).forEach(data => {
          //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            if (array[i].status != "CLOSED" && array[i].status != "TECO") {
              this.findingpending2.splice(this.findingpending2.lenght, 0, array[i]);
            }
          }
          // //////////////console.log(this.findingpending2);

          for (var i = 0; i < this.findingpending2.length; i++) {
            if (this.findingpending2[i].area == "OCI-2") {
              if (this.findingpending2[i].section === 'Preparation') {
                this.preparation += 1;
              }
              if (this.findingpending2[i].section === 'Injection') {
                this.injection += 1;
              }
              if (this.findingpending2[i].section === 'Blow') {
                this.blow += 1;
              }
              if (this.findingpending2[i].section === 'Packing') {
                this.packing += 1;
              }
              if (this.findingpending2[i].section === 'Preform Transfer') {
                this.preform += 1;
              }
              if (this.findingpending2[i].section === 'Filling') {
                this.filling += 1;
              }

            }
          }

          //  //////////////console.log(this.findingpending2);
        })

        new Chart('donutfp', {
          type: 'doughnut',
          data: {
            labels: ['Preparation', 'Injection', 'Blow', 'Packing', 'Preform', 'Filling'],
            datasets: [{
              label: '# of Votes',
              data: [this.preparation, this.injection, this.blow, this.packing, this.preform, this.filling],
              backgroundColor: [
                '#006d77',
                '#83c5be',
                '#BCD9B4',
                '#FF9C7A',
                '#e29578',
                '#c6ac8f',
              ],
              borderColor: [
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
              ],
              borderWidth: 1
            }]
          },
        });

      
      }, (error: any) => { }, () => {
        this.spinner.hide();
      }
      );
      this.service.getTotalFeeding().subscribe(data => {
        this.totalfm = data;
        //////console.log(data);

        // //////////////console.log(this.totalfm);
        var date: any = [];
        Object.values(this.totalfm).forEach(data => {
          //////////////console.log(data);

          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.totalfm2.splice(this.totalfm2.lenght, 0, array[i]);
          }
          // ////////////console.log(this.totalfm2);


          this.totalfm2.forEach((elem: any, i: number) => {
            if (elem.id_area == 2 && elem.tanggal_temuan != this.totalfm2[i + 1]?.tanggal_temuan) {
              date.push(elem.tanggal_temuan)
            }
            ////////console.log(elem.tanggal_temuan);

            if (elem.id_area == 2) {


              if (elem.status_pengerjaan == 'Done') {
                if (elem.bulan == this.month) { this.finishexecute += 1; this.finishexecutetop += 1; }

                this.temuanperday_data_temp.push(elem)
              }
              else if (elem.status2 == 'READY') {
                if (elem.bulan == this.month) { this.readyexecute += 1; }

                this.temuanperday_data_temp.push(elem)
              } else if (elem.status1 == 'Create' || elem.status1 == 'None' || elem.status1 == 'Emergency') {
                if (elem.status2 == 'RELEASED' || elem.status2 == 'CREATED') {
                  if (elem.bulan == this.month) { this.pendingexecute += 1; this.pendingexecutetop += 1; }

                  this.temuanperday_data_temp.push(elem)
                }
              }
              else if (elem.status1 == 'Draft' || elem.status1 == 'Submit' || elem.status1 == 'Revise' || elem.status1 == 'Approved' || elem.status1 == 'Not Yet') {
                if (elem.bulan == this.month) { this.pendingexecute += 1; this.pendingexecutetop += 1; }

                this.temuanperday_data_temp.push(elem)
              }
            }

            this.temuanperday_data_temp.forEach((element: any) => {
              if(element.bulan == this.bulan){
                this.listoftotalfinding.push(element)
              }
            });
            ////console.log(this.listoftotalfinding);


          })


          this.temuanperday_data_temp.forEach((element: any) => {
            ////////console.log(this.screenWidth);

            if (element.tahun == this.autodate) {
              if (element.bulan == 1) {
                this.termuanperday_jan++
              } else if (element.bulan == 2) {
                this.termuanperday_feb++
              } else if (element.bulan == 3) {
                this.termuanperday_mar++
              } else if (element.bulan == 4) {
                this.termuanperday_apr++
              } else if (element.bulan == 5) {
                this.termuanperday_mei++
              } else if (element.bulan == 6) {
                this.termuanperday_jun++
              } else if (element.bulan == 7) {
                this.termuanperday_jul++
              } else if (element.bulan == 8) {
                this.termuanperday_ags++
              } else if (element.bulan == 9) {
                this.termuanperday_sep++
              } else if (element.bulan == 10) {
                this.termuanperday_nov++
              } else if (element.bulan == 11) {
                this.termuanperday_okt++
              } else if (element.bulan == 12) {
                this.termuanperday_des++
              }
            }
          });

          date.forEach((element: any) => {

            this.temuanperday_data_temp.forEach((elem: any) => {
              if (elem.bulan == this.month) {
                if (elem.tanggal_temuan == element) {
                  this.temuanperday_dum++
                }
              }
            });
            if (this.temuanperday_dum != 0) {
              this.temuanperday_label.push(element)
              this.temuanperday_data.push(this.temuanperday_dum)
            }

            this.temuanperday_dum = 0

          });

          new Chart('totalfinding', {
            type: 'bar',
            data: {
              labels: this.temuanperday_label,
              datasets: [
                {
                  label: 'Total Finding Per Hari',
                  data: this.temuanperday_data,
                  backgroundColor: '#CBFFA9',
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
              ]
            },
          });

          new Chart('totalfindingbulan', {
            type: 'bar',
            data: {
              labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
              datasets: [
                {
                  label: 'Total Finding Per Bulan',
                  data: [this.termuanperday_jan, this.termuanperday_feb, this.termuanperday_mar, this.termuanperday_apr, this.termuanperday_mei, this.termuanperday_jun, this.termuanperday_jul, this.termuanperday_ags, this.termuanperday_sep, this.termuanperday_okt, this.termuanperday_nov, this.termuanperday_des],
                  backgroundColor: '#7fe7dc',
                  borderColor: [
                    'white',
                  ],
                  borderWidth: 1
                },
              ]
            },
          });


          this.dum = new Chart('dum', {
            type: 'bar',
            data: {
              labels: [""],
              datasets: [
                {
                  label: 'Total Finding',
                  data: [this.pendingexecute + this.readyexecute + this.finishexecute],
                  backgroundColor: [
                    '#7fe7dc'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'On Progress WO',
                  data: [this.pendingexecute],
                  backgroundColor: [
                    '#ffc13b'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Ready Execute',
                  data: [this.readyexecute],
                  backgroundColor: [
                    '#ff6e40'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
                {
                  label: 'Finish Execute',
                  data: [this.finishexecute],
                  backgroundColor: [
                    '#316879'
                  ],
                  borderColor: [
                    'white'
                  ],
                  borderWidth: 1
                },
              ]
            },
          });

          new Chart('donut', {
            type: 'doughnut',
            data: {
              labels: ['On Progress WO', 'Ready execute', 'Finish execute'],
              datasets: [{
                label: '# of Votes',
                data: [this.pendingexecute, this.readyexecute, this.finishexecute],
                backgroundColor: [
                  '#ffc13b',
                  '#ff6e40',
                  '#316879',
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

          // new Chart('totalfindingbulan', {
          //   type: 'bar',
          //   data: {
          //     labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
          //     datasets: [
          //       {
          //         label: 'Total Finding Bulan',
          //         data: [this.termuanperday_jan, this.termuanperday_feb, this.termuanperday_mar, this.termuanperday_apr, this.termuanperday_mei, this.termuanperday_jun, this.termuanperday_jul, this.termuanperday_ags, this.termuanperday_sep, this.termuanperday_okt, this.termuanperday_nov, this.termuanperday_des],
          //         backgroundColor: '#FFD6A5',
          //         borderColor: [
          //           'white',
          //         ],
          //         borderWidth: 1
          //       },
          //     ]
          //   },
          // });

          //////console.log(this.temuanperday_data);

          // this.spinner.hide();
          // this.resolved = true;
          //////console.log(this.pendingexecute);
        })
        
      }, (error: any) => { }, () => {
        this.spinner.hide();
      })
    });
  }
};

