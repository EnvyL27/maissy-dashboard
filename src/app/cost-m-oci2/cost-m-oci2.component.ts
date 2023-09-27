import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cost-m-oci2',
  templateUrl: './cost-m-oci2.component.html',
  styleUrls: ['./cost-m-oci2.component.css']
})
export class CostMOci2Component implements OnInit{
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
  //variable for cost maintenance
  cost: any;
  cost2: any;
  index: number = 0;
  indexstop: number = 0;
  cmplanjan: any;
  cmplanfeb: any;
  cmplanmar: any;
  cmplanapr: any;
  cmplanmei: any;
  cmplanjun: any;
  cmplanjul: any;
  cmplanaug: any;
  cmplansep: any;
  cmplanokt: any;
  cmplannov: any;
  cmplandes: any;
  cmactjan: any;
  cmactfeb: any;
  cmactmar: any;
  cmactapr: any;
  cmactmei: any;
  cmactjun: any;
  cmactjul: any;
  cmactaug: any;
  cmactsep: any;
  cmactokt: any;
  cmactnov: any;
  cmactdes: any;
  ovhplanjan: any;
  ovhplanfeb: any;
  ovhplanmar: any;
  ovhplanapr: any;
  ovhplanmei: any;
  ovhplanjun: any;
  ovhplanjul: any;
  ovhplanaug: any;
  ovhplansep: any;
  ovhplanokt: any;
  ovhplannov: any;
  ovhplandes: any;
  ovhactjan: any;
  ovhactfeb: any;
  ovhactmar: any;
  ovhactapr: any;
  ovhactmei: any;
  ovhactjun: any;
  ovhactjul: any;
  ovhactaug: any;
  ovhactsep: any;
  ovhactokt: any;
  ovhactnov: any;
  ovhactdes: any;
  pmplanjan: any;
  pmplanfeb: any;
  pmplanmar: any;
  pmplanapr: any;
  pmplanmei: any;
  pmplanjun: any;
  pmplanjul: any;
  pmplanaug: any;
  pmplansep: any;
  pmplanokt: any;
  pmplannov: any;
  pmplandes: any;
  pmactjan: any;
  pmactfeb: any;
  pmactmar: any;
  pmactapr: any;
  pmactmei: any;
  pmactjun: any;
  pmactjul: any;
  pmactaug: any;
  pmactsep: any;
  pmactokt: any;
  pmactnov: any;
  pmactdes: any;
  totalcmcurjan: number = 0;
  totalcmcurfeb: number = 0;
  totalcmcurmar: number = 0;
  totalcmcurapr: number = 0;
  totalcmcurmei: number = 0;
  totalcmcurjun: number = 0;
  totalcmcurjul: number = 0;
  totalcmcuragu: number = 0;
  totalcmcursep: number = 0;
  totalcmcurokt: number = 0;
  totalcmcurnov: number = 0;
  totalcmcurdes: number = 0;
  totalcmcpastjan: number = 0;
  totalcmcpastfeb: number = 0;
  totalcmcpastmar: number = 0;
  totalcmcpastapr: number = 0;
  totalcmcpastmei: number = 0;
  totalcmcpastjun: number = 0;
  totalcmcpastjul: number = 0;
  totalcmcpastagu: number = 0;
  totalcmcpastsep: number = 0;
  totalcmcpastokt: number = 0;
  totalcmcpastnov: number = 0;
  totalcmcpastdes: number = 0;
  totalindexjan: number = 0;
  totalindexfeb: number = 0;
  totalindexmar: number = 0;
  totalindexapr: number = 0;
  totalindexmei: number = 0;
  totalindexjun: number = 0;
  totalindexjul: number = 0;
  totalindexagu: number = 0;
  totalindexsep: number = 0;
  totalindexokt: number = 0;
  totalindexnov: number = 0;
  totalindexdes: number = 0;
  datafg: any;
  dataindex: any;
  totalfgjan: number = 0;
  totalfgfeb: number = 0;
  totalfgmar: number = 0;
  totalfgapr: number = 0;
  totalfgmei: number = 0;
  totalfgjun: number = 0;
  totalfgjul: number = 0;
  totalfgagu: number = 0;
  totalfgsep: number = 0;
  totalfgokt: number = 0;
  totalfgnov: number = 0;
  totalfgdes: number = 0;
  indexcostjan: number = 0;
  indexcostfeb: number = 0;
  indexcostmar: number = 0;
  indexcostapr: number = 0;
  indexcostmei: number = 0;
  indexcostjun: number = 0;
  indexcostjul: number = 0;
  indexcostagu: number = 0;
  indexcostsep: number = 0;
  indexcostokt: number = 0;
  indexcostnov: number = 0;
  indexcostdes: number = 0;
  totalpastyear: number = 0;
  totalcurrentyear: number = 0;
  listofcorrective: boolean = false;
  listofpreventive: boolean = false;
  listofoverhaul: boolean = false;
  listofindex: boolean = false;
  listcompare: boolean = false;
  listtotalcompare: boolean = false;


  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  showListOfCorrective(){
    this.listofcorrective = !this.listofcorrective
    if(this.listofpreventive == true){
      this.listofpreventive = !this.listofpreventive
    }else if(this.listofoverhaul == true){
      this.listofoverhaul = !this.listofoverhaul
    }else if(this.listofindex == true){
      this.listofindex = !this.listofindex
    }else if(this.listcompare == true){
      this.listcompare = !this.listcompare
    }else if(this.listtotalcompare == true){
      this.listtotalcompare = !this.listtotalcompare
    }
  }

  showListOfPreventive(){
    this.listofpreventive = !this.listofpreventive
    if(this.listofcorrective == true){
      this.listofcorrective = !this.listofcorrective
    }else if(this.listofoverhaul == true){
      this.listofoverhaul = !this.listofoverhaul
    }else if(this.listofindex == true){
      this.listofindex = !this.listofindex
    }else if(this.listcompare == true){
      this.listcompare = !this.listcompare
    }else if(this.listtotalcompare == true){
      this.listtotalcompare = !this.listtotalcompare
    }
  }

  showListOfOverhaul(){
    this.listofoverhaul = !this.listofoverhaul
    if(this.listofcorrective == true){
      this.listofcorrective = !this.listofcorrective
    }else if(this.listofpreventive == true){
      this.listofpreventive = !this.listofpreventive
    }else if(this.listofindex == true){
      this.listofindex = !this.listofindex
    }else if(this.listcompare == true){
      this.listcompare = !this.listcompare
    }else if(this.listtotalcompare == true){
      this.listtotalcompare = !this.listtotalcompare
    }
  }

  showListOfIndex(){
    this.listofindex = !this.listofindex
    if(this.listofcorrective == true){
      this.listofcorrective = !this.listofcorrective
    }else if(this.listofpreventive == true){
      this.listofpreventive = !this.listofpreventive
    }else if(this.listofoverhaul == true){
      this.listofoverhaul = !this.listofoverhaul
    }else if(this.listcompare == true){
      this.listcompare = !this.listcompare
    }else if(this.listtotalcompare == true){
      this.listtotalcompare = !this.listtotalcompare
    }
  }

  showListOfCompare(){
    this.listcompare = !this.listcompare
    if(this.listofcorrective == true){
      this.listofcorrective = !this.listofcorrective
    }else if(this.listofpreventive == true){
      this.listofpreventive = !this.listofpreventive
    }else if(this.listofoverhaul == true){
      this.listofoverhaul = !this.listofoverhaul
    }else if(this.listofindex == true){
      this.listofindex = !this.listofindex
    }else if(this.listtotalcompare == true){
      this.listtotalcompare = !this.listtotalcompare
    }
  }

  showListOfTotalCompare(){
    this.listtotalcompare = !this.listtotalcompare
    if(this.listofcorrective == true){
      this.listofcorrective = !this.listofcorrective
    }else if(this.listofpreventive == true){
      this.listofpreventive = !this.listofpreventive
    }else if(this.listofoverhaul == true){
      this.listofoverhaul = !this.listofoverhaul
    }else if(this.listofindex == true){
      this.listofindex = !this.listofindex
    }else if(this.listcompare == true){
      this.listcompare = !this.listcompare
    }
  }

  async ngOnInit(): Promise<void> {
    this.costChart();
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCountTotalFinding().subscribe(data => {
        this.totalkategori = data;
        Object.values(this.totalkategori).forEach(data => {
          // // //////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // //////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totalkategoriarr.length; i++) {
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
        })
      }
      );

      this.service.getCountTotalFinding().subscribe(data => {
        ////////console.log(data);
        
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

        })


      }
      );
      forkJoin(this.service.getCostOci2(),
        this.service.getCostOci1Past()).subscribe(([data, data2]) => {
          // ////////////console.log(data);
          // ////////////console.log(data2);
          this.cost = data;
          this.cost2 = data2;

          this.cost.forEach((element: any, index: number) => {
            // ////////////console.log(element.budget);

            element.budget = parseInt(element.budget);
            if (element.year == '2023') {
              if (element.category == "Corrective Maintenance") {
                if (element.actual == "Plan") {
                  if (element.month == "01") {

                    this.cmplanjan = element.budget;

                  } else if (element.month == "02") {
                    this.cmplanfeb = element.budget;

                  } else if (element.month == "03") {
                    this.cmplanmar = element.budget;

                  } else if (element.month == "04") {
                    this.cmplanapr = element.budget;

                  } else if (element.month == "05") {
                    this.cmplanmei = element.budget;

                  } else if (element.month == "06") {
                    this.cmplanjun = element.budget;

                  } else if (element.month == "07") {
                    this.cmplanjul = element.budget;

                  } else if (element.month == "08") {
                    this.cmplanaug = element.budget;

                  } else if (element.month == "09") {
                    this.cmplansep = element.budget;

                  } else if (element.month == "10") {
                    this.cmplanokt = element.budget;

                  } else if (element.month == "11") {
                    this.cmplannov = element.budget;

                  } else if (element.month == "12") {
                    this.cmplandes = element.budget;

                  }
                } else if (element.actual == "Actual") {
                  if (element.month == "01") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.cmactjan = element.budget;
                    this.totalindexjan += element.budget;
                    this.totalcmcurjan += element.budget;
                  } else if (element.month == "02") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexfeb += element.budget;
                    this.cmactfeb = element.budget;
                    this.totalcmcurfeb += element.budget;
                  } else if (element.month == "03") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexmar += element.budget;
                    this.cmactmar = element.budget;
                    this.totalcmcurmar += element.budget;
                  } else if (element.month == "04") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexapr += element.budget;
                    this.cmactapr = element.budget;
                    this.totalcmcurapr += element.budget;
                  } else if (element.month == "05") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexmei += element.budget;
                    this.cmactmei = element.budget;
                    this.totalcmcurmei += element.budget;
                  } else if (element.month == "06") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexjun += element.budget;
                    this.cmactjun = element.budget;
                    this.totalcmcurjun += element.budget;
                  } else if (element.month == "07") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexjul += element.budget;
                    this.cmactjul = element.budget;
                    this.totalcmcurjul += element.budget;
                  } else if (element.month == "08") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexagu += element.budget;
                    this.cmactaug = element.budget;
                    this.totalcmcuragu += element.budget;
                  } else if (element.month == "09") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexsep += element.budget;
                    this.cmactsep = element.budget;
                    this.totalcmcursep += element.budget;
                  } else if (element.month == "10") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexokt += element.budget;
                    this.cmactokt = element.budget;
                    this.totalcmcurokt += element.budget;
                  } else if (element.month == "11") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexnov += element.budget;
                    this.cmactnov = element.budget;
                    this.totalcmcurnov += element.budget;
                  } else if (element.month == "12") {
                    if (element.budget != 0) {
                      this.index += 1;
                      this.indexstop = 1;
                    } else if (element.budget == 0) {
                      this.indexstop = 0;
                    }
                    this.totalindexdes += element.budget;
                    this.cmactdes = element.budget;
                    this.totalcmcurdes += element.budget;
                  }
                }
              } else if (element.category == "Overhaul") {
                if (element.actual == "Plan") {
                  if (element.month == "01") {
                    this.ovhplanjan = element.budget;
                  } else if (element.month == "02") {
                    this.ovhplanfeb = element.budget;
                  } else if (element.month == "03") {
                    this.ovhplanmar = element.budget;
                  } else if (element.month == "04") {
                    this.ovhplanapr = element.budget;
                  } else if (element.month == "05") {
                    this.ovhplanmei = element.budget;
                  } else if (element.month == "06") {
                    this.ovhplanjun = element.budget;
                  } else if (element.month == "07") {
                    this.ovhplanjul = element.budget;
                  } else if (element.month == "08") {
                    this.ovhplanaug = element.budget;
                  } else if (element.month == "09") {
                    this.ovhplansep = element.budget;
                  } else if (element.month == "10") {
                    this.ovhplanokt = element.budget;
                  } else if (element.month == "11") {
                    this.ovhplannov = element.budget;
                  } else if (element.month == "12") {
                    this.ovhplandes = element.budget;
                  }
                } else if (element.actual == "Actual") {
                  if (element.month == "01") {
                    this.totalindexjan += element.budget;
                    this.ovhactjan = element.budget;
                    this.totalcmcurjan += element.budget;
                  } else if (element.month == "02") {
                    this.totalindexfeb += element.budget;
                    this.ovhactfeb = element.budget;
                    this.totalcmcurfeb += element.budget;
                  } else if (element.month == "03") {
                    this.totalindexmar += element.budget;
                    this.ovhactmar = element.budget;
                    this.totalcmcurmar += element.budget;
                  } else if (element.month == "04") {
                    this.totalindexapr += element.budget;
                    this.ovhactapr = element.budget;
                    this.totalcmcurapr += element.budget;
                  } else if (element.month == "05") {
                    this.totalindexmei += element.budget;
                    this.ovhactmei = element.budget;
                    this.totalcmcurmei += element.budget;
                  } else if (element.month == "06") {
                    this.totalindexjun += element.budget;
                    this.ovhactjun = element.budget;
                    this.totalcmcurjun += element.budget;
                  } else if (element.month == "07") {
                    this.totalindexjul += element.budget;
                    this.ovhactjul = element.budget;
                    this.totalcmcurjul += element.budget;
                  } else if (element.month == "08") {
                    this.totalindexagu += element.budget;
                    this.ovhactaug = element.budget;
                    this.totalcmcuragu += element.budget;
                  } else if (element.month == "09") {
                    this.totalindexsep += element.budget;
                    this.ovhactsep = element.budget;
                    this.totalcmcursep += element.budget;
                  } else if (element.month == "10") {
                    this.totalindexsep += element.budget;
                    this.ovhactokt = element.budget;
                    this.totalcmcurokt += element.budget;
                  } else if (element.month == "11") {
                    this.totalindexokt += element.budget;
                    this.ovhactnov = element.budget;
                    this.totalcmcurnov += element.budget;
                  } else if (element.month == "12") {
                    this.totalindexdes += element.budget;
                    this.ovhactdes = element.budget;
                    this.totalcmcurdes += element.budget;
                  }
                }
              } else if (element.category == "Preventive Maintenance") {
                if (element.actual == "Plan") {
                  if (element.month == "01") {
                    this.pmplanjan = element.budget;
                  } else if (element.month == "02") {
                    this.pmplanfeb = element.budget;
                  } else if (element.month == "03") {
                    this.pmplanmar = element.budget;
                  } else if (element.month == "04") {
                    this.pmplanapr = element.budget;
                  } else if (element.month == "05") {
                    this.pmplanmei = element.budget;
                  } else if (element.month == "06") {
                    this.pmplanjun = element.budget;
                  } else if (element.month == "07") {
                    this.pmplanjul = element.budget;
                  } else if (element.month == "08") {
                    this.pmplanaug = element.budget;
                  } else if (element.month == "09") {
                    this.pmplansep = element.budget;
                  } else if (element.month == "10") {
                    this.pmplanokt = element.budget;
                  } else if (element.month == "11") {
                    this.pmplannov = element.budget;
                  } else if (element.month == "12") {
                    this.pmplandes = element.budget;
                  }
                } else if (element.actual == "Actual") {
                  if (element.month == "01") {
                    this.totalindexjan += element.budget;
                    this.pmactjan = element.budget;
                    this.totalcmcurjan += element.budget;
                  } else if (element.month == "02") {
                    this.totalindexfeb += element.budget;
                    this.pmactfeb = element.budget;
                    this.totalcmcurfeb += element.budget;
                  } else if (element.month == "03") {
                    this.totalindexmar += element.budget;
                    this.pmactmar = element.budget;
                    this.totalcmcurmar += element.budget;
                  } else if (element.month == "04") {
                    this.totalindexapr += element.budget;
                    this.pmactapr = element.budget;
                    this.totalcmcurapr += element.budget;
                  } else if (element.month == "05") {
                    this.totalindexmei += element.budget;
                    this.pmactmei = element.budget;
                    this.totalcmcurmei += element.budget;
                  } else if (element.month == "06") {
                    this.totalindexjun += element.budget;
                    this.pmactjun = element.budget;
                    this.totalcmcurjun += element.budget;
                  } else if (element.month == "07") {
                    this.totalindexjul += element.budget;
                    this.pmactjul = element.budget;
                    this.totalcmcurjul += element.budget;
                  } else if (element.month == "08") {
                    this.totalindexagu += element.budget;
                    this.pmactaug = element.budget;
                    this.totalcmcuragu += element.budget;
                  } else if (element.month == "09") {
                    this.totalindexsep += element.budget;
                    this.pmactsep = element.budget;
                    this.totalcmcursep += element.budget;
                  } else if (element.month == "10") {
                    this.totalindexokt += element.budget;
                    this.pmactokt = element.budget;
                    this.totalcmcurokt += element.budget;
                  } else if (element.month == "11") {
                    this.totalindexnov += element.budget;
                    this.pmactnov = element.budget;
                    this.totalcmcurnov += element.budget;
                  } else if (element.month == "12") {
                    this.totalindexdes += element.budget;
                    this.pmactdes = element.budget;
                    this.totalcmcurdes += element.budget;
                  }
                }
              }
            }
            ////////////console.log(this.totalindexjan);

          });

          this.cost2.forEach((element: any, index: any) => {
            ////////////console.log(this.index);

            element.budget = parseInt(element.budget);
            element.month = parseInt(element.month);
            if (element.month == "01") {
              this.totalcmcpastjan += element.budget;
            } else if (element.month == "02") {
              this.totalcmcpastfeb += element.budget;
            } else if (element.month == "03") {
              this.totalcmcpastmar += element.budget;
            } else if (element.month == "04") {
              this.totalcmcpastapr += element.budget;
            } else if (element.month == "05") {
              this.totalcmcpastmei += element.budget;
            } else if (element.month == "06") {
              this.totalcmcpastjun += element.budget;
            } else if (element.month == "07") {
              this.totalcmcpastjul += element.budget;
            } else if (element.month == "08") {
              this.totalcmcpastagu += element.budget;
            } else if (element.month == "09") {
              this.totalcmcpastsep += element.budget;
            } else if (element.month == "10") {
              this.totalcmcpastokt += element.budget;
            } else if (element.month == "11") {
              this.totalcmcpastnov += element.budget;
            } else if (element.month == "12") {
              this.totalcmcpastdes += element.budget;
            }
          });

          this.cost.forEach((element: any) => {
            element.budget = parseInt(element.budget);
            element.month = parseInt(element.month);
            if (element.actual == "Actual") {
              if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear + element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              } else if (element.month <= this.index) {
                this.totalcurrentyear += element.budget;
              }
              ////////////console.log(this.totalcurrentyear);

            }
          });

          this.cost2.forEach((element: any) => {
            element.budget = parseInt(element.budget);
            element.month = parseInt(element.month);
            if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear + element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            } else if (element.month <= this.index) {
              this.totalpastyear += element.budget;
            }
          });


          this.costChart();


        });

      forkJoin(this.service.getCostOci2(),
              this.service.getFgOci2()).subscribe(([datacost, datafg]) => {
                // ////////////console.log(datacost);
                // ////////////console.log(datafg);
                this.datafg = datafg;
                this.dataindex = datacost;
                // this.indexcostjan =
                // ////////////console.log(this.totalfgjan);


                this.datafg.forEach((element:any, index: any) => {
                  //////////console.log(element);

                  element.month = parseInt(element.month);
                  element.fg_eq = parseInt(element.fg_eq);
                  //////////console.log(element.month);
                  if(Number.isNaN(element.fg_eq)){
                    element.fg_eq = 0;
                  }
                  // ////////////console.log(index)
                  ////////////console.log(element);
                  // ////////////console.log(this.totalindexjan);
                  // this.indexcostjan =
                  if(element.month == 1){
                    //////////console.log(this.indexcostjan);
                    //////////console.log(element.fg_eq);

                    this.indexcostjan = this.totalindexjan / element.fg_eq;
                    const firstthreedigit = String(this.indexcostjan).slice(0, 3);
                    this.indexcostjan = parseInt(firstthreedigit);
                  }
                  else if(element.month == 2){
                    this.indexcostfeb = this.totalindexfeb / element.fg_eq;
                    const firstthreedigit = String(this.indexcostfeb).slice(0, 3);
                    this.indexcostfeb = parseInt(firstthreedigit);
                  }
                  else if(element.month == 3){
                    this.indexcostmar = this.totalindexmar / element.fg_eq
                    const firstthreedigit = String(this.indexcostmar).slice(0, 3);
                    this.indexcostmar = parseInt(firstthreedigit);
                  }
                  else if(element.month == 4){
                    this.indexcostapr = this.totalindexapr / element.fg_eq
                    const firstthreedigit = String(this.indexcostapr).slice(0, 3);
                    this.indexcostapr = parseInt(firstthreedigit);
                  }
                  else if(element.month == 5){
                    this.indexcostmei = this.totalindexmei / element.fg_eq
                    const firstthreedigit = String(this.indexcostmei).slice(0, 3);
                    this.indexcostmei = parseInt(firstthreedigit);
                  }
                  else if(element.month == 6){
                    this.indexcostjun = this.totalindexjun / element.fg_eq
                    const firstthreedigit = String(this.indexcostjun).slice(0, 3);
                    this.indexcostjun = parseInt(firstthreedigit);
                  }
                  else if(element.month == 7){
                    this.indexcostjul = this.totalindexjul / element.fg_eq
                    const firstthreedigit = String(this.indexcostjul).slice(0, 3);
                    this.indexcostjul = parseInt(firstthreedigit);
                  }
                  else if(element.month == 8){
                    this.indexcostagu = this.totalindexagu / element.fg_eq
                    const firstthreedigit = String(this.indexcostagu).slice(0, 3);
                    this.indexcostagu = parseInt(firstthreedigit);
                  }
                  else if(element.month == 9){
                    this.indexcostsep = this.totalindexsep / element.fg_eq
                    const firstthreedigit = String(this.indexcostsep).slice(0, 3);
                    this.indexcostsep = parseInt(firstthreedigit);
                  }
                  else if(element.month == 10){
                    this.indexcostokt = this.totalindexokt / element.fg_eq
                    const firstthreedigit = String(this.indexcostokt).slice(0, 3);
                    this.indexcostokt = parseInt(firstthreedigit);
                  }
                  else if(element.month == 11){
                    this.indexcostnov = this.totalindexnov / element.fg_eq
                    const firstthreedigit = String(this.indexcostnov).slice(0, 3);
                    this.indexcostnov = parseInt(firstthreedigit);
                  }
                  else if(element.month == 12){
                    this.indexcostdes = this.totalindexdes / element.fg_eq
                    const firstthreedigit = String(this.indexcostdes).slice(0, 3);
                    this.indexcostdes = parseInt(firstthreedigit);
                  }


                });

                this.costChart();

              })
    });


    this.spinner.show();
    this.loaddata = await this.loaddata;
  }

  costChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.cmactjan, this.cmactfeb, this.cmactmar, this.cmactapr, this.cmactmei, this.cmactjun, this.cmactjul, this.cmactaug, this.cmactsep, this.cmactokt, this.cmactnov, this.cmactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.cmplanjan, this.cmplanfeb, this.cmplanmar, this.cmplanapr, this.cmplanmei, this.cmplanjun, this.cmplanjul, this.cmplanaug, this.cmplansep, this.cmplanokt, this.cmplannov, this.cmplandes],
        },
      ],
      series2: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.ovhactjan, this.ovhactfeb, this.ovhactmar, this.ovhactapr, this.ovhactmei, this.ovhactjun, this.ovhactjul, this.ovhactaug, this.ovhactsep, this.ovhactokt, this.ovhactnov, this.ovhactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.ovhplanjan, this.ovhplanfeb, this.ovhplanmar, this.ovhplanapr, this.ovhplanmei, this.ovhplanjun, this.ovhplanjul, this.ovhplanaug, this.ovhplansep, this.ovhplanokt, this.ovhplannov, this.ovhplandes],
        },
      ],
      series3: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.pmactjan, this.pmactfeb, this.pmactmar, this.pmactapr, this.pmactmei, this.pmactjun, this.pmactjul, this.pmactaug, this.pmactsep, this.pmactokt, this.pmactnov, this.pmactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.pmplanjan, this.pmplanfeb, this.pmplanmar, this.pmplanapr, this.pmplanmei, this.pmplanjun, this.pmplanjul, this.pmplanaug, this.pmplansep, this.pmplanokt, this.pmplannov, this.pmplandes],
        },
      ],
      series4: [
        {
          name: '2023',
          type: 'column',

          data: [this.totalcmcurjan, this.totalcmcurfeb, this.totalcmcurmar, this.totalcmcurapr, this.totalcmcurmei, this.totalcmcurjun, this.totalcmcurjul, this.totalcmcuragu, this.totalcmcursep, this.totalcmcurokt, this.totalcmcurnov, this.totalcmcurdes],
        },
        {
          name: '2022',
          type: 'column',
          data: [this.totalcmcpastjan, this.totalcmcpastfeb, this.totalcmcpastmar, this.totalcmcpastapr, this.totalcmcpastmei, this.totalcmcpastjun, this.totalcmcpastjul, this.totalcmcpastagu, this.totalcmcpastsep, this.totalcmcpastokt, this.totalcmcpastnov, this.totalcmcpastdes],

        },

      ],
      series5: [
        {
          name: '2023',
          type: 'column',

          data: [this.totalcurrentyear],
        },
        {
          name: '2022',
          type: 'column',
          data: [this.totalpastyear],

        },

      ],
      series6: [
        {
          name: 'Index Cost',
          type: 'line',

          data: [this.indexcostjan, this.indexcostfeb, this.indexcostmar, this.indexcostapr, this.indexcostmei, this.indexcostjun, this.indexcostjul, this.indexcostagu, this.indexcostsep, this.indexcostokt, this.indexcostnov, this.indexcostdes],
        },
        {
          name: 'Maintenance Cost',
          type: 'bar',
          data: [this.totalindexjan, this.totalindexfeb, this.totalindexmar, this.totalindexapr, this.totalindexmei, this.totalindexjun, this.totalindexjul, this.totalindexagu, this.totalindexsep, this.totalindexokt,this.totalindexnov, this.totalindexdes],

        },

      ],
      chart: {
        height: 600,
        type: 'line',
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 7,
          endingShape: 'rounded',

        },
      },
      export: {
        svg: {
          filename: 'Corrective_maintenance_chart',
        },
        png: {
          filename: 'Corrective_maintenance_chart',
        }
      },
      stroke: {
        width: [0, 3],
      },
      stroke2: {
        width: [3, 0],
      },
      legend: {
        position: 'top',
      },
      // stroke2: {
      //   width: [0, 0],
      // },
      // title: {
      //   // text: 'Traffic Sources',
      // },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '12px',
        },
        formatter: (x: any) => {
          return 'Rp. ' + this.numberWithCommas(x);
        },
        dropShadow: { enabled: true }


        // enabledOnSeries: [1],
      },
      dataLabels2: {
        enabled: false,
        style: {
          fontSize: '12px',
        },
        formatter: (x: any) => {
          return 'Rp. ' + this.numberWithCommas(x);
        },
        dropShadow: { enabled: true }


        // enabledOnSeries: [1],
      },
      colors2: ["#FF1654", "#3ac7e0"],
      colors: [
        '#3ac7e0',
        '#FF1654',
        // '#00ABB3',
        // '#00ABB3',
        // '#00ABB3',
        // '#607EAA',
        // '#607EAA',
        // '#607EAA',
      ],
      labels: ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'],
      labels2: ['', ''],
      xaxis: {
        // labels:{
        //   formatter: (value:number) => {
        //     return this.numberWithCommas(value);
        //   },
        // },
      },
      yaxis: [
        {
          title: {
            text: 'Correctice Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',

              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-title',
              color: "#3ac7e0"
            },
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis2: [
        {
          title: {
            text: 'Overhaul Cost',
            style: {
              // color: undefined,
              fontSize: '12px',

              fontWeight: 700,
              color: "#3ac7e0",
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis3: [
        {
          title: {
            text: 'Preventive Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',

              fontWeight: 700,
                color: "#3ac7e0",
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis4: [
        {
          title: {
            text: 'Comparison Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',

              fontWeight: 700,
              color: "#3ac7e0",
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis5: [
        {
          title: {
            text: 'Total Comparison Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',
              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-title',
              color: "#3ac7e0"
            },
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis6: [
        {
          seriesName: "Index Cost",
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF1654"
          },
          labels: {
            style: {
              color: "#FF1654"
            }
          },
          title: {
            text: "Index Cost",
            style: {
              color: "#FF1654"
            }
          }
        },
        {
          seriesName: "Index Maintenance Cost",
          opposite: false,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#3ac7e0"
          },
          title: {
            text: "Index Maintenance Cost",
            style: {
              color: "#3ac7e0"
            }
          },
          labels: {
            formatter: (value: number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },
      ],
    };
  };

  numberWithCommas(x: any) {
    var parts = x?.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

};


