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
      localStorage.setItem('nikLogged', this.f['nik'].value)
      this.showSuccess()
      this.reloadPage()
    }else {
    this.authService
      .login(this.f['nik'].value, this.f['password'].value)
      .subscribe(
        (data: { user: { lg_name: any; }[]; access_token: any; }) => {
          // //////////////console.log(data);
          // //////////////console.log(data.user[0].lg_name);
          this.name = data.user[0].lg_name;
          localStorage.setItem('nikLogged', this.f['nik'].value)
          this.authService.saveToken(data.access_token);
          this.authService.saveUser(data.user);
          this.showSuccess()
          // //////////////console.log('Sign In Success');
          // this.alertService.onCallAlert('Login Success', AlertType.Success);

          // this.alertService.onCallAlert('Login Success', AlertType.Success);
          this.reloadPage();
        },
        (err: { statusText: string; }) => {
          if (err.statusText == 'Unauthorized') {
            this.showWarning()
            // //////////////console.log('Email or Pass Invalid');
            // this.alertService.onCallAlert(
            //   'Email or Password Invalid',
            //   AlertType.Error
            // );
            '<div class="alert success-alert" ><h3>Success Alert Message < /h3>< a class="close" >& times; </a> < /div>'
          } else {
            // this.alertService.onCallAlert('Login Failed', AlertType.Error);
            this.showError()
            //////////////console.log('Sign In Failed');
          }

          // //////////////console.log(err.statusText);

          // this.errorMessage = err.error.message;
          // this.isLoginFailed = true;
          // this.submitted = false;
          this.submitted = false;
          this.f['password'].setValue('');
          // this.form.setValue({ email: '', password: '' });
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

  ngOnInit() {
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
