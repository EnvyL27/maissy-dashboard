import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import * as moment from 'moment';
import { FilePondComponent } from 'ngx-filepond';
import { FilePond, FilePondOptions, FilePondFile } from 'filepond';


@Component({
  selector: 'app-pr-input-page',
  templateUrl: './pr-input-page.component.html',
  styleUrls: ['./pr-input-page.component.css']
})
export class PrInputPageComponent implements OnInit {
  @ViewChild('myPond1')myPond!: FilePond;
  @ViewChild('myPond2')myPondAttach!: FilePond;
  @ViewChild('myPond3')myPondAttach2!: FilePond;

  pondOptions: FilePondOptions = {
    allowMultiple: true,
    
    labelIdle: 'Drop images here...',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    allowReorder:true,
    maxFiles:2,    
  }
  pondOptionsApp: FilePondOptions = {
    allowMultiple: true,
    
    labelIdle: 'Drop images here...',
    acceptedFileTypes: ['application/pdf'],
    allowReorder:true,
    maxFiles:1,    
  }

  pondHandleInit() {
    console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any, id : any) {
    console.log("A file was added", event);
    const coba = event.pond.getFiles()
    console.log(coba);
    console.log(id);
    
    this.uploadFiles(event.pond, id)
  }

  pondHandleActivateFile(event: any) {
    console.log("A file was activated", event);
    const coba = event.pond.getFiles()
    
    console.log(coba);
    
    
  }

  fileDataArray: any[] = []
  uploadFiles(pond : any, id : string) {    
    const files: FilePondFile[] = pond.getFiles();
    console.log(pond);
    
    if (files.length > 0) {
      const fileData = files.map((file: FilePondFile) => {
        return {
          file: file.file,
          fromInput: id,
        };
      });
      
      // Do something with fileData, e.g., send to the backend
      console.log(fileData);
    } else {
      console.warn('No files added or files array is empty.');
    }
   
    console.log(this.fileDataArray);
    
    // this.sendToBackend(fileDataArray);
  }

  

  sendToBackend(fileDataArray: any[]) {
    console.log(fileDataArray[0].file);
    this.selectedFile = fileDataArray[0].file
  }
  adminLevel : boolean = false
  plannerLevel : boolean = false
  purchasingLevel : boolean = false
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
    this.router.navigateByUrl('/pr_list',{state: { successAlert: true },})
  }

  validate(){
    this.validateSubmit = !this.validateSubmit
  }

  areaSelect($event: any) { 
    this.sectionlist = []
    this.area = $event; 
    //////console.log(this.area);
    
    this.service.getPrAllSection().subscribe(data => {
      //////console.log(data);
      
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
    this.user = this.authService.getUser()
    
    
    this.router.events.subscribe((val) => {
      
      // ////console.log(val);
      if (val instanceof NavigationEnd) {
        // Hide loading indicator
        ////console.log(this.user[0]?.user_level);
        
    }
    
      // see also 
      if(this.user[0]?.user_level == 3){
        this.plannerLevel = true
      }else if(this.user[0]?.user_level == 8) {
        this.purchasingLevel = true
      }
      else if(this.user[0]?.user_level == 99) {
        this.adminLevel = true
      }
      ////console.log(this.plannerLevel); 
  });
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
      attachment: new FormControl(''),
      v2_name: new FormControl(''),
      v2_value: new FormControl(''),
      attachment2: new FormControl(''),
      bidding: new FormControl(''),
      keterangan: new FormControl(''),
    })
  }

  onFileChanged(event : any) {
    console.log(event);
    // this.uploadFiles()
    // this.selectedFile = event.target.files[0]
    // console.log(this.selectedFile);
    
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
      formData.append('attachment', this.form.value.attachment),
      formData.append('v2_name', this.form.value.v2_name),
      formData.append('v2_value', this.form.value.v2_value),
      formData.append('attachment2', this.form.value.attachment2),
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
      formData.append('attachment', this.form.value.attachment),
      formData.append('v2_name', this.form.value.v2_name),
      formData.append('v2_value', this.form.value.v2_value),
      formData.append('attachment2', this.form.value.attachment2),
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
