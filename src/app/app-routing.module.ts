import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdmDashboardComponent } from './pdm-dashboard/pdm-dashboard.component';
import { AmMOci1Component } from './am-m-oci1/am-m-oci1.component';
import { AmMOci2Component } from './am-m-oci2/am-m-oci2.component';
import { AmMFsbComponent } from './am-m-fsb/am-m-fsb.component';
import { PdmMOci1Component } from './pdm-m-oci1/pdm-m-oci1.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pdm_dashboard', component: PdmDashboardComponent},
  {path: 'am_m_oci1',component: AmMOci1Component},
  {path: 'am_m_oci2',component: AmMOci2Component},
  {path: 'am_m_fsb', component: AmMFsbComponent},
  {path: 'pdm_m_oci1', component: PdmMOci1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
