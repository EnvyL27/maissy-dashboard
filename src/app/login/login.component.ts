import { Component } from '@angular/core';
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
export class LoginComponent {
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

    this.authService
      .login(this.f['nik'].value, this.f['password'].value)
      .subscribe(
        (data) => {
          // //////console.log(data);
          // //////console.log(data.user[0].lg_name);
          this.name = data.user[0].lg_name;

          this.authService.saveToken(data.access_token);
          this.authService.saveUser(data.user);
          this.showSuccess()
          // //////console.log('Sign In Success');
          // this.alertService.onCallAlert('Login Success', AlertType.Success);

          // this.alertService.onCallAlert('Login Success', AlertType.Success);
          this.reloadPage();
        },
        (err) => {
          if (err.statusText == 'Unauthorized') {
            this.showWarning()
            // //////console.log('Email or Pass Invalid');
            // this.alertService.onCallAlert(
            //   'Email or Password Invalid',
            //   AlertType.Error
            // );
            '<div class="alert success-alert" ><h3>Success Alert Message < /h3>< a class="close" >& times; </a> < /div>'
          } else {
            // this.alertService.onCallAlert('Login Failed', AlertType.Error);
            this.showError()
            //////console.log('Sign In Failed');
          }

          // //////console.log(err.statusText);

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

  changeVisibilityPassword() {
    this.showPassword = !this.showPassword;
  }

  reloadPage(): void {
    this.router.navigate(['/']), {
      queryParams: { successAlert: true },
    };
    // window.location.reload();
  }
}
