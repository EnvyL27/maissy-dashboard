import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { filter, first } from 'rxjs';

@Component({
  selector: 'app-temuan-input',
  templateUrl: './temuan-input.component.html',
  styleUrls: ['./temuan-input.component.css']
})
export class TemuanInputComponent implements OnInit {
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
  listObj: boolean = false
  listObjDetail: boolean = false
  listDmg: boolean = false
  listDmgDetail: boolean = false
  listCc: boolean = false
  listCcDetail: boolean = false
  listFuncloc: boolean = false
  uploadPhotoSrc: any
  uploadPhotoFile !: File;
  selectedFile!: File;
  areaResults = [];
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  form!: FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");
  validateSubmit: boolean = false
  prData: any
  target: any;
  section: any;
  sectionlist: any = []
  getcolumn: any = []
  iflotx: any = []
  area: any;
  level: any;
  filteriflotxarea: any[] = []
  filteriflotxsection: any[] = []
  ifloxtdata: any[] = []
  currentPage = 0
  currentPage2 = 0
  currentPage3 = 1
  currentPage4 = 0
  searchText: any
  funclocShow: any
  objShow: any
  objShowDetail: any
  dmgShow: any
  dmgShowDetail: any
  ccShow: any
  ccShowDetail: any
  constructor(
    private service: CountService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,) { }

  submitted() {
    // this.router.navigate(['/pr_list']), {
    //   queryParams: { successAlert: true },

    // };
    this.router.navigateByUrl('/pr_list', { state: { successAlert: true }, })
  }

  selectFuncLoc(id: any) {
    //console.log(id);
    this.funclocShow = id
    this.listFuncloc = false
  }

  selectObj(id: any) {
    //console.log(id);
    this.objShow = id
    this.listObj = false
  }
  selectObjDetail(id: any) {
    //console.log(id);
    this.objShowDetail = id
    this.listObjDetail = false
  }
  selectDmg(id: any) {
    //console.log(id);
    this.dmgShow = id
    this.listDmg = false
  }
  selectDmgDetail(id: any) {
    //console.log(id);
    this.dmgShowDetail = id
    this.listDmgDetail = false
  }
  selectCc(id: any) {
    //console.log(id);
    this.ccShow = id
    this.listCc = false
  }
  selectCcDetail(id: any) {
    //console.log(id);
    this.ccShowDetail = id
    this.listCcDetail = false
  }

  validate() {
    this.validateSubmit = !this.validateSubmit
  }
  validateFuncLoc() {
    this.listFuncloc = !this.listFuncloc
  }
  validateObj() {
    this.listObj = !this.listObj
  }
  validateObjDetail() {
    this.listObjDetail = !this.listObjDetail
  }
  validateDmg() {
    this.listDmg = !this.listDmg
  }
  validateDmgDetail() {
    this.listDmgDetail = !this.listDmgDetail
  }
  validateCc() {
    this.listCc = !this.listCc
  }
  validateCcDetail() {
    this.listCcDetail = !this.listCcDetail
  }
  funcloc() {
    this.listFuncloc = !this.listFuncloc
    //console.log(this.filteriflotxarea);

  }
  object() {
    this.listObj = !this.listObj
    this.qpgtSelect()
    // //console.log(this.filteriflotxarea);

  }
  objectDetail() {
    this.listObjDetail = !this.listObjDetail
    this.qpctSelect()
    // //console.log(this.filteriflotxarea);

  }
  damage() {
    this.listDmg = !this.listDmg
    this.dmgSelect()
    // //console.log(this.filteriflotxarea);

  }
  damageDetail() {
    this.listDmgDetail = !this.listDmgDetail
    this.dmgDetailSelect()
    // //console.log(this.filteriflotxarea);

  }
  causeCode() {
    this.listCc = !this.listCc
    this.ccSelect()
    // //console.log(this.filteriflotxarea);

  }
  ccDetail() {
    this.listCcDetail = !this.listCcDetail
    this.ccDetailSelect()
    // //console.log(this.filteriflotxarea);

  }

  areaSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    //console.log(this.area);

    this.service.getPrAllSection().subscribe(data => {
      ////////console.log(data);

      this.prData = data
      this.prData.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.sectionlist.push(element)
        }
      });
    })


  }

  levelSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    //console.log(this.area);

    this.service.getPrAllSection().subscribe(data => {
      ////////console.log(data);

      this.prData = data
      this.prData.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.sectionlist.push(element)
        }
      });
    })


  }

  sectionSelect($event: any) {
    this.ifloxtdata = []
    this.section = $event;
    this.service.getIflotxData().subscribe(data => {
      this.getcolumn = data
      this.getcolumn.forEach((element: any) => {
        this.filteriflotxarea.push(this.iflotxSelectArea(element.TPLNR))
        this.filteriflotxsection.push(this.iflotxSelectSection(element.TPLNR))
      });
      if (this.area == 1) {
        this.getcolumn.forEach((element: any, index: number) => {
          if (this.iflotxSelectArea(element.TPLNR) == 'OCI1') {
            if (this.section == 'Preparation') {
              if (this.iflotxSelectSection(element.TPLNR) == 'PREP') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Injection') {
              if (this.iflotxSelectSection(element.TPLNR) == 'INJT') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Blow') {
              if (this.iflotxSelectSection(element.TPLNR) == 'BLOW') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Packing') {
              if (this.iflotxSelectSection(element.TPLNR) == 'PACK') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Preform Transfer') {
              if (this.iflotxSelectSection(element.TPLNR) == 'PREF') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Filling') {
              if (this.iflotxSelectSection(element.TPLNR) == 'FILL') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            } else if (this.section == 'Sterilisasi') {
              if (this.iflotxSelectSection(element.TPLNR) == 'STU1') {
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }

          }
        });
        //console.log(this.ifloxtdata);
      }
    })
  }

  qgptData: any
  qgptDataFiltered: any[] = []
  qpgtSelect() {
    this.qgptData = []
    this.qgptDataFiltered = []
    this.service.getqpgtData().subscribe(data => {
      this.qgptData = data
      this.qgptData.forEach((element: any) => {
        if (element.KATALOGART == 'B') {
          this.qgptDataFiltered.push(element);

        }
      });
    })
  }

  qgctData: any
  qgctDataFiltered: any[] = []
  qpctSelect() {
    this.qgctData = []
    this.qgctDataFiltered = []
    // Split the string using comma as the delimiter
    const parts = this.objShow.split(',');

    // Get the first word (trimmed to remove leading/trailing spaces)
    const firstWord = parts[0].trim();
    //console.log(firstWord);

    this.service.getqpctData().subscribe(data => {
      //console.log(data);

      this.qgctData = data
      this.qgctData.forEach((element: any) => {
        if (element.CODEGRUPPE == firstWord) {
          if (element.KATALOGART == 'B') {
            this.qgctDataFiltered.push(element);
          }
        }
      });
      //console.log(this.qgctDataFiltered);

    })

  }

  dmgData: any
  dmgDataFiltered: any[] = []
  dmgSelect() {
    this.dmgData = []
    this.dmgDataFiltered = []
    this.service.getqpgtData().subscribe(data => {
      this.dmgData = data
      this.dmgData.forEach((element: any) => {
        if (element.KATALOGART == 'C') {
          this.dmgDataFiltered.push(element);

        }
      });
    })
  }

  dmgDetailData: any
  dmgDetailDataFiltered: any[] = []
  dmgDetailLength: any
  dmgDetailSelect() {
    this.currentPage3 = 0
    this.dmgDetailData = []
    this.dmgDetailDataFiltered = []
    // Split the string using comma as the delimiter
    const parts = this.dmgShow.split(',');

    // Get the first word (trimmed to remove leading/trailing spaces)
    const firstWord = parts[0].trim();
    //console.log(firstWord);

    this.service.getqpctData().subscribe(data => {
      //console.log(data);
      this.dmgDetailData = data
      this.dmgDetailDataFiltered = this.dmgDetailData.filter((element: any) => {
        return element.CODEGRUPPE == firstWord
      })
      //console.log(this.dmgDetailDataFiltered.length);
      if (this.dmgDetailDataFiltered.length < 10) {
        this.dmgDetailLength = this.dmgDetailDataFiltered.length
      }else if(this.dmgDetailDataFiltered.length > 10){
        this.dmgDetailLength = 10
      }
    })
  }

  ccData: any
  ccFiltered: any[] = []
  ccSelect() {
    this.ccData = []
    this.ccFiltered = []
    this.service.getqpgtData().subscribe(data => {
      this.ccData = data
      this.ccData.forEach((element: any) => {
        if (element.KATALOGART == '5') {
          this.ccFiltered.push(element);

        }
      });
    })
  }

  ccDetailData: any
  ccDetailDataFiltered: any[] = []
  ccDetailLength: any
  ccDetailSelect() {
    this.currentPage3 = 0
    this.ccDetailData = []
    this.ccDetailDataFiltered = []
    // Split the string using comma as the delimiter
    const parts = this.dmgShow.split(',');

    // Get the first word (trimmed to remove leading/trailing spaces)
    const firstWord = parts[0].trim();
    //console.log(firstWord);

    this.service.getqpctData().subscribe(data => {
      //console.log(data);
      this.ccDetailData = data
      this.ccDetailDataFiltered = this.ccDetailData.filter((element: any) => {
        return element.CODEGRUPPE == firstWord
      })
      //console.log(this.ccDetailDataFiltered.length);
      if (this.ccDetailDataFiltered.length < 10) {
        this.ccDetailLength = this.ccDetailDataFiltered.length
      }else if(this.ccDetailDataFiltered.length > 10){
        this.ccDetailLength = 10
      }
    })
  }

  iflotxSelectSection(tplnr: any) {
    // Split the string by '-' and get the second part

    const parts = tplnr.split('-').slice(0, -1);

    // Join the parts back together using '-' as the separator
    const section = parts.join('-');

    const lastPart = section.split('-').pop();

    return lastPart;

  }

  iflotxSelectArea(tplnr: any) {
    // Split the string by '-' and get the second part

    const splitted = tplnr.split('-')[1];

    return splitted
  }


  cardChange(event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [uploadPhotoFile] = event.target.files;
      reader.readAsDataURL(uploadPhotoFile);

      reader.onload = () => {
        this.uploadPhotoSrc = reader.result as string;
        this.form.patchValue({
          selectedFile: reader.result,
        })
      }
    }

    this.selectedFile = event.target.files[0];
  }

  ngOnInit() {
    this.user = this.authService.getUser()

    this.form = new FormGroup({
      user: new FormControl(this.user),
      finding: new FormControl(''),
      finding_description: new FormControl(''),
      photo: new FormControl(''),
      tanggal_temuan: new FormControl(this.currentDate),
      id_area: new FormControl(''),
      id_section: new FormControl(''),
      func_loc: new FormControl(''),
      object_part: new FormControl(''),
      ob_detail: new FormControl(''),
      damage: new FormControl(''),
      d_detail: new FormControl(''),
      cause_code: new FormControl(''),
      cc_detail: new FormControl(''),
      level: new FormControl(''),
      kategori: new FormControl(''),
      scope: new FormControl(''),
      status: new FormControl(''),
    })

    this.service.getIflotxData().subscribe((data: any) => {
      //console.log(data);

    })
  }

  onFileChanged(event: any) {
    // ////////console.log(event);

    this.selectedFile = event.target.files[0]
    // ////////console.log(file);

  }





  onUpload() {
    const formData = new FormData();
    if (this.selectedFile) {


      formData.append('item_desc_img', this.selectedFile, this.selectedFile.name);
      formData.append('req_date', this.form.value.req_date),
        formData.append('item_desc', this.form.value.item_desc),
        formData.append('pic', this.form.value.pic),
        formData.append('section', this.form.value.section),
        formData.append('area', this.form.value.area),
        formData.append('due_date', this.form.value.due_date),
        formData.append('reason', this.form.value.reason),
        formData.append('pr_number', this.form.value.pr_number),
        formData.append('v_name', this.form.value.v_name),
        formData.append('v_value', this.form.value.v_value),
        formData.append('v2_name', this.form.value.v2_name),
        formData.append('v2_value', this.form.value.v2_value),
        formData.append('bidding', this.form.value.bidding),
        formData.append('keterangan', this.form.value.keterangan),
        this.service.postPrData(formData).subscribe(
          (response) => {
            ////////console.log('Upload successful:', response);
            this.submitted()
            // Handle success
          },
          (error) => {
            console.error('Upload failed:', error);
            // Handle error
          }
        );
    } else {
      formData.append('req_date', this.form.value.req_date),
        formData.append('item_desc', this.form.value.item_desc),
        formData.append('pic', this.form.value.pic),
        formData.append('section', this.form.value.section),
        formData.append('area', this.form.value.area),
        formData.append('due_date', this.form.value.due_date),
        formData.append('reason', this.form.value.reason),
        formData.append('pr_number', this.form.value.pr_number),
        formData.append('v_name', this.form.value.v_name),
        formData.append('v_value', this.form.value.v_value),
        formData.append('v2_name', this.form.value.v2_name),
        formData.append('v2_value', this.form.value.v2_value),
        formData.append('bidding', this.form.value.bidding),
        formData.append('keterangan', this.form.value.keterangan),
        this.service.postPrData(formData).subscribe(
          (response) => {
            ////////console.log('Upload successful:', response);
            this.submitted()
            // Handle success
          },
          (error) => {
            // console.error('Upload failed:', error);
            // Handle error
          }
        );
    }
  }
}

