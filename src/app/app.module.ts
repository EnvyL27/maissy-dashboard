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
import { PreparationroomComponent } from './kluberplant/preparationroom/preparationroom.component';
import { DpcPumpComponent } from './kluberplant/preparationroom/dpc-pump/dpc-pump.component';
import { FilterPress1Component } from './kluberplant/preparationroom/filter-press1/filter-press1.component';
import { FilterPress2Component } from './kluberplant/preparationroom/filter-press2/filter-press2.component';
import { OxoniaComponent } from './kluberplant/preparationroom/oxonia/oxonia.component';
import { Pet1AgitatorsComponent } from './kluberplant/preparationroom/pet1-agitators/pet1-agitators.component';
import { Pet2AgitatorsComponent } from './kluberplant/preparationroom/pet2-agitators/pet2-agitators.component';
import { GamesComponent } from './games/games.component';
import { SuitComponent } from './suit/suit.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { SnkComponent } from './snk/snk.component';
import { EnergyIndexComponent } from './energy-index/energy-index.component';
import { EnergyUsageComponent } from './energy-usage/energy-usage.component';
import { EnergyUsageYearlyComponent } from './energy-usage-yearly/energy-usage-yearly.component';
import { EnergyOverviewComponent } from './energy-overview/energy-overview.component';
import { EnergyDailyReportComponent } from './energy-daily-report/energy-daily-report.component';
import { EnergyMonthlyReportComponent } from './energy-monthly-report/energy-monthly-report.component';
import { EnergyWeeklyReportComponent } from './energy-weekly-report/energy-weekly-report.component';
import { SeuDailyComponent } from './seu-daily/seu-daily.component';
import { SeuYearComponent } from './seu-year/seu-year.component';
import { SeuYear2Component } from './seu-year2/seu-year2.component';
import { RecComponent } from './rec/rec.component';
import { SolarComponent } from './solar/solar.component';
import { EmissionComponent } from './emission/emission.component';
import { ToeComponent } from './toe/toe.component';
import { PdmMOc1OnlineComponent } from './pdm-m-oc1-online/pdm-m-oc1-online.component';
import { LimitComponent } from './limit/limit.component';
import { LiveAlarmComponent } from './live-alarm/live-alarm.component';
import { LiveAlarmOc2Component } from './live-alarm-oc2/live-alarm-oc2.component';
import { ChecksheetDashboardComponent } from './checksheet/checksheet-dashboard/checksheet-dashboard.component';
import { Sidebar2Component } from './checksheet/layout/sidebar2/sidebar2.component';
import { Navbar2Component } from './checksheet/layout/navbar2/navbar2.component';
import { PrListComponent } from './checksheet/pr-monitoring/pr-list/pr-list.component';
import { PrInputPageComponent } from './checksheet/pr-monitoring/pr-input-page/pr-input-page.component';
import { PrUpdatePageComponent } from './checksheet/pr-monitoring/pr-update-page/pr-update-page.component';
import { TemuanListComponent } from './checksheet/input-temuan/temuan-list/temuan-list.component';
import { UserLevelListComponent } from './checksheet/user-level/user-level-list/user-level-list.component';
import { UserLevelUpdateComponent } from './checksheet/user-level/user-level-update/user-level-update.component';
import { CiltListComponent } from './checksheet/cilt/cilt-list/cilt-list.component';
import { CiltInputComponent } from './checksheet/cilt/cilt-input/cilt-input.component';
import { TemuanInputComponent } from './checksheet/input-temuan/temuan-input/temuan-input.component';
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
// import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
// import and register filepond file type validation plugin
import  * as FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import  * as FilepondPluginImageEdit from 'filepond-plugin-image-edit';
import  * as FilepondPluginImagePreview from 'filepond-plugin-image-preview';
import { PrMOci1Component } from './pr-m-oci1/pr-m-oci1.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { KrmDashboardComponent } from './krm-dashboard/krm-dashboard.component';
import { ActivityEndComponent } from './activity-end/activity-end.component';
import { NgxColorsModule } from 'ngx-colors';
registerPlugin(FilePondPluginFileValidateType,FilepondPluginImageEdit,FilepondPluginImagePreview);


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
    PreparationroomComponent,
    DpcPumpComponent,
    FilterPress1Component,
    FilterPress2Component,
    OxoniaComponent,
    Pet1AgitatorsComponent,
    Pet2AgitatorsComponent,
    GamesComponent,
    SuitComponent,
    TicTacToeComponent,
    NotFoundComponent,
    SnkComponent,
    EnergyIndexComponent,
    EnergyUsageComponent,
    EnergyUsageYearlyComponent,
    EnergyOverviewComponent,
    EnergyDailyReportComponent,
    EnergyMonthlyReportComponent,
    EnergyWeeklyReportComponent,
    SeuDailyComponent,
    SeuYearComponent,
    SeuYear2Component,
    RecComponent,
    SolarComponent,
    EmissionComponent,
    ToeComponent,
    PdmMOc1OnlineComponent,
    LimitComponent,
    LiveAlarmComponent,
    LiveAlarmOc2Component,
    ChecksheetDashboardComponent,
    Sidebar2Component,
    Navbar2Component,
    PrListComponent,
    PrInputPageComponent,
    PrUpdatePageComponent,
    TemuanListComponent,
    UserLevelListComponent,
    UserLevelUpdateComponent,
    CiltListComponent,
    CiltInputComponent,
    TemuanInputComponent,
    PrMOci1Component,
    KrmDashboardComponent,
    ActivityEndComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-top-right',
      progressBar: true,
      preventDuplicates: true,}),
    NgxSpinnerModule,
    NgxPaginationModule,
    NgxColorsModule,
    CommonModule,
    FormsModule,
    FilePondModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    NgxCaptureModule,
    BrowserAnimationsModule,
    NgxExtendedPdfViewerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
