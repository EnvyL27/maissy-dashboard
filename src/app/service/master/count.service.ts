import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

var api = environment.baseUrlApi;
var apiAM = environment.baseUrlApiAM;

@Injectable({
  providedIn: 'root'
})
export class CountService {
  constructor(private httpClient: HttpClient,) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public bigFiveObject: object = {};
  public bigFive: any = [];
  public bigFiveByMachine: any = [];
  public bigFiveByMachineId: any = [];
  public bigFiveByMachineName: any = [];
  public bigFiveByMachineValue: any = [];
  public bigFiveMachine: any = [];
  public bigFiveDescription: any = [];

  public tableObject: object = {};
  public table: string | any;

  public device: string | any;
  public node: string | any;
  public description: string | any;
  public machine: string | any;
  public idmachine: number | any;

  public listNodeObject: object = {};
  public listNode: any = [];
  public big5load: any;
  getBigFive() {
    this.bigFive = [];
    this.bigFiveMachine = [];
    this.bigFiveByMachineId = [];
    this.big5load = this.httpClient.get(api + "big5/get").subscribe(data => {
      this.bigFiveObject = data;
      Object.values(this.bigFiveObject).forEach(data => {
        // //////////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        //////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          // //////////////////////console.log(i)
          var arrayy = Object.keys(array[i + 1]).map(function (key) {
            return array[i + 1][key];
          });
          // //////////////////////console.log(arrayy);
          let data: object = {};
          for (let j = 0; j < arrayy.length; j++) {
            var arrayyy = Object.keys(arrayy[j]).map(function (key) {
              return arrayy[j][key];
            });
            // //////////console.log(arrayyy);
            for (let k = 0; k < arrayyy.length; k++) {
              data = {
                name: array[i],
                device: arrayyy[k],
                total: arrayyy[k + 1]
              }
              this.bigFive.splice(this.bigFive.length, 0, data);
              k++;
            }
          }
          let mach = {
            name: array[i],
            id: array[i + 1]
          }
          this.bigFiveMachine.splice(this.bigFiveMachine.length, 0, array[i]);
          this.bigFiveByMachineId.splice(this.bigFiveByMachineId.length, 0, mach);
          i += 2;
        }
      })
    });
    // return this.httpClient.get(url);
  }

  getBigFiveByMachine(namee: String, start: String, end: String) {
    this.bigFiveByMachine = [];
    this.bigFiveByMachineName = [];
    this.bigFiveByMachineValue = [];
    this.bigFiveDescription = [];
    var url = api + "big5/getbydate";
    this.httpClient.post(url, { name: namee, startDate: start, endDate: end }).subscribe(data => {
      this.bigFiveObject = data;
      // //////////////////////console.log(this.bigFiveObject);
      Object.values(this.bigFiveObject).forEach(data => {
        // //////////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          // //////////////////////console.log(data[key]);S
          return data[key];
        });
        // //////////////////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          var arrayy = Object.keys(array[i]).map(function (key) {
            return array[i][key];
          });
          const data = [
            arrayy[0],
            arrayy[1]
          ];
          const des = [
            arrayy[0],
            arrayy[2]
          ];
          this.bigFiveByMachine.splice(this.bigFiveByMachine.length, 0, data);
          this.bigFiveByMachineName.splice(this.bigFiveByMachineName.length, 0, arrayy[0]);
          this.bigFiveByMachineValue.splice(this.bigFiveByMachineValue.length, 0, arrayy[1]);
          this.bigFiveDescription.splice(this.bigFiveDescription.length, 0, des);
          // //////////////////////console.log(des);
        }
      })
    });
    // return this.bigFiveByMachineName;
  }

  insertNewNode() {
    // //////////////////////console.log(this.bigFiveByMachineId.length);
    for (let i = 0; i < this.bigFiveByMachineId.length; i++) {
      if (this.bigFiveByMachineId[i].name == this.machine) {
        this.idmachine = this.bigFiveByMachineId[i].id
        break;
      }
    };
    // //////////////////////console.log(this.idmachine);
    var url = api + "alarm/create";
    this.httpClient.post(url, { device: this.device, node: this.node, description: this.description, tableId: this.idmachine }).subscribe(data => {
      // //////////////////////console.log(data);
    });
  }

  deleteNode() {
    // //////////////////////console.log(this.bigFiveByMachineId.length);
    // //////////////////////console.log(this.idmachine);
    var url = api + "alarm/delete";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        device: this.device,
        node: this.node,
        description: this.description,
        tableId: this.idmachine
      },
    };
    this.httpClient.delete(url, options).subscribe(data => {
      // //////////////////////console.log(data);
    });
  }

  getListNode() {
    this.listNode = [];
    this.httpClient.get(api + "alarm/get").subscribe(data => {
      this.listNodeObject = data;
      Object.values(this.listNodeObject).forEach(data => {
        // //////////////////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        //////////////////////console.log(array.length);
        for (let i = 0; i < array.length; i++) {
          this.listNode.splice(this.listNode.length, 0, array[i]);
        }
      });
      // //////////////////////console.log(this.listNode);
    });
  }

  insertNewTable() {
    // //////////////////////console.log(this.bigFiveByMachineId.length);
    // //////////////////////console.log(this.idmachine);
    var url = api + "table/create";
    this.httpClient.post(url, { name: this.table }).subscribe(data => {
      // //////////////////////console.log(data);
    });
  }

  deleteTable() {
    // //////////////////////console.log(this.bigFiveByMachineId.length);
    // //////////////////////console.log(this.idmachine);
    var url = api + "table/delete";
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        name: this.table,
      },
    };
    this.httpClient.delete(url, options).subscribe(data => {
      // //////////////////////console.log(data);
    });
  }
  
  ////////////////////////////////////
  // ROUTE FOR DASHBOARD LIVE ALARM //
  ////////////////////////////////////
  getLiveAlarm() {
    return this.httpClient.get(api + 'alarm/' + "read");
  }
  ////////////////////////////
  
  ////////////////////////////
  // ROUTE FOR DASHBOARD AM //
  ////////////////////////////
  getOrder() {
    return this.httpClient.get(api + 'am/' + "getorder");
  }
  getCountTotalFinding() {
    return this.httpClient.get(api + 'am/' + "totalf");
  }
  getReadPendingExecute() {
    return this.httpClient.get(api + 'am/' + "totalreadpendingexecute");
  }
  getReadReadyExecute() {
    return this.httpClient.get(api + 'am/' + "totalreadreadyexecute");
  }
  getReadFinishExecute() {
    return this.httpClient.get(api + 'am/' + "totalreadfinishexecute");
  }
  getTotalFindingM() {
    return this.httpClient.get(api + 'am/' + "TotalFindingM");
  }
  getTotalPendingFindingM() {
    return this.httpClient.get(api + 'am/' + "totalpendingexecutem");
  }
  getTotalReadyFindingM() {
    return this.httpClient.get(api + 'am/' + "totalreadyexecutem");
  }
  getTotalFinsihFindingM() {
    return this.httpClient.get(api + 'am/' + "totalfinishexecutem");
  }
  getReadFindingPending() {
    return this.httpClient.get(api + 'am/' + "findingpending");
  }
  getFuncLoc(){
    return this.httpClient.get(api + 'am/' + "funcloc");
  }
  getFuncLocOci2(){
    return this.httpClient.get(api + 'am/' + "funclococi2");
  }
  getFuncLocFsb(){
    return this.httpClient.get(api + 'am/' + "funclocfsb");
  }
  getReadfpSection() {
    return this.httpClient.get(api + 'am/' + "findingpendingsection");
  }
  getReadfpSectionOci2() {
    return this.httpClient.get(api + 'am/' + "findingpendingsectionoci2");
  }
  getReadfpSectionFSB() {
    return this.httpClient.get(api + 'am/' + "findingpendingsectionfsb");
  }
  getReadLevelTotal() {
    return this.httpClient.get(api + 'am/' + "levelam");
  }
  getTotalFindingMoci2() {
    return this.httpClient.get(api + 'am/' + "TotalFindingMoci2");
  }
  getTotalPendingFindingMoci2() {
    return this.httpClient.get(api + 'am/' + "totalpendingexecutemoci2");
  }
  getTotalReadyFindingMoci2() {
    return this.httpClient.get(api + 'am/' + "totalreadyexecutemoci2");
  }
  getTotalFinsihFindingMoci2() {
    return this.httpClient.get(api + 'am/' + "totalfinishexecutemoci2");
  }
  getReadFindingPendingoci2() {
    return this.httpClient.get(api + 'am/' + "findingpendingoci2");
  }
  getReadLevelTotaloci2() {
    return this.httpClient.get(api + 'am/' + "levelamoci2");
  }
  getTotalFindingMfsb() {
    return this.httpClient.get(api + 'am/' + "TotalFindingMfsb");
  }
  getTotalPendingFindingMfsb() {
    return this.httpClient.get(api + 'am/' + "totalpendingexecutemfsb");
  }
  getTotalReadyFindingMfsb() {
    return this.httpClient.get(api + 'am/' + "totalreadyexecutemfsb");
  }
  getTotalFinsihFindingMfsb() {
    return this.httpClient.get(api + 'am/' + "totalfinishexecutemfsb");
  }
  getReadFindingPendingfsb() {
    return this.httpClient.get(api + 'am/' + "findingpendingfsb");
  }
  getReadLevelTotalfsb() {
    return this.httpClient.get(api + 'am/' + "levelamfsb");
  }
  getTotalFindingMutileng() {
    return this.httpClient.get(api + 'am/' + "TotalFindingMutileng");
  }
  getReadFindingPendingutileng() {
    return this.httpClient.get(api + 'am/' + "findingpendingutileng");
  }
  getReadLevelTotalutileng() {
    return this.httpClient.get(api + 'am/' + "levelamutileng");
  }
  getKategori() {
    return this.httpClient.get(api + 'am/' + "kategori");
  }
  getAmTotalData1Year(){
    return this.httpClient.get(api + 'am/' + "total1year");
  }
  getTotalFeeding(){
    return this.httpClient.get(api + 'am/' + "totalfeeding");
  }
  getTemuanHarian(){
    return this.httpClient.get(api + 'am/' + "temuanharian");
  }
  getTotalDataPost(tgl1: any,tgl2: any){
    return this.httpClient.post(api + 'am/' + "totaldatapost", {tgl1 :tgl1,tgl2: tgl2});
  }
  getTotalApproval(){
    return this.httpClient.get(api + 'am/' + "totalapproval");
  }
  getTotalApprovalOrderFinish(id_area: any){
    return this.httpClient.post(api + 'am/' + "totalapprovalorderfinish", {id_area :id_area});
  }
  getTotalApprovalShcedule(id_area: any){
    return this.httpClient.post(api + 'am/' + "totalapprovalshcedule", {id_area :id_area});
  }
  getTotalApprovalCreateOrder(id_area: any){
    return this.httpClient.post(api + 'am/' + "totalapprovalcreateorder", {id_area :id_area});
  }
  getTotalApprovalSpv(id_area: any){
    return this.httpClient.post(api + 'am/' + "totalapprovalspv", {id_area :id_area});
  }
  getTotalApprovalReadyExecution(id_area: any){
    return this.httpClient.post(api + 'am/' + "totalapprovalreadyexecution", {id_area :id_area});
  }
  getReportingHarianam(tgl: any,id_area: any){
    return this.httpClient.post(api + 'am/' + "reportingharianam", {tgl: tgl,id_area :id_area});
  }
  getTotalPartReporting(no_wo:any){
    return this.httpClient.post(api + 'am/' + "totalpartreporting",{no_wo: no_wo});
  }
  ////////////////////////////

  /////////////////////////////
  // ROUTE FOR DASHBOARD PDM //
  /////////////////////////////
  dimas() {
    return this.httpClient.get(api + 'pdm/' + "dimas");
  }
  getTemperatureLineoci1() {
    return this.httpClient.get(api + 'pdm/' + "temperaturelineoci1");
  }
  getTemperatureLineoci2() {
    return this.httpClient.get(api + 'pdm/' + "temperaturelineoci2");
  }
  getTemperatureLinefsb() {
    return this.httpClient.get(api + 'pdm/' + "temperaturelinefsb");
  }
  getAmpereLineoci1() {
    return this.httpClient.get(api + 'pdm/' + "amperelineoci1");
  }
  getAmpereLineoci2() {
    return this.httpClient.get(api + 'pdm/' + "amperelineoci2");
  }
  getAmpereLinefsb() {
    return this.httpClient.get(api + 'pdm/' + "amperelinefsb");
  }
  getVibrationLinefsb() {
    return this.httpClient.get(api + 'pdm/' + "vibrationlinefsb");
  }
  getVibrationLineoci2() {
    return this.httpClient.get(api + 'pdm/' + "vibrationlineoci2");
  }
  getVibrationLineoci1() {
    return this.httpClient.get(api + 'pdm/' + "vibrationlineoci1");
  }
  getReadTotalPdmAsset() {
    return this.httpClient.get(api + 'pdm/' + "totalpdmasset");
  }
  getReadTotalPdmAssetoci1() {
    return this.httpClient.get(api + 'pdm/' + "totalpdmassetoci1");
  }
  getReadPdmAssetoci1() {
    return this.httpClient.get(api + 'pdm/' + "pdmassetoci1");
  }
  getReadPdmAssetoci2() {
    return this.httpClient.get(api + 'pdm/' + "pdmassetoci2");
  }
  getReadPdmAssetFSB() {
    return this.httpClient.get(api + 'pdm/' + "pdmassetfsb");
  }
  getReadTotalPdmAssetoci2() {
    return this.httpClient.get(api + 'pdm/' + "totalpdmassetoci2");
  }
  getReadTotalPdmAssetfsb() {
    return this.httpClient.get(api + 'pdm/' + "totalpdmassetfsb");
  }
  getReadPdmFinish() {
    return this.httpClient.get(api + 'pdm/' + "totalreadfinishpdm");
  }
  getReadPdmFinishoci1() {
    return this.httpClient.get(api + 'pdm/' + "totalreadfinishpdmoci1");
  }
  getReadPdmFinishoci2() {
    return this.httpClient.get(api + 'pdm/' + "totalreadfinishpdmoci2");
  }
  getReadPdmFinishfsb() {
    return this.httpClient.get(api + 'pdm/' + "totalreadfinishpdmfsb");
  }
  getReadGoodAndSatis() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatis");
  }
  getReadGoodAndSatisoci1() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisoci1");
  }
  getReadGoodAndSatisoci2() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisoci2");
  }
  getReadGoodAndSatisfsb() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisfsb");
  }
  getReadGoodAndSatisoci1y() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisoci1y");
  }
  getReadGoodAndSatisoci2y() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisoci2y");
  }
  getReadGoodAndSatisfsby() {
    return this.httpClient.get(api + 'pdm/' + "totalgoodandsatisfsby");
  }
  getReadunsatissunac() {
    return this.httpClient.get(api + 'pdm/' + "totalunsatisunac");
  }
  getReadunsatissunacoci1() {
    return this.httpClient.get(api + 'pdm/' + "totalunsatisunacoci1");
  }
  getReadunsatissunacoci2() {
    return this.httpClient.get(api + 'pdm/' + "totalunsatisunacoci2");
  }
  getReadunsatissunacfsb() {
    return this.httpClient.get(api + 'pdm/' + "totalunsatisunacfsb");
  }
  getTotalAssetOci1() {
    return this.httpClient.get(api + 'pdm/' + "totalasetoci1");
  }
  getTotalAssetOci2() {
    return this.httpClient.get(api + 'pdm/' + "totalasetoci2");
  }
  getTotalAssetFsb() {
    return this.httpClient.get(api + 'pdm/' + "totalasetfsb");
  }
  getTotalOci1Good() {
    return this.httpClient.get(api + 'pdm/' + "totaloci1good");
  }
  getTotalOci1Satis() {
    return this.httpClient.get(api + 'pdm/' + "totaloci1satis");
  }
  getTotalOci1UnSatis() {
    return this.httpClient.get(api + 'pdm/' + "totaloci1unsatis");
  }
  getTotalOci1Unacc() {
    return this.httpClient.get(api + 'pdm/' + "totaloci1unacc");
  }
  getTotalOci2Good() {
    return this.httpClient.get(api + 'pdm/' + "totaloci2good");
  }
  getTotalOci2Satis() {
    return this.httpClient.get(api + 'pdm/' + "totaloci2satis");
  }
  getTotalOci2UnSatis() {
    return this.httpClient.get(api + 'pdm/' + "totaloci2unsatis");
  }
  getTotalOci2Unacc() {
    return this.httpClient.get(api + 'pdm/' + "totaloci2unacc");
  }
  getTotalFsbGood() {
    return this.httpClient.get(api + 'pdm/' + "totalfsbgood");
  }
  getTotalFsbSatis() {
    return this.httpClient.get(api + 'pdm/' + "totalfsbsatis");
  }
  getTotalFsbUnSatis() {
    return this.httpClient.get(api + 'pdm/' + "totalfsbunsatis");
  }
  getTotalFsbUnacc() {
    return this.httpClient.get(api + 'pdm/' + "totalfsbunacc");
  }
  getReadFinishTodayoci1(tgl1: any) {
    return this.httpClient.post(api + 'pdm/' + "finishtodaylistoci1", {tgl1 :tgl1});
  }
  getReadHistoryCheckoci1(tgl1: any, tgl2: any) {
    return this.httpClient.post(api + 'pdm/' + "historycheckoci1", {tgl1 :tgl1, tgl2 : tgl2});
  }
  getReadHistoryCheckoci2(tgl1: any, tgl2: any) {
    return this.httpClient.post(api + 'pdm/' + "historycheckoci2", {tgl1 :tgl1, tgl2 : tgl2});
  }
  getReadHistoryCheckfsb(tgl1: any, tgl2: any) {
    return this.httpClient.post(api + 'pdm/' + "historycheckfsb", {tgl1 :tgl1, tgl2 : tgl2});
  }
  getReadFinishTodayoci1TestName() {
    return this.httpClient.get(api + 'pdm/' + "finishtodaylistoci1testname");
  }
  getReadFinishTodayoci2(tgl1: any) {
    return this.httpClient.post(api + 'pdm/' + "finishtodaylistoci2", {tgl1 :tgl1});
  }
  getReadFinishTodayfsb(tgl1: any) {
    return this.httpClient.post(api + 'pdm/' + "finishtodaylistfsb", {tgl1 :tgl1});
  }
  getReadFinishTodayoci1abnormal() {
    return this.httpClient.get(api + 'pdm/' + "finishtodaylistoci1abnormal");
  }
  getReadFinishTodayoci2abnormal() {
    return this.httpClient.get(api + 'pdm/' + "finishtodaylistoci2abnormal");
  }
  getReadFinishTodayfsbabnormal() {
    return this.httpClient.get(api + 'pdm/' + "finishtodaylistfsbabnormal");
  }
  getNotePdm () {
    return this.httpClient.get(api + 'pdm/' + "notepdm");
  }
  getOci1fNotFinish(){
    return this.httpClient.get(api + 'pdm/' + "oci1fnotfinish");
  }
  getOci2fNotFinish(){
    return this.httpClient.get(api + 'pdm/' + "oci2fnotfinish");
  }
  getFsbfFinish(){
    return this.httpClient.get(api + 'pdm/' + "fsbfnotfinish");
  }
  getFsbfNotFinish(){
    return this.httpClient.get(api + 'pdm/' + "fsbfnotfinish");
  }
  getOci1Valuemonth(tgl : any){
    return this.httpClient.post(api + 'pdm/' + "oci1valuepermonth", {tgl :tgl});
  }
  getOci2Valuemonth(tgl : any){
    return this.httpClient.post(api + 'pdm/' + "oci2valuepermonth", {tgl :tgl});
  }
  getFsbValuemonth(tgl : any){
    return this.httpClient.post(api + 'pdm/' + "fsbvaluepermonth", {tgl :tgl});
  }
  ////////////////////////////

  ////////////////////////////////
  // ROUTE FOR DASHBOARD PDM ON //
  ////////////////////////////////
  getCvPack1(){
    return this.httpClient.get(api + 'pdm-online/' + "cv_pack1");
  }
  getNodeRedTable(){
    return this.httpClient.get(api + 'pdm-online/' + "tables");
  }
  getValueLimit(){
    return this.httpClient.get(api + 'pdm-online/' + "limit");
  }
  postValueLimit(table_name : string,satis_limit : string, unsatis_limit : string, unaccept_limit : string){
    return this.httpClient.post(api + 'pdm-online/' + "store", {table_name : table_name, satis_limit : satis_limit, unsatis_limit : unsatis_limit, unaccept_limit : unaccept_limit});
  }

  ////////////////////////////

  //////////////////////////////
  // ROUTE FOR DASHBOARD COST //
  //////////////////////////////
  getCostOci1(){
    return this.httpClient.get(api + 'cost/' + "costoci1");
  }
  getCostOci1Past(){
    return this.httpClient.get(api + 'cost/' + "costoci1past");
  }
  getFgOci1(){
    return this.httpClient.get(api + 'cost/' + "fgoci1");
  }
  getCostOci2(){
    return this.httpClient.get(api + 'cost/' + "costoci2");
  }
  getCostOci2Past(){
    return this.httpClient.get(api + 'cost/' + "costoci2past");
  }
  getFgOci2(){
    return this.httpClient.get(api + 'cost/' + "fgoci2");
  }
  getCostFsb(){
    return this.httpClient.get(api + 'cost/' + "costfsb");
  }
  getCostFsbPast(){
    return this.httpClient.get(api + 'cost/' + "costfsbpast");
  }
  getFgFsb(){
    return this.httpClient.get(api + 'cost/' + "fgfsb");
  }
  ////////////////////////////

  //////////////////////////////
  // ROUTE FOR DASHBOARD CILT //
  //////////////////////////////
  getCurrentCycle(){
    return this.httpClient.get(api + 'cilt/' + "curcycle");
  }
  getCiltOci1(){
    return this.httpClient.get(api + 'cilt/' + "ciltoci1");
  }
  getCiltOci2(){
    return this.httpClient.get(api + 'cilt/' + "ciltoci2");
  }
  getCiltFsb(){
    return this.httpClient.get(api + 'cilt/' + "ciltfsb");
  }
  ////////////////////////////

  getOilProduct () {
    return this.httpClient.get(api + "oilproduct");
  }
  getGreaseProduct () {
    return this.httpClient.get(api + "greaseproduct");
  }
  getSpraysProduct () {
    return this.httpClient.get(api + "spraysproduct");
  }
  getMainenanceProduct () {
    return this.httpClient.get(api + "maintenanceproduct");
  }
  getPasteProduct () {
    return this.httpClient.get(api + "pasteproduct");
  }
  getInject(){
    return this.httpClient.get(api + "injection");
  }
  getBottle(){
    return this.httpClient.get(api + "bottle");
  }
  getFillerPetLine1(){
    return this.httpClient.get(api + "fillerpetline1");
  }
  getKrones(){
    return this.httpClient.get(api + "krones");
  }
  getSanyu(){
    return this.httpClient.get(api + "sanyu");
  }
  getLabeller(){
    return this.httpClient.get(api + "labeller");
  }
  getDivider(){
    return this.httpClient.get(api + "divider");
  }
  getSheetFeeder(){
    return this.httpClient.get(api + "sheetfeeder");
  }
  getShrinkTray(){
    return this.httpClient.get(api + "shrinktray");
  }
  getPackConveyor(){
    return this.httpClient.get(api + "packconveyor");
  }
  getPalletConveyor(){
    return this.httpClient.get(api + "palletconveyor");
  }
  getPalletiser(){
    return this.httpClient.get(api + "palletiser");
  }
  getPackRoller(){
    return this.httpClient.get(api + "packroller");
  }
  getInjectionMolderPt2(){
    return this.httpClient.get(api + "injectionmolderpt2");
  }
  getBottleBlowerPt2(){
    return this.httpClient.get(api + "bottleblowerpt2");
  }
  getFillerPt2(){
    return this.httpClient.get(api + "fillerpt2");
  }
  getConveyorPt2(){
    return this.httpClient.get(api + "conveyorpt2");
  }
  getLabellerPt2(){
    return this.httpClient.get(api + "labellerpt2");
  }
  getSanyuPt2(){
    return this.httpClient.get(api + "sanyupt2");
  }
  getCaserPt2(){
    return this.httpClient.get(api + "caserpt2");
  }
  getSheetFeederPt2(){
    return this.httpClient.get(api + "sheetfeederpt2");
  }
  getPackConveyorPt2(){
    return this.httpClient.get(api + "packconveyorpt2");
  }
  getPalletConveyorPt2(){
    return this.httpClient.get(api + "palletconveyorpt2");
  }
  getPalletiserPt2(){
    return this.httpClient.get(api + "palletiserpt2");
  }
  getOffPackMain(){
    return this.httpClient.get(api + "offpackmain");
  }
  getPet1(){
    return this.httpClient.get(api + "pet1");
  }
  getPet2(){
    return this.httpClient.get(api + "pet2");
  }
  getPress1(){
    return this.httpClient.get(api + "press1");
  }
  getPress2(){
    return this.httpClient.get(api + "press2");
  }
  getCip(){
    return this.httpClient.get(api + "cip");
  }
  getOxonia(){
    return this.httpClient.get(api + "oxonia");
  }
  getContainerOff(){
    return this.httpClient.get(api + "containeroff");
  }
  getRobotpackerOff(){
    return this.httpClient.get(api + "robopackeroff");
  }
  getResealerOff(){
    return this.httpClient.get(api + "resealeroff");
  }
  getPackConveyorOff(){
    return this.httpClient.get(api + "packconveyoroff");
  }
  getSectionDoc(){
    return this.httpClient.get(api + "section");
  }
  getDbDoc(id: any){
    return this.httpClient.get(api + "database/" + id);
  }
  getTableDoc(id: any){
    return this.httpClient.get(api + "table/" + id);
  }

  /////////////////////////////
  // ROUTE FOR PR DASHBOARD  //
  /////////////////////////////
  getTotalRequest(){
    return this.httpClient.get(api + "pr/" + "totalreq");
  }
  getTotalNumber(){
    return this.httpClient.get(api + "pr/" + "totalprnumber");
  }
  getTotalVendor1(){
    return this.httpClient.get(api + "pr/" + "totalvendor1"); 
  }
  getTotalVendor2(){
    return this.httpClient.get(api + "pr/" + "totalvendor2");
  }

  /////////////////////////////
  // ROUTE FOR AM CHECKSHEET //
  /////////////////////////////

  //PR MONITORING//
  getPrAllData(){
    return this.httpClient.get(apiAM + '/pr/');
  }
  getPrbyId(id : any){
    return this.httpClient.get(apiAM + '/pr/get/' + id);
  }
  getPrAllSection(){
    return this.httpClient.get(apiAM + '/pr/sect');
  }
  postPrData(formData : any){
    return this.httpClient.post(apiAM + '/pr/store', formData);
  }
  updatePrData(formData : any, id : any){
    return this.httpClient.put(apiAM + '/pr/update/' + id, formData);
  }
  deletePrData(id : any){
    return this.httpClient.delete(apiAM + '/pr/delete/' + id);
  }

  //USER LEVEL//
  getTableUser(){
    return this.httpClient.get(apiAM + '/users/');
  }
  getTableUserById(id : any){
    return this.httpClient.get(apiAM + '/users/get/' + id);
  }
  updateTableUser(formData : any, id : any){
    return this.httpClient.put(apiAM + '/users/update/' + id, formData);
  }

  //TEMUAN INPUT//
  getTemuanHdata(){
    return this.httpClient.get(apiAM + '/temuan/');
  }
  getTemuanDdata(){
    return this.httpClient.get(apiAM + '/temuand/');
  }

  //IFLOTX SERVICE//
  getIflotxData(){
    return this.httpClient.get(apiAM + '/sap/iflotx');
  }
  getqpgtData(){
    return this.httpClient.get(apiAM + '/sap/qpgt');
  }
  getqpctData(){
    return this.httpClient.get(apiAM + '/sap/qpct');
  }

  //VENDOR SERVICE//
  getVendorData(){
    return this.httpClient.get(apiAM + '/pr/vendor');
  }
};
