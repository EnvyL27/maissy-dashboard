import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PdmDashboardComponent } from './pdm-dashboard/pdm-dashboard.component';
import { FilterListPipe } from './filter-list.pipe';
import { NgxCaptureModule } from 'ngx-capture';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AmMOci1Component } from './am-m-oci1/am-m-oci1.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from './custom-filter-pipe.pipe';
import { AmMOci2Component } from './am-m-oci2/am-m-oci2.component';
import { AmMFsbComponent } from './am-m-fsb/am-m-fsb.component';
import { PdmMOci1Component } from './pdm-m-oci1/pdm-m-oci1.component';
import { LoginComponent } from './login/login.component';
import { PdmMOci2Component } from './pdm-m-oci2/pdm-m-oci2.component';
import { PdmMFsbComponent } from './pdm-m-fsb/pdm-m-fsb.component';
import { AlertComponent } from './alert/alert.component';
import { CiltMOci1Component } from './cilt-m-oci1/cilt-m-oci1.component';
import { CiltMOci2Component } from './cilt-m-oci2/cilt-m-oci2.component';
import { CiltMFsbComponent } from './cilt-m-fsb/cilt-m-fsb.component';
import { CostMOci1Component } from './cost-m-oci1/cost-m-oci1.component';
import { CostMOci2Component } from './cost-m-oci2/cost-m-oci2.component';
import { CostMFsbComponent } from './cost-m-fsb/cost-m-fsb.component';
import { AppsLinkComponent } from './apps-link/apps-link.component';
import { Big5Component } from './big5/big5.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContainerConveyorOffComponent } from './kluberplant/offlinepacking/container-conveyor-off/container-conveyor-off.component';
import { ColorcodeComponent } from './kluber/colorcode/colorcode.component';
import { GreaseComponent } from './kluber/grease/grease.component';
import { OilComponent } from './kluber/oil/oil.component';
import { SpraysComponent } from './kluber/sprays/sprays.component';
import { MaintenanceproductComponent } from './kluber/maintenanceproduct/maintenanceproduct.component';
import { PasteComponent } from './kluber/paste/paste.component';
import { OfflinepackingComponent } from './kluberplant/offlinepacking/offlinepacking.component';
import { EmptyboxOffComponent } from './kluberplant/offlinepacking/emptybox-off/emptybox-off.component';
import { PackConveyorOffComponent } from './kluberplant/offlinepacking/pack-conveyor-off/pack-conveyor-off.component';
import { ResealerOffComponent } from './kluberplant/offlinepacking/resealer-off/resealer-off.component';
import { RobopackerOffComponent } from './kluberplant/offlinepacking/robopacker-off/robopacker-off.component';
import { Petline1Component } from './kluberplant/petline1/petline1.component';
import { BottleShowerComponent } from './kluberplant/petline1/bottle-shower/bottle-shower.component';
import { ContainerConveyorComponent } from './kluberplant/petline1/container-conveyor/container-conveyor.component';
import { DividerComponent } from './kluberplant/petline1/divider/divider.component';
import { FillerComponent } from './kluberplant/petline1/filler/filler.component';
import { InjectionMolderComponent } from './kluberplant/petline1/injection-molder/injection-molder.component';
import { KronesComponent } from './kluberplant/petline1/krones/krones.component';
import { LabellerComponent } from './kluberplant/petline1/labeller/labeller.component';
import { PackConveyorComponent } from './kluberplant/petline1/pack-conveyor/pack-conveyor.component';
import { PackRollerConveyorsComponent } from './kluberplant/petline1/pack-roller-conveyors/pack-roller-conveyors.component';
import { PalletConveyorComponent } from './kluberplant/petline1/pallet-conveyor/pallet-conveyor.component';
import { PalletiserComponent } from './kluberplant/petline1/palletiser/palletiser.component';
import { SanyuComponent } from './kluberplant/petline1/sanyu/sanyu.component';
import { SheetFeederComponent } from './kluberplant/petline1/sheet-feeder/sheet-feeder.component';
import { ShrinkTrayComponent } from './kluberplant/petline1/shrink-tray/shrink-tray.component';
import { Petline2Component } from './kluberplant/petline2/petline2.component';
import { Bottleblowerpt2Component } from './kluberplant/petline2/bottleblowerpt2/bottleblowerpt2.component';
import { Caserpt2Component } from './kluberplant/petline2/caserpt2/caserpt2.component';
import { Conveyorpt2Component } from './kluberplant/petline2/conveyorpt2/conveyorpt2.component';
import { Fillerpt2Component } from './kluberplant/petline2/fillerpt2/fillerpt2.component';
import { Injectionmolderpt2Component } from './kluberplant/petline2/injectionmolderpt2/injectionmolderpt2.component';
import { Labellerpt2Component } from './kluberplant/petline2/labellerpt2/labellerpt2.component';
import { Packconveyorpt2Component } from './kluberplant/petline2/packconveyorpt2/packconveyorpt2.component';
import { Palletconveyorpt2Component } from './kluberplant/petline2/palletconveyorpt2/palletconveyorpt2.component';
import { Palletiserpt2Component } from './kluberplant/petline2/palletiserpt2/palletiserpt2.component';
import { Sanyudividerpt2Component } from './kluberplant/petline2/sanyudividerpt2/sanyudividerpt2.component';
import { Sheetfeederpt2Component } from './kluberplant/petline2/sheetfeederpt2/sheetfeederpt2.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    FilterListPipe,
    NavbarComponent,
    FooterComponent,
    PdmDashboardComponent,
    AmMOci1Component,
    CustomFilterPipe,
    AmMOci2Component,
    AmMFsbComponent,
    PdmMOci1Component,
    LoginComponent,
    PdmMOci2Component,
    PdmMFsbComponent,
    AlertComponent,
    CiltMOci1Component,
    CiltMOci2Component,
    CiltMFsbComponent,
    CostMOci1Component,
    CostMOci2Component,
    CostMFsbComponent,
    AppsLinkComponent,
    Big5Component,
    AboutusComponent,
    ContainerConveyorOffComponent,
    ColorcodeComponent,
    GreaseComponent,
    OilComponent,
    SpraysComponent,
    MaintenanceproductComponent,
    PasteComponent,
    OfflinepackingComponent,
    EmptyboxOffComponent,
    PackConveyorOffComponent,
    ResealerOffComponent,
    RobopackerOffComponent,
    Petline1Component,
    BottleShowerComponent,
    ContainerConveyorComponent,
    DividerComponent,
    FillerComponent,
    InjectionMolderComponent,
    KronesComponent,
    LabellerComponent,
    PackConveyorComponent,
    PackRollerConveyorsComponent,
    PalletConveyorComponent,
    PalletiserComponent,
    SanyuComponent,
    SheetFeederComponent,
    ShrinkTrayComponent,
    Petline2Component,
    Bottleblowerpt2Component,
    Caserpt2Component,
    Conveyorpt2Component,
    Fillerpt2Component,
    Injectionmolderpt2Component,
    Labellerpt2Component,
    Packconveyorpt2Component,
    Palletconveyorpt2Component,
    Palletiserpt2Component,
    Sanyudividerpt2Component,
    Sheetfeederpt2Component,

  ],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    NgxCaptureModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
