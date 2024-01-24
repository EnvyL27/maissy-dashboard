import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountService } from '../../../service/master/count.service';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-pr-list',
  templateUrl: './pr-list.component.html',
  styleUrls: ['./pr-list.component.css']
})
export class PrListComponent implements OnInit {

  filter: boolean = false
  isOc: boolean = false
  isFsb: boolean = false
  sectionList : any
  area: any
  section : any
  resolved: boolean = false
  sectionShow : boolean = false
  sectionData : any =[]
  sectionFiltered : any = []
  searchText: any
  prData: any = []
  dataFilter: any = []
  idDelete: any
  successAlert: boolean = false
  deleteAlert: boolean = false
  imagePopUp: boolean = false
  pdfpreview: boolean = false
  imageUrl: any
  prDataArray: any = []
  itemsPerPage: number = 0;
  math = Math;
  currentPage: number = 1;
  user = this.authService.getUser()
  adminLevel: boolean = false
  plannerLevel: boolean = false
  purchasingLevel: boolean = false
  user_level: any
  byId: any[] = []
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

  constructor(
    private service: CountService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    ) { }

    // url = 'http://127.0.0.1:3777/%7B%7BpdfSelect%7D%7D'

  filterButton() {
    this.filter = !this.filter
    ////////console.log(this.filter);
   
  }

  pdfSelect : any
  pdfNull : boolean = false
  previewUp($event : any){
    //console.log($event);
    if($event == ''){
      this.pdfNull = true
    }
    this.pdfpreview = !this.pdfpreview
    this.pdfSelect = 'http://192.168.9.47:3777/'+$event
  }

  previewClose(){
    this.pdfNull = false
    this.pdfpreview = false
  }

  areaFilter(){
    this.section = ''
    this.prData = []   
    this.sectionData = []
    this.sectionFiltered = []
    this.sectionShow = true
      this.service.getPrAllData().subscribe(data => {
        this.dataFilter = data
        this.dataFilter.forEach((element : any) => {
          if(element.area == this.area){
            this.prData.push(element)
          }
        });

        if(this.area == 1 || this.area == 2){
          this.isOc = true
        }else{
          this.isOc = false
        }
        
        ////////console.log(this.prData);

        this.service.getPrAllSection().subscribe(data => {
          this.sectionData = data
          ////////console.log(this.area + ' hah');
          
          this.sectionData.forEach((element : any) => {
            ////////console.log('sini si');
            ////////console.log(element.id_area);
            
            if(element.id_area == this.area){
              this.sectionFiltered.push(element)
            }
          });
          
          ////////console.log(this.sectionFiltered);
          
          
          
        })
        
        this.spinner.hide()
        this.resolved = true
      })
    
  }

  sectionFilter(){
    this.prData = []   
    ////////console.log(this.section);
    this.service.getPrAllData().subscribe(data => {
      this.dataFilter = data
      this.dataFilter.forEach((element : any) => {
        if(element.section == this.section && element.area == this.area){
          this.prData.push(element)
        }
      });
      
      ////////console.log(this.prData);
      
      this.spinner.hide()
      this.resolved = true
    })
    
  }

  popUp(url: any) {
    this.imagePopUp = !this.imagePopUp
    this.imageUrl = url
    ////////////console.log(this.imageUrl);

  }

  cancelPopUp() {
    this.imagePopUp = !this.imagePopUp
  }

  oke() {
    this.successAlert = !this.successAlert
    history.replaceState({ ...history.state, successAlert: null }, '');
    ////////////console.log(history.state);
  }

  delete(id: any) {
    this.idDelete = 0
    this.idDelete = id
    this.deleteAlert = !this.deleteAlert
  }

  okeDelete() {
    this.spinner.show()
    this.resolved = false
    this.service.deletePrData(this.idDelete).subscribe((data: any) => {
      this.ngOnInit()
    })
    this.spinner.hide()
    this.resolved = true
    this.deleteAlert = !this.deleteAlert
  }
  cancelDelete() {
    this.deleteAlert = !this.deleteAlert
  }

  navigateUpdate(idData: any) {
    this.router.navigateByUrl('/pr_update', { state: { id: idData }, })
  }

  ngOnInit() {
    this.user = this.authService.getUser()
    //////console.log(this.user[0].lg_nik);

    if (this.user[0].user_level == 99) {
      this.adminLevel = true
    } else {
      this.service.getTableUserById(this.user[0].lg_nik).subscribe(data => {
        ////console.log(data);
        this.byId.push(data)
        ////console.log(this.byId);
        
        this.user_level = this.byId[0].user_level
        ////console.log(this.user_level);
        
        if (this.user_level == 3) {
          this.plannerLevel = true
        } else if (this.user_level == 8) {
          this.purchasingLevel = true
        }
        else if (this.user_level == 99) {
          this.adminLevel = true
        }
        ////console.log(this.purchasingLevel);
      })     
    }

    this.spinner.show()
    ////////////console.log(history.state);
    this.successAlert = history.state.successAlert
    this.service.getPrAllData().subscribe(data => {
      this.prData = data
      ////////////console.log(this.prData);
      this.spinner.hide()
      this.resolved = true
    })

    
    // ////////console.log(this.sectionData);
    

  }

}
