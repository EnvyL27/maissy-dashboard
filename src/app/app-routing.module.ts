import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdmDashboardComponent } from './pdm-dashboard/pdm-dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'pdm_dashboard', component: PdmDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
