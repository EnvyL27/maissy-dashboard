import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastrService } from 'ngx-toastr'


@Component({
  selector: 'app-limit',
  templateUrl: './limit.component.html',
  styleUrls: ['./limit.component.css'],
  animations: [
    trigger('contentAnimation', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })), // Slide from top to bottom
      state('hidden', style({ opacity: 0, transform: 'translateY(-120%)' })), // Slide to the top
      transition('hidden => visible', animate('230ms ease-in')),
      transition('visible => hidden', animate('230ms ease-out')),
    ]),
    trigger('componentBeneathAnimation', [
      state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
      state('hidden', style({ opacity: 1, transform: 'translateY(-220%)' })),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class LimitComponent implements OnInit {
  public resolved: boolean = false;

  isContentVisible = false;
  isComponentBeneathVisible = false;
  tableName: string = '';
  satisLimit : string = '';
  unsatisLimit : string = '';
  unacceptLimit : string = '';
  const: object = {};
  const2: any = [];
  currentDate = new Date();
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  totallimit: object = {};
  totallimitarr: any = [];
  public loaddata: any;
  searchText2: any;
  donut: any = [];
  coba: any = [];
  currentPage2: number = 1;
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  showSuccessAlert: boolean = true;
  deskripsi: any = 'Loading..';
  Router: any;

  constructor(private service: CountService, private spinner: NgxSpinnerService,  public toastr: ToastrService,) { }

  showSuccess() {
    this.toastr.success('Add value success', 'Success'),{
      timeOut: 3000,
    }
  }
  showSuccessUpdate() {
    this.toastr.success('Update value success', 'Success'),{
      timeOut: 3000,
    }
  }
  showError() {
    this.toastr.error('Oops! something wrong!', 'Failed', {
      timeOut: 3000,
    })
  }
  // showWarning() {
  //   this.toastr.warning('Oops! It seems there was an issue with your NIK or password!', 'Login Failed', {
  //     timeOut: 3000,
  //   })
  // }

  toggleContentVisibility() {
    this.isContentVisible = !this.isContentVisible; this.isComponentBeneathVisible = !this.isComponentBeneathVisible;
  }

  onInputSatis(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValueSatis = inputElement.value.replace(/,/g, '.');
    this.satisLimit = newValueSatis;
  }
  onInputUnsatis(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValueUnsatis = inputElement.value.replace(/,/g, '.');
    this.unsatisLimit = newValueUnsatis;
  }
  onInputUnaccept(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const newValueUnaccept = inputElement.value.replace(/,/g, '.');
    this.unacceptLimit = newValueUnaccept;
  }

  submitForm() {
    ////////////console.log(this.tableName);
    ////////////console.log(this.satisLimit);
    ////////////console.log(this.unsatisLimit);
    ////////////console.log(this.unacceptLimit);
    this.service.postValueLimit(this.tableName, this.satisLimit, this.unsatisLimit, this.unacceptLimit).subscribe(data => {
      ////////////console.log(data);
      this.service.getValueLimit().subscribe(data => {
        ////////////console.log(data);
        this.totallimit = data;
        this.spinner.hide()
      });
    })
    this.showSuccess()
    this.tableName = '';
    this.satisLimit = '';
    this.unsatisLimit = '';
    this.unacceptLimit = '';
   
  }

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getNodeRedTable().subscribe(data => {
        // ////////////console.log(data);
        this.totalkategori = data;

        Object.values(this.totalkategori).forEach(data => {
          // // //////////////////////////////////console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // //////////////////////////////////console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          // ////////////console.log(this.totalkategoriarr);

          // // //////////////////////////////////console.log(this.findingpending2);
        })

        this.spinner.hide()
      });
    })

    this.service.getValueLimit().subscribe(data => {
      ////////////console.log(data);
      this.totallimit = data;
      this.spinner.hide()
    });
   
    //// ////////////////////////console.log("1");
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

