import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormBuilder, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { FilePondComponent } from 'ngx-filepond';
import { FilePond, FilePondOptions, FilePondFile } from 'filepond';

@Component({
  selector: 'app-pr-update-page',
  templateUrl: './pr-update-page.component.html',
  styleUrls: ['./pr-update-page.component.css']
})
export class PrUpdatePageComponent implements OnInit {
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
    ////console.log("FilePond has initialised", this.myPond);
  }

  pondHandleAddFile(event: any, id: any) {
    ////console.log("A file was added", event);
    const coba = event.pond.getFiles()
    ////console.log(coba);
    ////console.log(id);

    this.uploadFiles(event.pond, id)
  }

  pondHandleActivateFile(event: any) {
    ////console.log("A file was activated", event);
    const coba = event.pond.getFiles()

    ////console.log(coba);


  }
  pondHandleRemoveFile(event: any) {
    ////console.log('File removed:', event);

    const removedFile: FilePondFile = event.file;

    const removedFileName: string = removedFile.filename;

    ////console.log('Removed file name:', removedFileName);

    this.fileDataArray = this.fileDataArray.map(innerArray => {
      return innerArray.filter((item: any) => item.file.name !== removedFileName);
    }).filter(innerArray => innerArray.length > 0);

    ////console.log('Updated fileDataArray:', this.fileDataArray);
  }

  pondHandleAddFileProgress(event: any) {
    const file: FilePondFile = event.file;
    const progress: number = event.progress;

    ////console.log(`File '${file.filename}' is ${progress}% loaded.`);
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

    ////console.log(this.fileDataArray);
    this.clusterFilesByInput()
    // this.sendToBackend(fileDataArray);
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

    ////console.log(this.clusteredFile);
    ////console.log(this.imageFile);
    ////console.log(this.attachFile.name);
    ////console.log(this.attach2File);



    return this.clusteredFile;
  }



  sendToBackend(fileDataArray: any[]) {
    ////console.log(fileDataArray[0].file);
    this.selectedFile = fileDataArray[0].file
  }

  selectedFile!: File;
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  // form! : FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");
  validateSubmit: boolean = false
  error: boolean = false
  prData: any
  target: any;
  sectionlist: any = [];
  section: any;
  area: any;
  idState: any
  byIdData: any = []
  vendor1: any = []
  vName: string = ''
  vDate: any
  v2Name: string = ''
  v2Date: any
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
  user_level: any
  byId: any[] = []

  form = new FormGroup({
    req_date: new FormControl(),
    item_desc: new FormControl(),
    // item_desc_img: new FormControl(),
    pic: new FormControl(),
    section: new FormControl(),
    area: new FormControl(),
    due_date: new FormControl(),
    reason: new FormControl(),
    pr_number: new FormControl(),
    v_name: new FormControl(),
    v_value: new FormControl(),
    v_inputDate: new FormControl(),
    attachment: new FormControl(),
    v2_name: new FormControl(),
    v2_value: new FormControl(),
    v2_inputDate: new FormControl(),
    attachment2: new FormControl(),
    bidding: new FormControl(),
    keterangan: new FormControl(),
  })

  constructor(
    private service: CountService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  submitted() {
    this.router.navigateByUrl('/pr_list', { state: { successAlert: true }, })
  }

  errorSubmit() {
    ////console.log(this.error);

    this.error = !this.error
  }

  validate() {
    this.validateSubmit = !this.validateSubmit
  }

  validateError() {
    this.error = false
  }

  areaSelect($event: any) {
    this.sectionlist = []
    this.area = $event;
    this.service.getPrAllSection().subscribe(data => {
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

  vClick : boolean = false
  v2Click : boolean = false

  clickV($event : any){
    this.vClick = !this.vClick
    this.vendorName($event);
  }

  clickV2($event : any){
    this.v2Click = !this.v2Click
    this.vendor2Name($event)
  }

  vendorChange(nameVendor: any) {
    // //console.log(this.vName.length);
    if(this.vClick){
      if (nameVendor.length >= 3) {
        this.vDate = moment().format("YYYY-MM-DD");
      }
    }
    // //console.log(this.vDate);
  }

  vendor2Change(name2: any) {
    // //console.log(name2.length);
    if(this.v2Click){
      if (name2.length >= 3) {
        this.v2Date = moment().format("YYYY-MM-DD");
      }
    }
    ////console.log(this.v2Date);
  }

  vendorData: any
  vendorList: any[] = []
  vendorSect: boolean = false
  searchText: any
  v_name: any
  vendorSelect() {
    this.service.getVendorData().subscribe(data => {
      this.vendorData = data
      this.vendorData.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.vendorList.push(element)
        }
      });
      //console.log(this.vendorList);

    })
  }

  vendorSection() {
    this.vendorSect = !this.vendorSect
  }

  cancelVendor() {
    this.vendorSect = false
  }

  vendorName($event: any) {
    //console.log($event);
    if ($event != '') {
      //console.log('sini');
      
      this.v_name = $event
      this.vendorChange(this.v_name)
    }
    this.vendorSect = false
  }
  vendor2Data: any
  vendor2List: any[] = []
  vendor2Sect: boolean = false
  v2_name: any
  vendor2Select() {
    this.service.getVendorData().subscribe(data => {
      this.vendor2Data = data
      this.vendor2Data.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.vendor2List.push(element)
        }
      });
      //console.log(this.vendorList);

    })
  }

  vendor2Section() {
    this.vendor2Sect = !this.vendor2Sect
  }

  cancelVendor2() {
    this.vendor2Sect = false
  }

  vendor2Name($event: any) {
    
    if ($event != '') {
      this.v2_name = $event
      this.vendor2Change(this.v2_name)
    }
    //console.log($event);

    this.vendor2Sect = false
  }

  currentPage = 0

  ngOnInit() {
    this.vendorSelect()
    this.vendor2Select()
    this.user = this.authService.getUser()
    ////console.log(this.user[0].lg_nik);

    if (this.user[0].user_level == 99) {
      this.adminLevel = true
    } else {
      this.service.getTableUserById(this.user[0].lg_nik).subscribe(data => {
        ////console.log(data);

        this.byId.push(data)
        this.user_level = this.byId[0].user_level
        ////console.log(this.user_level);

        // see also 
        if (this.user_level == 3) {
          this.plannerLevel = true
        } else if (this.user_level == 8) {
          this.purchasingLevel = true
        }
        else if (this.user_level == 99) {
          this.adminLevel = true
        }
        ////console.log(this.user_level);

        ////console.log(this.plannerLevel);
        ////console.log(this.purchasingLevel);
        ////console.log(this.adminLevel);
      })
    }
    this.idState = history.state.id
    this.service.getPrbyId(this.idState).subscribe(data => {


      this.byIdData.push(data)
      // //console.log(this.byIdData[0].v_name);
      this.v_name = this.byIdData[0].v_name
      this.v2_name = this.byIdData[0].v2_name
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
      this.form.controls.v_inputDate.setValue(this.byIdData[0].v_inputDate)
      this.form.controls.attachment.setValue(this.byIdData[0].attachment)
      this.form.controls.v2_name.setValue(this.byIdData[0].v2_name)
      this.form.controls.v2_value.setValue(this.byIdData[0].v2_value)
      this.form.controls.v2_inputDate.setValue(this.byIdData[0].v2_inputDate)
      this.form.controls.attachment2.setValue(this.byIdData[0].attachment2)
      this.form.controls.bidding.setValue(this.byIdData[0].bidding)
      this.form.controls.keterangan.setValue(this.byIdData[0].keterangan)
      this.service.getPrAllSection().subscribe(data => {
        this.prData = data
        this.prData.forEach((element: any) => {
          if (element.id_area == this.form.value.area) {
            this.sectionlist.push(element)
          }
        });
      })
      this.vendorChange(this.byIdData[0].v_name)
      this.vendor2Change(this.byIdData[0].v2_name)
    })





  }

  onFileChanged(event: any) {
    // //////////console.log(event);

    this.selectedFile = event.target.files[0]
    // //////////console.log(file);

  }

  isV1Filled() {
    const coba = this.form.get('v_name')
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Prevent default form submission behavior
    this.isV1Filled()
    if (this.form.valid) {
      // Your form submission logic here
      ////console.log('Form is valid and can be submitted.');
    } else {
      ////console.log('Form is invalid.');
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
      this.form.value.v_name = this.v_name
      this.form.value.v2_name = this.v2_name
      if(this.vClick == true){
        this.form.value.v_inputDate = this.vDate
      }
      if(this.v2Click == true){
        this.form.value.v2_inputDate = this.v2Date
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
        formData.append('v_inputDate', this.form.value.v_inputDate),
        formData.append('v2_name', this.form.value.v2_name),
        formData.append('v2_value', this.form.value.v2_value),
        formData.append('v2_inputDate', this.form.value.v2_inputDate),
        formData.append('bidding', this.form.value.bidding),
        formData.append('keterangan', this.form.value.keterangan),
        ////console.log(formData);

        this.service.updatePrData(formData, this.idState).subscribe(
          (response) => {
            //////////console.log('Upload successful:', response);
            this.submitted()

            // Handle success
          },
          (error) => {
            // console.error('Upload failed:', error);
            this.errorSubmit()
            // Handle error
          }
        );
    }
  }
}

