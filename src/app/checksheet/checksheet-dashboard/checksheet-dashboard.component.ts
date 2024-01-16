import { Component } from '@angular/core';
// import { AttendanceService } from 'src/app/service/attendance.service';

@Component({
  selector: 'app-checksheet-dashboard',
  templateUrl: './checksheet-dashboard.component.html',
  styleUrls: ['./checksheet-dashboard.component.css']
})
export class ChecksheetDashboardComponent  {
  data: any;
  constructor() {
    // Employeservice.getProfile().subscribe((loh) => {
    //   this.data = loh;
    //   ////////console.log(this.data.data[0]);
    // });
  }
}

