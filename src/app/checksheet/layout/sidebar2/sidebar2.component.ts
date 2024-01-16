import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CountService } from '../../../service/master/count.service';
import { NavigationEnd, Router } from '@angular/router';
// import { TokenStorageService } from 'src/app/service/auth/token-storage.service';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {
  @ViewChild('signOutModal') ModalElement!: ElementRef;
  boolModal: boolean = false;
  boolDropdown: Boolean = false;
  hideElement: Boolean = true;
  boolAcc: Boolean = false;
  user: any
  operatorLevel: boolean = false;
  supervisorLevel: boolean = false;
  plannerLevel: boolean = false;
  purchasinLevel: boolean = false;
  adminLevel: boolean = false
  user_level: any
  byId: any[] = []
  private hasReloaded: boolean = false;

  constructor(
    private authService: AuthService,
    private countService: CountService,
    public router: Router) {
    // ////////console.log(this.router.url)
  }

  ngOnInit() {

    this.user = this.authService.getUser()

    //console.log(this.user[0].user_level);
    if (this.user[0].user_level == 99) {
      this.adminLevel = true
    } else {
      this.countService.getTableUserById(this.user[0].lg_nik).subscribe(data => {

        this.byId.push(data)
        this.user_level = this.byId[0].user_level

        if (this.user_level == 3) {
          this.plannerLevel = true
        } else if (this.user_level == 8) {
          this.purchasinLevel = true
        }
      })
    }
  }

  onMouseEnter() {
    this.hideElement = false;
    ////////console.log(this.hideElement);
  }
  onMouseOut() {
    ////////console.log('out');
    this.boolDropdown = false;
    this.hideElement = true;
    ////////console.log(this.hideElement);
  }

  dropdown() {
    this.boolDropdown = !this.boolDropdown;
  }
  AccountDropdown() {
    this.boolAcc = !this.boolAcc;
  }

  falseAll(event: any) {
    // ////////console.log(this.menuList.nativeElement);
    // ////////console.log(event.target);

    if (
      this.ModalElement &&
      this.ModalElement.nativeElement.contains(event.target)
    ) {
      // ////////console.log('test1');
    }
  }
  signOutModal() {
    this.boolModal = !this.boolModal;
  }
}
