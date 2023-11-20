import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';
// import { TokenStorageService } from 'src/app/service/auth/token-storage.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit  {
  @ViewChild('signOutModal') ModalElement!: ElementRef;
  boolModal: boolean = false;
  boolDropdown: Boolean = false;
  hideElement: Boolean = true;
  boolAcc: Boolean = false;
  user: any
  operatorLevel: boolean = false;
  supervisorLevel: boolean = false;
  plannerLevel: boolean = false;

  constructor(
    private authService:AuthService,
    public router: Router) {
    // console.log(this.router.url)
  }

  operator(){
    this.operatorLevel = !this.operatorLevel
    console.log(this.operatorLevel);
    
  }

  ngOnInit() {
    this.user = this.authService.getUser()
    console.log(this.user); 
    if(this.user[0]?.user_level == 1){
      this.operator()
    }
  }

  onMouseEnter() {
    this.hideElement = false;
    console.log(this.hideElement);
  }
  onMouseOut() {
    console.log('out');
    this.boolDropdown = false;
    this.hideElement = true;
    console.log(this.hideElement);
  }

  dropdown() {
    this.boolDropdown = !this.boolDropdown;
  }
  AccountDropdown() {
    this.boolAcc = !this.boolAcc;
  }

  falseAll(event: any) {
    // console.log(this.menuList.nativeElement);
    // console.log(event.target);

    if (
      this.ModalElement &&
      this.ModalElement.nativeElement.contains(event.target)
    ) {
      // console.log('test1');
    }
  }
  signOutModal() {
    this.boolModal = !this.boolModal;
  }
}
