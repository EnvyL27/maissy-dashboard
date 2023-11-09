import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})

export class Navbar2Component implements OnInit{

  
  constructor(
    private authService:AuthService,
    public toastr: ToastrService,){

  }

  USER_KEY = 'auth-user';
  user = this.authService.getUser()
  username = this.user[0]?.lg_name
  isAllowed:boolean = false;

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
    console.log(this.username);
    
  }

}
