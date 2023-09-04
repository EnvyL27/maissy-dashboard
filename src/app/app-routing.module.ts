import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdmDashboardComponent } from './pdm-dashboard/pdm-dashboard.component';
import { AmMOci1Component } from './am-m-oci1/am-m-oci1.component';
import { AmMOci2Component } from './am-m-oci2/am-m-oci2.component';
import { AmMFsbComponent } from './am-m-fsb/am-m-fsb.component';
import { PdmMOci1Component } from './pdm-m-oci1/pdm-m-oci1.component';
import { PdmMOci2Component } from './pdm-m-oci2/pdm-m-oci2.component';
import { PdmMFsbComponent } from './pdm-m-fsb/pdm-m-fsb.component';
import { CiltMOci1Component } from './cilt-m-oci1/cilt-m-oci1.component';
import { CiltMOci2Component } from './cilt-m-oci2/cilt-m-oci2.component';
import { CiltMFsbComponent } from './cilt-m-fsb/cilt-m-fsb.component';
import { CostMOci1Component } from './cost-m-oci1/cost-m-oci1.component';
import { CostMOci2Component } from './cost-m-oci2/cost-m-oci2.component';
import { CostMFsbComponent } from './cost-m-fsb/cost-m-fsb.component';
import { AppsLinkComponent } from './apps-link/apps-link.component';
import { Big5Component } from './big5/big5.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GreaseComponent } from './kluber/grease/grease.component';
import { OilComponent } from './kluber/oil/oil.component';
import { SpraysComponent } from './kluber/sprays/sprays.component';
import { PasteComponent } from './kluber/paste/paste.component';
import { MaintenanceproductComponent } from './kluber/maintenanceproduct/maintenanceproduct.component';
import { ColorcodeComponent } from './kluber/colorcode/colorcode.component';
import { ContainerConveyorOffComponent } from './kluberplant/offlinepacking/container-conveyor-off/container-conveyor-off.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/guard/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},

  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'pdm_dashboard', component: PdmDashboardComponent, canActivate: [AuthGuard]},
  {path: 'am_m_oci1',component: AmMOci1Component, canActivate: [AuthGuard]},
  {path: 'am_m_oci2',component: AmMOci2Component, canActivate: [AuthGuard]},
  {path: 'am_m_fsb', component: AmMFsbComponent, canActivate: [AuthGuard]},
  {path: 'pdm_m_oci1', component: PdmMOci1Component, canActivate: [AuthGuard]},
  {path: 'pdm_m_oci2', component: PdmMOci2Component, canActivate: [AuthGuard]},
  {path: 'pdm_m_fsb', component: PdmMFsbComponent, canActivate: [AuthGuard]},
  {path: 'cilt_m_oci1', component: CiltMOci1Component, canActivate: [AuthGuard]},
  {path: 'cilt_m_oci2', component: CiltMOci2Component, canActivate: [AuthGuard]},
  {path: 'cilt_m_fsb', component: CiltMFsbComponent, canActivate: [AuthGuard]},
  {path: 'cost_m_oci1', component: CostMOci1Component, canActivate: [AuthGuard]},
  {path: 'cost_m_oci2', component: CostMOci2Component, canActivate: [AuthGuard]},
  {path: 'cost_m_fsb', component: CostMFsbComponent, canActivate: [AuthGuard]},
  {path: 'apps_link', component: AppsLinkComponent, canActivate: [AuthGuard]},
  {path: 'big5', component: Big5Component, canActivate: [AuthGuard]},
  {path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard]},
  {path: 'grease', component: GreaseComponent, canActivate: [AuthGuard]},
  {path: 'oil', component: OilComponent, canActivate: [AuthGuard]},
  {path: 'sprays', component: SpraysComponent, canActivate: [AuthGuard]},
  {path: 'paste', component: PasteComponent, canActivate: [AuthGuard]},
  {path: 'colorcode', component: ColorcodeComponent, canActivate: [AuthGuard]},
  {path: 'maintenanceproduct', component: MaintenanceproductComponent, canActivate: [AuthGuard]},
  {path: 'containeroffline', component: ContainerConveyorOffComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
