import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  vendor1Date: any
  vendor2Date: any
  @ViewChild('myPond1') myPond!: FilePond;
  @ViewChild('myPond2') myPondAttach!: FilePond;
  @ViewChild('myPond3') myPondAttach2!: FilePond;

  pondOptions: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop images here...',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    allowReorder: true,
    maxFiles: 1,
  }
  pondOptionsApp: FilePondOptions = {
    allowMultiple: true,
    labelIdle: 'Drop file here...',
    acceptedFileTypes: ['application/pdf'],
    allowReorder: true,
    maxFiles: 1,
  }

  pondHandleInit() {
    //console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any, id: any) {
    //console.log("A file was added", event);
    const coba = event.pond.getFiles()
    //console.log(coba);
    //console.log(id);

    this.uploadFiles(event.pond, id)
  }

  pondHandleActivateFile(event: any) {
    //console.log("A file was activated", event);
    const coba = event.pond.getFiles()

    //console.log(coba);


  }
  pondHandleRemoveFile(event: any) {
    //console.log('File removed:', event);

    const removedFile: FilePondFile = event.file;

    const removedFileName: string = removedFile.filename;

    //console.log('Removed file name:', removedFileName);

    this.fileDataArray = this.fileDataArray.map(innerArray => {
      return innerArray.filter((item: any) => item.file.name !== removedFileName);
    }).filter(innerArray => innerArray.length > 0);

    //console.log('Updated fileDataArray:', this.fileDataArray);
  }

  pondHandleAddFileProgress(event: any) {
    const file: FilePondFile = event.file;
    const progress: number = event.progress;

    //console.log(`File '${file.filename}' is ${progress}% loaded.`);
  }

  fileDataArray: any[] = []
  removeDuplicateArrays() {
    const uniqueFiles: { [key: string]: any[] } = {};

    this.fileDataArray.forEach(innerArray => {
      if (Array.isArray(innerArray)) {
        innerArray.forEach(item => {
          const key = `${item.file.name}-${item.fromInput}`;
          if (!uniqueFiles[key]) {
            uniqueFiles[key] = [];
          }
          uniqueFiles[key].push(item);
        });
      } else {
        console.warn('Invalid data found in fileDataArray:', innerArray);
      }
    });

    // Convert uniqueFiles object back to array
    this.fileDataArray = Object.values(uniqueFiles).map(arr => {
      // Sort arrays based on length in descending order
      return arr.sort((a, b) => b.length - a.length)[0];
    });
  }

  uploadFiles(pond: any, id: string) {
    const files: FilePondFile[] = pond.getFiles();

    if (files.length > 0) {
      this.fileDataArray.push(files.map((file: FilePondFile) => {
        return {
          file: file.file,
          fromInput: id,
        };
      }));

    } else {
      console.warn('No files added or files array is empty.');
    }

    //console.log(this.fileDataArray);
    this.clusterFilesByInput()
    // this.sendToBackend(fileDataArray);
  }



  sendToBackend(fileDataArray: any[]) {
    //console.log(fileDataArray[0].file);
    this.selectedFile = fileDataArray[0].file
  }
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
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

  user_level: any
  byId: any[] = []

  constructor(
    private service: CountService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef) { }

  submitted() {
    this.router.navigateByUrl('/pr_list', { state: { successAlert: true }, })
  }

  validate() {
    this.validateSubmit = !this.validateSubmit
  }

  areaSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    ////////console.log(this.area);

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
    this.section = $event;
  }

  vendorData : any
  vendorList : any[] = []
  vendorSect : boolean = false
  searchText : any
  v_name: any
  vendorSelect(){
    this.service.getVendorData().subscribe(data => {
      console.log(data);
      this.vendorData = data
      this.vendorData.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.vendorList.push(element)
        }
      });
      console.log(this.vendorList);
      
    })
  }

  vendorSection(){
    this.vendorSect = !this.vendorSect
  }

  cancelVendor(){
    this.vendorSect = false
  }

  vendorName($event : any){
    this.v_name = $event
    this.vendorSect = false
  }
  vendor2Data : any
  vendor2List : any[] = []
  vendor2Sect : boolean = false
  v2_name: any
  vendor2Select(){
    this.service.getVendorData().subscribe(data => {
      console.log(data);
      this.vendor2Data = data
      this.vendor2Data.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.vendor2List.push(element)
        }
      });
      console.log(this.vendorList);
      
    })
  }

  vendor2Section(){
    this.vendor2Sect = !this.vendor2Sect
  }

  cancelVendor2(){
    this.vendor2Sect = false
  }

  vendor2Name($event : any){
    this.v2_name = $event
    this.vendor2Sect = false
  }

  currentPage = 0

  ngOnInit() {
    this.vendorSelect()
    this.vendor2Select()
    this.user = this.authService.getUser()
    //console.log(this.user[0].lg_nik);
    
    if (this.user[0].user_level == 99) {
      this.adminLevel = true
    }else{
      this.service.getTableUserById(this.user[0].lg_nik).subscribe(data => {
        //console.log(data);
        
        this.byId.push(data)
        this.user_level = this.byId[0].user_level
        //console.log(this.user_level);
        
          // see also 
          if (this.user_level == 3) {
            this.plannerLevel = true
          } else if (this.user_level == 8) {
            this.purchasingLevel = true
          }
          else if (this.user_level == 99) { 
            this.adminLevel = true
          }
          //console.log(this.user_level);
          
          //console.log(this.plannerLevel); 
          //console.log(this.purchasingLevel); 
          //console.log(this.adminLevel); 
      })
    }
      
    this.form = new FormGroup({
      req_date: new FormControl(this.currentDate),
      item_desc: new FormControl('', [Validators.required, Validators.minLength(5)]),
      pic: new FormControl(this.name),
      area: new FormControl('', [Validators.required]),
      section: new FormControl('', [Validators.required]),
      due_date: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      pr_number: new FormControl(''),
      v_name: new FormControl(''),
      v_value: new FormControl(''),
      v_inputDate: new FormControl(''),
      attachment: new FormControl(''),
      v2_name: new FormControl(''),
      v2_value: new FormControl(''),
      v2_inputDate: new FormControl(''),
      attachment2: new FormControl(''),
      bidding: new FormControl(''),
      keterangan: new FormControl(''),
    })
  }

  isV1Filled() {
    const coba = this.form.get('v_name')

    // if(  != ''){
    //   this.vendor1Date = moment().format("YYYY-MM-DD");
    // }

  }

  get validation() {
    return this.form.get('item_desc');
  }
  get validationArea() {
    return this.form.get('area');
  }
  get validationSection() {
    return this.form.get('section');
  }
  get validationDueDate() {
    return this.form.get('due_date');
  }
  get validationReason() {
    return this.form.get('reason');
  }

  onFileChanged(event: any) {
    // //console.log(event);
    // this.uploadFiles()
    // this.selectedFile = event.target.files[0]
    // //console.log(this.selectedFile);

  }
  clusteredFile: { [key: string]: any[] } = {};
  imageFile !: File
  attachFile !: File
  attach2File !: File
  clusterFilesByInput() {
    this.clusteredFile = {}

    this.fileDataArray.forEach(innerArray => {
      innerArray.forEach((item: any) => {
        const fromInput = item.fromInput;
        if (!this.clusteredFile[fromInput]) {
          this.clusteredFile[fromInput] = [];
        }
        this.clusteredFile[fromInput].push(item);
      });
    });


    Object.keys(this.clusteredFile).forEach(key => {
      switch (key) {
        case 'image':
          this.imageFile = this.clusteredFile[key][0].file;
          break;
        case 'attach':
          this.attachFile = this.clusteredFile[key][0]?.file;
          break;
        case 'attach2':
          this.attach2File = this.clusteredFile[key][0]?.file;
          break;
      }
    });

    //console.log(this.clusteredFile);
    console.log('image ' + this.imageFile);
    console.log('attach ' + this.attachFile);
    console.log('attach2 ' + this.attach2File);



    return this.clusteredFile;
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior
    this.isV1Filled()
    if (this.form.valid) {
      // Your form submission logic here
      //console.log('Form is valid and can be submitted.');
    } else {
      //console.log('Form is invalid.');
    }
  }

  onUpload() {
    if (this.form.valid) {
      const formData = new FormData();
      if (this.imageFile) {
        formData.append('item_desc_img', this.imageFile, this.imageFile.name);
     }
     if (this.attachFile) {
       formData.append('attachment', this.attachFile, this.attachFile.name);
     }

     if (this.attach2File) {
       formData.append('attachment2', this.attach2File, this.attach2File.name);
     }

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
          //console.log(formData);

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
      } 
  }
}
