import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-pr-input-page',
  templateUrl: './pr-input-page.component.html',
  styleUrls: ['./pr-input-page.component.css']
})
export class PrInputPageComponent implements OnInit {
  selectedFile!: File;
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  form! : FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");
  validateSubmit : boolean = false
  prData : any
  target: any;
  sectionlist: any = [];
  section: any;
  area: any;

  constructor(
    private service: CountService, 
    private http: HttpClient,
    private authService:AuthService,
    private router: Router,) {}

  submitted(){
    // this.router.navigate(['/pr_list']), {
    //   queryParams: { successAlert: true },
      
    // };
    this.router.navigateByUrl('/pr_list',{state: { successAlert: true },})
  }

  validate(){
    this.validateSubmit = !this.validateSubmit
  }

  areaSelect($event: any) { 
    this.sectionlist = []
    this.area = $event; 
    this.service.getPrAllSection().subscribe(data => {
      this.prData = data
      this.prData.forEach((element : any) => {
        if(element.id_area == this.area){
          this.sectionlist.push(element)
        }
      });
    })
  }
  
  sectionSelect($event: any) { 
    this.section = $event; 
  }

  ngOnInit() {
    this.form = new FormGroup({
      req_date: new FormControl(this.currentDate),
      item_desc: new FormControl(''),
      pic: new FormControl(this.name),
      section: new FormControl(''),
      area : new FormControl(''),
      due_date: new FormControl(''),
      reason: new FormControl(''),
      pr_number: new FormControl(''),
      v_name: new FormControl(''),
      v_value: new FormControl(''),
      v2_name: new FormControl(''),
      v2_value: new FormControl(''),
      bidding: new FormControl(''),
      keterangan: new FormControl(''),
    })
  }

  onFileChanged(event : any) {
    // console.log(event);
    
    this.selectedFile = event.target.files[0]
    // console.log(file);
    
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
          console.log('Upload successful:', response);
          this.submitted()
          // Handle success
        },
        (error) => {
          console.error('Upload failed:', error);
          // Handle error
        }
      );
    }else{
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
          console.log('Upload successful:', response);
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
