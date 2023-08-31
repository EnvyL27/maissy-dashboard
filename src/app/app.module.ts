import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
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

  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    NgxCaptureModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
