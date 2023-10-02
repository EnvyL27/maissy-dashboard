import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs';

var api = environment.baseUrlApi;

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
        // ////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        // ////////console.log(array);
        for (let i = 0; i < array.length; i++) {
          // ////////console.log(i)
          var arrayy = Object.keys(array[i + 1]).map(function (key) {
            return array[i + 1][key];
          });
          // ////////console.log(arrayy);
          let data: object = {};
          for (let j = 0; j < arrayy.length; j++) {
            var arrayyy = Object.keys(arrayy[j]).map(function (key) {
              return arrayy[j][key];
            });
            // ////////console.log(arrayyy);
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
      // ////////console.log(this.bigFiveObject);
      Object.values(this.bigFiveObject).forEach(data => {
        // ////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          // ////////console.log(data[key]);S
          return data[key];
        });
        // ////////console.log(array);
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
          // ////////console.log(des);
        }
      })
    });
    // return this.bigFiveByMachineName;
  }

  insertNewNode() {
    // ////////console.log(this.bigFiveByMachineId.length);
    for (let i = 0; i < this.bigFiveByMachineId.length; i++) {
      if (this.bigFiveByMachineId[i].name == this.machine) {
        this.idmachine = this.bigFiveByMachineId[i].id
        break;
      }
    };
    // ////////console.log(this.idmachine);
    var url = api + "alarm/create";
    this.httpClient.post(url, { device: this.device, node: this.node, description: this.description, tableId: this.idmachine }).subscribe(data => {
      // ////////console.log(data);
    });
  }

  deleteNode() {
    // ////////console.log(this.bigFiveByMachineId.length);
    // ////////console.log(this.idmachine);
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
      // ////////console.log(data);
    });
  }

  getListNode() {
    this.listNode = [];
    this.httpClient.get(api + "alarm/get").subscribe(data => {
      this.listNodeObject = data;
      Object.values(this.listNodeObject).forEach(data => {
        // ////////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        ////////console.log(array.length);
        for (let i = 0; i < array.length; i++) {
          this.listNode.splice(this.listNode.length, 0, array[i]);
        }
      });
      // ////////console.log(this.listNode);
    });
  }

  insertNewTable() {
    // ////////console.log(this.bigFiveByMachineId.length);
    // ////////console.log(this.idmachine);
    var url = api + "table/create";
    this.httpClient.post(url, { name: this.table }).subscribe(data => {
      // ////////console.log(data);
    });
  }

  deleteTable() {
    // ////////console.log(this.bigFiveByMachineId.length);
    // ////////console.log(this.idmachine);
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
      // ////////console.log(data);
    });
  }
  getOrder() {
    return this.httpClient.get(api + "getorder");
  }
  getTemperatureLineoci1() {
    return this.httpClient.get(api + "temperaturelineoci1");
  }

  getTemperatureLineoci2() {
    return this.httpClient.get(api + "temperaturelineoci2");
  }
  getTemperatureLinefsb() {
    return this.httpClient.get(api + "temperaturelinefsb");
  }
  getAmpereLineoci1() {
    return this.httpClient.get(api + "amperelineoci1");
  }
  getAmpereLineoci2() {
    return this.httpClient.get(api + "amperelineoci2");
  }
  getAmpereLinefsb() {
    return this.httpClient.get(api + "amperelinefsb");
  }
  getVibrationLinefsb() {
    return this.httpClient.get(api + "vibrationlinefsb");
  }
  getVibrationLineoci2() {
    return this.httpClient.get(api + "vibrationlineoci2");
  }
  getVibrationLineoci1() {
    return this.httpClient.get(api + "vibrationlineoci1");
  }
  getCountTotalFinding() {
    return this.httpClient.get(api + "totalf");
  }
  getReadPendingExecute() {
    return this.httpClient.get(api + "totalreadpendingexecute");
  }
  getReadReadyExecute() {
    return this.httpClient.get(api + "totalreadreadyexecute");
  }
  getReadFinishExecute() {
    return this.httpClient.get(api + "totalreadfinishexecute");
  }
  getReadTotalPdmAsset() {
    return this.httpClient.get(api + "totalpdmasset");
  }
  getReadTotalPdmAssetoci1() {
    return this.httpClient.get(api + "totalpdmassetoci1");
  }
  getReadPdmAssetoci1() {
    return this.httpClient.get(api + "pdmassetoci1");
  }
  getReadPdmAssetoci2() {
    return this.httpClient.get(api + "pdmassetoci2");
  }
  getReadPdmAssetFSB() {
    return this.httpClient.get(api + "pdmassetfsb");
  }
  getReadTotalPdmAssetoci2() {
    return this.httpClient.get(api + "totalpdmassetoci2");
  }
  getReadTotalPdmAssetfsb() {
    return this.httpClient.get(api + "totalpdmassetfsb");
  }
  getReadPdmFinish() {
    return this.httpClient.get(api + "totalreadfinishpdm");
  }
  getReadPdmFinishoci1() {
    return this.httpClient.get(api + "totalreadfinishpdmoci1");
  }
  getReadPdmFinishoci2() {
    return this.httpClient.get(api + "totalreadfinishpdmoci2");
  }
  getReadPdmFinishfsb() {
    return this.httpClient.get(api + "totalreadfinishpdmfsb");
  }
  getReadGoodAndSatis() {
    return this.httpClient.get(api + "totalgoodandsatis");
  }
  getReadGoodAndSatisoci1() {
    return this.httpClient.get(api + "totalgoodandsatisoci1");
  }
  getReadGoodAndSatisoci2() {
    return this.httpClient.get(api + "totalgoodandsatisoci2");
  }
  getReadGoodAndSatisfsb() {
    return this.httpClient.get(api + "totalgoodandsatisfsb");
  }
  getReadGoodAndSatisoci1y() {
    return this.httpClient.get(api + "totalgoodandsatisoci1y");
  }
  getReadGoodAndSatisoci2y() {
    return this.httpClient.get(api + "totalgoodandsatisoci2y");
  }
  getReadGoodAndSatisfsby() {
    return this.httpClient.get(api + "totalgoodandsatisfsby");
  }
  getReadunsatissunac() {
    return this.httpClient.get(api + "totalunsatisunac");
  }
  getReadunsatissunacoci1() {
    return this.httpClient.get(api + "totalunsatisunacoci1");
  }
  getReadunsatissunacoci2() {
    return this.httpClient.get(api + "totalunsatisunacoci2");
  }
  getReadunsatissunacfsb() {
    return this.httpClient.get(api + "totalunsatisunacfsb");
  }
  getTotalAssetOci1() {
    return this.httpClient.get(api + "totalasetoci1");
  }
  getTotalAssetOci2() {
    return this.httpClient.get(api + "totalasetoci2");
  }
  getTotalAssetFsb() {
    return this.httpClient.get(api + "totalasetfsb");
  }
  getTotalOci1Good() {
    return this.httpClient.get(api + "totaloci1good");
  }
  getTotalOci1Satis() {
    return this.httpClient.get(api + "totaloci1satis");
  }
  getTotalOci1UnSatis() {
    return this.httpClient.get(api + "totaloci1unsatis");
  }
  getTotalOci1Unacc() {
    return this.httpClient.get(api + "totaloci1unacc");
  }
  getTotalOci2Good() {
    return this.httpClient.get(api + "totaloci2good");
  }
  getTotalOci2Satis() {
    return this.httpClient.get(api + "totaloci2satis");
  }
  getTotalOci2UnSatis() {
    return this.httpClient.get(api + "totaloci2unsatis");
  }
  getTotalOci2Unacc() {
    return this.httpClient.get(api + "totaloci2unacc");
  }
  getTotalFsbGood() {
    return this.httpClient.get(api + "totalfsbgood");
  }
  getTotalFsbSatis() {
    return this.httpClient.get(api + "totalfsbsatis");
  }
  getTotalFsbUnSatis() {
    return this.httpClient.get(api + "totalfsbunsatis");
  }
  getTotalFsbUnacc() {
    return this.httpClient.get(api + "totalfsbunacc");
  }
  getTotalFindingM() {
    return this.httpClient.get(api + "TotalFindingM");
  }
  getTotalPendingFindingM() {
    return this.httpClient.get(api + "totalpendingexecutem");
  }
  getTotalReadyFindingM() {
    return this.httpClient.get(api + "totalreadyexecutem");
  }
  getTotalFinsihFindingM() {
    return this.httpClient.get(api + "totalfinishexecutem");
  }
  getReadFindingPending() {
    return this.httpClient.get(api + "findingpending");
  }
  getFuncLoc(){
    return this.httpClient.get(api + "funcloc");
  }
  getFuncLocOci2(){
    return this.httpClient.get(api + "funclococi2");
  }
  getFuncLocFsb(){
    return this.httpClient.get(api + "funclocfsb");
  }
  getReadfpSection() {
    return this.httpClient.get(api + "findingpendingsection");
  }
  getReadfpSectionOci2() {
    return this.httpClient.get(api + "findingpendingsectionoci2");
  }
  getReadfpSectionFSB() {
    return this.httpClient.get(api + "findingpendingsectionfsb");
  }
  getReadLevelTotal() {
    return this.httpClient.get(api + "levelam");
  }
  getTotalFindingMoci2() {
    return this.httpClient.get(api + "TotalFindingMoci2");
  }
  getTotalPendingFindingMoci2() {
    return this.httpClient.get(api + "totalpendingexecutemoci2");
  }
  getTotalReadyFindingMoci2() {
    return this.httpClient.get(api + "totalreadyexecutemoci2");
  }
  getTotalFinsihFindingMoci2() {
    return this.httpClient.get(api + "totalfinishexecutemoci2");
  }
  getReadFindingPendingoci2() {
    return this.httpClient.get(api + "findingpendingoci2");
  }
  getReadLevelTotaloci2() {
    return this.httpClient.get(api + "levelamoci2");
  }
  getTotalFindingMfsb() {
    return this.httpClient.get(api + "TotalFindingMfsb");
  }
  getTotalPendingFindingMfsb() {
    return this.httpClient.get(api + "totalpendingexecutemfsb");
  }
  getTotalReadyFindingMfsb() {
    return this.httpClient.get(api + "totalreadyexecutemfsb");
  }
  getTotalFinsihFindingMfsb() {
    return this.httpClient.get(api + "totalfinishexecutemfsb");
  }
  getReadFindingPendingfsb() {
    return this.httpClient.get(api + "findingpendingfsb");
  }
  getReadLevelTotalfsb() {
    return this.httpClient.get(api + "levelamfsb");
  }

  getTotalFindingMutileng() {
    return this.httpClient.get(api + "TotalFindingMutileng");
  }
  getReadFindingPendingutileng() {
    return this.httpClient.get(api + "findingpendingutileng");
  }
  getReadLevelTotalutileng() {
    return this.httpClient.get(api + "levelamutileng");
  }

  getReadFinishTodayoci1(tgl1: any) {
    return this.httpClient.post(api + "finishtodaylistoci1", {tgl1 :tgl1});
  }

  getReadFinishTodayoci1TestName() {
    return this.httpClient.get(api + "finishtodaylistoci1testname");
  }
  getReadFinishTodayoci2(tgl1: any) {
    return this.httpClient.post(api + "finishtodaylistoci2", {tgl1 :tgl1});
  }
  getReadFinishTodayfsb(tgl1: any) {
    return this.httpClient.post(api + "finishtodaylistfsb", {tgl1 :tgl1});
  }
  getReadFinishTodayoci1abnormal() {
    return this.httpClient.get(api + "finishtodaylistoci1abnormal");
  }
  getReadFinishTodayoci2abnormal() {
    return this.httpClient.get(api + "finishtodaylistoci2abnormal");
  }
  getReadFinishTodayfsbabnormal() {
    return this.httpClient.get(api + "finishtodaylistfsbabnormal");
  }
  getKategori() {
    return this.httpClient.get(api + "kategori");
  }
  getNotePdm () {
    return this.httpClient.get(api + "notepdm");
  }
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
  getOci1fNotFinish(){
    return this.httpClient.get(api + "oci1fnotfinish");
  }
  getOci2fNotFinish(){
    return this.httpClient.get(api + "oci2fnotfinish");
  }
  getFsbfFinish(){
    return this.httpClient.get(api + "fsbfnotfinish");
  }
  getFsbfNotFinish(){
    return this.httpClient.get(api + "fsbfnotfinish");
  }
  getOci1Valuemonth(){
    return this.httpClient.get(api + "oci1valuepermonth");
  }
  getOci2Valuemonth(){
    return this.httpClient.get(api + "oci2valuepermonth");
  }
  getFsbValuemonth(){
    return this.httpClient.get(api + "fsbvaluepermonth");
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
  getAmTotalData1Year(){
    return this.httpClient.get(api + "total1year");
  }
  getTotalFeeding(){
    return this.httpClient.get(api + "totalfeeding");
  }
  getTotalDataPost(tgl1: any,tgl2: any){
    return this.httpClient.post(api + "totaldatapost", {tgl1 :tgl1,tgl2: tgl2});
  }
  getTotalApproval(){
    return this.httpClient.get(api + "totalapproval");
  }
  getTotalApprovalOrderFinish(id_area: any){
    return this.httpClient.post(api + "totalapprovalorderfinish", {id_area :id_area});
  }
  getTotalApprovalShcedule(id_area: any){
    return this.httpClient.post(api + "totalapprovalshcedule", {id_area :id_area});
  }
  getTotalApprovalCreateOrder(id_area: any){
    return this.httpClient.post(api + "totalapprovalcreateorder", {id_area :id_area});
  }
  getTotalApprovalSpv(id_area: any){
    return this.httpClient.post(api + "totalapprovalspv", {id_area :id_area});
  }
  getTotalApprovalReadyExecution(id_area: any){
    return this.httpClient.post(api + "totalapprovalreadyexecution", {id_area :id_area});
  }
  getReportingHarianam(tgl: any,id_area: any){
    return this.httpClient.post(api + "reportingharianam", {tgl: tgl,id_area :id_area});
  }
  getTotalPartReporting(no_wo:any){
    return this.httpClient.post(api + "totalpartreporting",{no_wo: no_wo});
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
  getCostOci1(){
    return this.httpClient.get(api + "costoci1");
  }
  getCostOci1Past(){
    return this.httpClient.get(api + "costoci1past");
  }
  getFgOci1(){
    return this.httpClient.get(api + "fgoci1");
  }
  getCostOci2(){
    return this.httpClient.get(api + "costoci2");
  }
  getCostOci2Past(){
    return this.httpClient.get(api + "costoci2past");
  }
  getFgOci2(){
    return this.httpClient.get(api + "fgoci2");
  }
  getCostFsb(){
    return this.httpClient.get(api + "costfsb");
  }
  getCostFsbPast(){
    return this.httpClient.get(api + "costfsbpast");
  }
  getFgFsb(){
    return this.httpClient.get(api + "fgfsb");
  }
  getCurrentCycle(){
    return this.httpClient.get(api + "curcycle");
  }
  getCiltOci1(){
    return this.httpClient.get(api + "ciltoci1");
  }
  getCiltOci2(){
    return this.httpClient.get(api + "ciltoci2");
  }
  getCiltFsb(){
    return this.httpClient.get(api + "ciltfsb");
  }
};
