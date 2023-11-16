import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})

export class Navbar2Component implements OnInit{
  validateLogout : boolean = false
  
  constructor(
    private authService:AuthService,
    public toastr: ToastrService,){

  }

  USER_KEY = 'auth-user';
  user : any;
  username : any;
  isAllowed:boolean = false;

  validate(){
    this.validateLogout = !this.validateLogout
  }

  showInfo() {
    this.toastr.info('Thank you for using AM Checksheet! 😁', 'Log out Success', {
      timeOut: 3000,
    })
  }
  
  signOut(){
    this.isAllowed = false;
    this.authService.signOut()
    this.showInfo()
    window.location.reload();
  }
  
  ngOnInit(){
    this.user = this.authService.getUser()
    // console.log(this.user);
    
    this.username =  this.user[0]?.lg_name
    // console.log(this.username);
    
  }

}
