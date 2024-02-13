import { Component, OnInit } from '@angular/core';
import { CountService } from '../service/master/count.service';
import { Chart } from 'chart.js/auto';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-activity-end',
  templateUrl: './activity-end.component.html',
  styleUrls: ['./activity-end.component.css']
})
export class ActivityEndComponent implements OnInit {
  public resolved: boolean = false;

  filter: boolean = false
  isOc: boolean = false
  isFsb: boolean = false
  public loaddata: any;
  searchtext: any;
  currentPage: number = 0
  krmData: any
  krmList: any[] = []
  dataFilter: any = []
  deskripsi: any = 'Loading..';
  area: any
  section: any
  sectionData: any = []
  sectionFiltered: any = []
  sectionShow: boolean = false
  cardShow : boolean = false
  imagePopUp : boolean = false
  addPopUp : boolean = false
  imageUrl : any
  getEmployee : any
  cardData : any[] = []
  
  selectedColor: string = "#9C27B0";
  colorToAdd: string = "#EC407A";
  colorPalette: Array<any> = [
    {
      preview: "#9c27b0e0",
      variants: [
        "#9c27b0",
        "#9c27b0de",
        "#9c27b0bd",
        "#9c27b09c",
        "#9c27b075",
        "#9c27b047",
      ],
    },
    "#00BCD4",
    "#03A9F4",
    "#B2F35C",
  ];

  public addToPalette() {
    this.colorPalette.push(this.colorToAdd);
  }

  logColor($event : any){
    console.log($event);
    console.log(this.colorToAdd);
    
    
  }

  

  addOpen(){
    this.addPopUp = !this.addPopUp
  }

  cancelAdd(){
    this.addPopUp = false
  }

  imageOpen($event : any){
    this.imageUrl = $event
    this.imagePopUp = !this.imagePopUp
  }

  cancelPopUp(){
    this.imagePopUp = false
  }

  cardOpen($event : any) {
    console.log($event);
    
    this.cardData = []
    this.cardShow = !this.cardShow
    console.log(this.krmList);
    
    this.krmList.forEach(element => {
      if(element.id_data == $event){
        this.cardData.push(element)
      }
    });
    console.log(this.cardData);
    
  }
  cardClose(){
    this.cardShow = false
  }
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }

  filterButton() {
    this.filter = !this.filter
  }
  uniqueSections = new Set<string>();
  areaFilter() {
    this.section = ''
    this.krmList = []
    this.sectionData = []
    this.sectionFiltered = []
    this.sectionShow = true
    this.service.getKrmData().subscribe(data => {
      this.dataFilter = data
      this.dataFilter.forEach((element: any) => {
        if (element.id_area == this.area) {
          this.krmList.push(element)
        }
      });

      if (this.area == 1 || this.area == 2) {
        this.isOc = true
      } else {
        this.isOc = false
      }


      this.service.getPrAllSection().subscribe(data => {
        this.sectionData = data
        //////////console.log(this.area + ' hah');

        this.sectionData.forEach((element: any) => {
          //////////console.log('sini si');
          //////////console.log(element.id_area);

          if (element.id_area == this.area) {
            this.sectionFiltered.push(element)
          }
        });

        console.log(this.krmList);
        

      })

      this.spinner.hide()
      this.resolved = true
    })

  }

  sectionFilter() {
    this.currentPage = 0
    this.krmList = []
    console.log(this.section);
    this.service.getKrmData().subscribe(data => {
      this.dataFilter = data
      this.dataFilter.forEach((element: any) => {
        if (element.section == this.section && element.id_area == this.area) {
          this.krmList.push(element)
        }
      });


      this.spinner.hide()
      this.resolved = true
    })

  }

  resetFilter() {
    this.area = ''
    this.section = ''
    this.filter  = false
    this.krmList = []
    this.service.getKrmData().subscribe(data => {
      this.krmData = data
      this.krmData.forEach((element: any) => {
        this.krmList.push(element)
      });
      console.log(this.krmList);

      this.spinner.hide()
      this.resolved = true
    }
    );

  }

  async ngOnInit(): Promise<void> {
    
    
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getSchedule().subscribe(data => {
        console.log(data);
        
        this.krmData = data
        this.krmData.forEach((element: any) => {
          if(element.id_header == 1){
            this.krmList.push(element)
          }
         
        });
        console.log(this.krmList);

        this.spinner.hide()
        this.resolved = true
      }
      );

      this.service.getEmployeeData().subscribe(data => {
        this.getEmployee.push(data)
      })

    });
    this.spinner.show();
    this.loaddata = await this.loaddata;
  }
};

