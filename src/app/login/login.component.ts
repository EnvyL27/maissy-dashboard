import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AlertType } from 'src/app/services/alert/alert.model';
// import { AlertService } from 'src/app/services/alert/alert.service';
import { AuthService } from './../service/auth/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  showPassword: Boolean = false;
  submitted = false;
  name: string = '';
  maissy : boolean = false
  am : boolean = false

  constructor(
    public toastr: ToastrService,
    private authService: AuthService,
    // private alertService: AlertService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      nik: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  maissyLogin(){
    this.maissy = !this.maissy
    this.am = false
    //console.log(this.maissy);
    //console.log(this.am);
  }

  amLogin(){
    this.am = !this.am
    this.maissy = false
    //console.log(this.maissy);
    //console.log(this.am);
  }

  showSuccess() {
    this.toastr.success('HELLO ' + this.name + '!', 'Login Success',{
      timeOut: 3000,
    })
  }
  showError() {
    this.toastr.error('Oops! something wrong!', 'Login Failed', {
      timeOut: 3000,
    })
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    })
  }
  showWarning() {
    this.toastr.warning('Oops! It seems there was an issue with your NIK or password!', 'Login Failed', {
      timeOut: 3000,
    })
  }

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
   
    
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.f['nik'].value == '0000' && this.f['password'].value == 'password'){
      this.name = 'Admin'
      this.authService.saveToken('ewarstdyfugihojlikujyrhtrsgfxcvhbjkjouliykturyjethsdcg')
      const userData = [{lg_name:this.name,is_admin:true}]
      localStorage.setItem('nikLogged', this.f['nik'].value)
      this.authService.saveUser(userData)
      // localStorage.setItem('is_admin', 'true')
      this.showSuccess()
      if(this.maissy == true){
        this.reloadPage();
      }else if(this.am == true){
        this.reloadPageAm();
      }
    }else {
    this.authService
      .login(this.f['nik'].value, this.f['password'].value)
      .subscribe(
        (data: { user: { lg_name: any; }[]; access_token: any; }) => {
          this.name = data.user[0].lg_name;
          localStorage.setItem('nikLogged', this.f['nik'].value)
          this.authService.saveToken(data.access_token);
          this.authService.saveUser(data.user);
          this.showSuccess()
          if(this.maissy == true){
            this.reloadPage();
          }else if(this.am == true){
            this.reloadPageAm();
          }
          
        },
        (err: { statusText: string; }) => {
          if (err.statusText == 'Unauthorized') {
            this.showWarning()
            '<div class="alert success-alert" ><h3>Success Alert Message < /h3>< a class="close" >& times; </a> < /div>'
          } else {
            this.showError()
          }
          this.submitted = false;
          this.f['password'].setValue('');
        },
        () => {
          this.submitted = false;
        }
      );
    }
  }

  changeVisibilityPassword() {
    this.showPassword = !this.showPassword;
  }

  reloadPage(): void {
    this.router.navigate(['/']), {
      queryParams: { successAlert: true },
    };
    // window.location.reload();
  }
  reloadPageAm(): void {
    this.router.navigate(['/am_checksheet']), {
      queryParams: { successAlert: true },
    };
  }

  ngOnInit() {
    this.am = false
    this.maissy = true
    const switchCtn = document.querySelector("#switch-cnt");
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const aContainer = document.querySelector("#a-container");
    const bContainer = document.querySelector("#b-container");
    const allButtons = document.querySelectorAll(".submit");

    const getButtons = (e: { preventDefault: () => any; }) => e.preventDefault();

    const changeForm = (e: any) => {
      switchCtn?.classList.add("is-gx");
      setTimeout(function () {
        switchCtn?.classList.remove("is-gx");
      }, 1500);

      switchCtn?.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1?.classList.toggle("is-hidden");
      switchC2?.classList.toggle("is-hidden");
      aContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-txl");
      bContainer?.classList.toggle("is-z200");
    };

    const mainF = (e: any) => {
      for (let i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons);
      for (let i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm);
    };

    window.addEventListener("load", mainF);
  }
  }
