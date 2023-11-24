import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-pr-update-page',
  templateUrl: './pr-update-page.component.html',
  styleUrls: ['./pr-update-page.component.css']
})
export class PrUpdatePageComponent implements OnInit {
  selectedFile!: File;
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  // form! : FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");
  validateSubmit : boolean = false
  prData : any
  target: any;
  sectionlist: any = [];
  section: any;
  area: any;
  idState : any
  byIdData : any =[]

  form = new FormGroup({
    req_date: new FormControl(),
    item_desc: new FormControl(),
    // item_desc_img: new FormControl(),
    pic: new FormControl(),
    section: new FormControl(),
    area : new FormControl(),
    due_date: new FormControl(),
    reason: new FormControl(),
    pr_number: new FormControl(),
    v_name: new FormControl(),
    v_value: new FormControl(),
    v2_name: new FormControl(),
    v2_value: new FormControl(),
    bidding: new FormControl(),
    keterangan: new FormControl(),
  })

  constructor(
    private service: CountService, 
    private http: HttpClient,
    private authService:AuthService,
    private router: Router,) {}

  submitted(){
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
    this.idState = history.state.id
    this.service.getPrbyId(this.idState).subscribe(data => {
      this.byIdData.push(data)
      this.form.controls.req_date.setValue(this.byIdData[0].req_date)
      this.form.controls.item_desc.setValue(this.byIdData[0].item_desc)
      this.form.controls.pic.setValue(this.byIdData[0].pic)
      this.form.controls.section.setValue(this.byIdData[0].section)
      this.form.controls.area.setValue(this.byIdData[0].area)
      this.form.controls.due_date.setValue(this.byIdData[0].due_date.slice(0, 10))
      this.form.controls.reason.setValue(this.byIdData[0].reason)
      this.form.controls.pr_number.setValue(this.byIdData[0].pr_number)
      this.form.controls.v_name.setValue(this.byIdData[0].v_name)
      this.form.controls.v_value.setValue(this.byIdData[0].v_value)
      this.form.controls.v2_name.setValue(this.byIdData[0].v2_name)
      this.form.controls.v2_value.setValue(this.byIdData[0].v2_value)
      this.form.controls.bidding.setValue(this.byIdData[0].bidding)
      this.form.controls.keterangan.setValue(this.byIdData[0].keterangan)
      this.service.getPrAllSection().subscribe(data => {
        this.prData = data
        this.prData.forEach((element : any) => {
          if(element.id_area == this.form.value.area){
            this.sectionlist.push(element)
          }
        });
      })
    })
   
    
    

  
  }

  onFileChanged(event : any) {
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
      this.service.updatePrData(formData, this.idState).subscribe(
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
      this.service.updatePrData(formData, this.idState).subscribe(
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

