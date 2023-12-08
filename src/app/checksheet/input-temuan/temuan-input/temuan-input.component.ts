import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { filter } from 'rxjs';

@Component({
  selector: 'app-temuan-input',
  templateUrl: './temuan-input.component.html',
  styleUrls: ['./temuan-input.component.css']
})
export class TemuanInputComponent implements OnInit {
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
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
  filteriflotxarea: any[] = []
  filteriflotxsection: any[] = []
  ifloxtdata : any[] = []
  currentPage = 0
  searchText : any
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

  validate() {
    this.validateSubmit = !this.validateSubmit
  }
  validateFuncLoc() {
    this.listFuncloc = !this.listFuncloc
  }
  funcloc() {
    this.listFuncloc = !this.listFuncloc
    console.log(this.filteriflotxarea);
    
  }

  areaSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    console.log(this.area);

    this.service.getPrAllSection().subscribe(data => {
      //////console.log(data);

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
      if(this.area == 1){
        this.getcolumn.forEach((element : any, index : number) => {
          if(this.iflotxSelectArea(element.TPLNR) == 'OCI1'){
            if(this.section == 'Preparation'){
              if(this.iflotxSelectSection(element.TPLNR) == 'PREP'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Injection'){
              if(this.iflotxSelectSection(element.TPLNR) == 'INJT'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Blow'){
              if(this.iflotxSelectSection(element.TPLNR) == 'BLOW'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Packing'){
              if(this.iflotxSelectSection(element.TPLNR) == 'PACK'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Preform Transfer'){
              if(this.iflotxSelectSection(element.TPLNR) == 'PREF'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Filling'){
              if(this.iflotxSelectSection(element.TPLNR) == 'FILL'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }else if(this.section == 'Sterilisasi'){
              if(this.iflotxSelectSection(element.TPLNR) == 'STU1'){
                this.ifloxtdata.push(this.getcolumn[index])
              }
            }
            
          }
        });
       console.log(this.ifloxtdata);
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
      console.log(data);

    })
  }

  onFileChanged(event: any) {
    // //////console.log(event);

    this.selectedFile = event.target.files[0]
    // //////console.log(file);

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
            //////console.log('Upload successful:', response);
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
            //////console.log('Upload successful:', response);
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

