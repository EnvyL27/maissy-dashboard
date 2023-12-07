import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-temuan-input',
  templateUrl: './temuan-input.component.html',
  styleUrls: ['./temuan-input.component.css']
})
export class TemuanInputComponent implements OnInit {
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
  uploadPhotoSrc : any
  uploadPhotoFile !: File;
  selectedFile!: File;
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  form!: FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");

  validateSubmit: boolean = false
  prData: any
  target: any;
  sectionlist: any = [];
  section: any;
  area: any;

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

  areaSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    //////console.log(this.area);

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
    this.section = $event;
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


    this.router.events.subscribe((val) => {

      // ////console.log(val);
      if (val instanceof NavigationEnd) {
        // Hide loading indicator
        ////console.log(this.user[0]?.user_level);

      }

      // see also 
      if (this.user[0]?.user_level == 3) {
        this.plannerLevel = true
      } else if (this.user[0]?.user_level == 8) {
        this.purchasingLevel = true
      }
      else if (this.user[0]?.user_level == 99) {
        this.adminLevel = true
      }
      ////console.log(this.plannerLevel); 
    });
    this.form = new FormGroup({
      user: new FormControl(this.user),
      finding: new FormControl(''),
      finding_description: new FormControl(''),
      photo: new FormControl(''),
      tanggal_temuan: new FormControl(this.currentDate),
      id_area: new FormControl(''),
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
      last_update: new FormControl(''),
      note: new FormControl(''),
      approve_by: new FormControl(''),
      approve_date: new FormControl(''),
      schedule: new FormControl(''),
      pic: new FormControl(''),
      photo_type: new FormControl(''),
      photo_size: new FormControl(''),
      photo_width: new FormControl(''),
      photo_height: new FormControl(''),
      order_type: new FormControl(''),
      pm_act_type: new FormControl(''),
      sys_cond: new FormControl(''),
      basic_start: new FormControl(''),
      basic_finish: new FormControl(''),
      report_by: new FormControl(''),
      main_work_center: new FormControl(''),
      planner_group: new FormControl(''),
      plant_section: new FormControl(''),
      work_center: new FormControl(''),
      profit_center: new FormControl(''),
      responsible_cost_center: new FormControl(''),
      wbs_element: new FormControl(''),
      cost_center: new FormControl(''),
      maintance_plan: new FormControl(''),
      foto_validasi: new FormControl(''),
      approve_spv: new FormControl(''),
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

