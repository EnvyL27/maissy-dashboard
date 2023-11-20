import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-user-level-update',
  templateUrl: './user-level-update.component.html',
  styleUrls: ['./user-level-update.component.css']
})
export class UserLevelUpdateComponent implements OnInit {
  selectedFile!: File;
  user = this.authService.getUser()
  name = this.user[0]?.lg_name
  // form! : FormGroup
  currentDate: any = moment().format("YYYY-MM-DD");
  validateSubmit: boolean = false
  prData: any
  target: any;
  sectionlist: any = [];
  section: any;
  area: any;
  idState: any
  byIdData: any = []

  form = new FormGroup({
    lg_nik: new FormControl(),
    lg_name: new FormControl(),
    // lg_name_img: new FormControl(),
    user_level: new FormControl(),
  })

  constructor(
    private service: CountService,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,) { }

  submitted() {
    this.router.navigateByUrl('/user_level', { state: { successAlert: true }, })
  }

  validate() {
    this.validateSubmit = !this.validateSubmit
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


  ngOnInit() {
    this.idState = history.state.id
    console.log(this.idState);

    this.service.getTableUserById(this.idState).subscribe(data => {
      console.log(data);

      this.byIdData.push(data)
      this.form.controls.lg_nik.setValue(this.byIdData[0].lg_nik)
      this.form.controls.lg_name.setValue(this.byIdData[0].lg_name)
      this.form.controls.user_level.setValue(this.byIdData[0].user_level)
      console.log(this.form.value);

    })





  }

  onFileChanged(event: any) {
    // console.log(event);

    this.selectedFile = event.target.files[0]
    // console.log(file);

  }


  onUpload() {
    const userLevel = this.form.value.user_level
    this.service.updateTableUser(this.form.value, this.idState).subscribe(
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
  }
}

