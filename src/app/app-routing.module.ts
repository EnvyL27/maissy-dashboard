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
import { OfflinepackingComponent } from './kluberplant/offlinepacking/offlinepacking.component';
import { ContainerConveyorOffComponent } from './kluberplant/offlinepacking/container-conveyor-off/container-conveyor-off.component';
import { EmptyboxOffComponent } from './kluberplant/offlinepacking/emptybox-off/emptybox-off.component';
import { PackConveyorOffComponent } from './kluberplant/offlinepacking/pack-conveyor-off/pack-conveyor-off.component';
import { ResealerOffComponent } from './kluberplant/offlinepacking/resealer-off/resealer-off.component';
import { RobopackerOffComponent } from './kluberplant/offlinepacking/robopacker-off/robopacker-off.component';
import { Petline1Component } from './kluberplant/petline1/petline1.component';
import { InjectionMolderComponent } from './kluberplant/petline1/injection-molder/injection-molder.component';
import { BottleShowerComponent } from './kluberplant/petline1/bottle-shower/bottle-shower.component';
import { FillerComponent } from './kluberplant/petline1/filler/filler.component';
import { ContainerConveyorComponent } from './kluberplant/petline1/container-conveyor/container-conveyor.component';
import { LabellerComponent } from './kluberplant/petline1/labeller/labeller.component';
import { DividerComponent } from './kluberplant/petline1/divider/divider.component';
import { SheetFeederComponent } from './kluberplant/petline1/sheet-feeder/sheet-feeder.component';
import { ShrinkTrayComponent } from './kluberplant/petline1/shrink-tray/shrink-tray.component';
import { PackConveyorComponent } from './kluberplant/petline1/pack-conveyor/pack-conveyor.component';
import { PalletConveyorComponent } from './kluberplant/petline1/pallet-conveyor/pallet-conveyor.component';
import { PalletiserComponent } from './kluberplant/petline1/palletiser/palletiser.component';
import { PackRollerConveyorsComponent } from './kluberplant/petline1/pack-roller-conveyors/pack-roller-conveyors.component';
import { SanyuComponent } from './kluberplant/petline1/sanyu/sanyu.component';
import { KronesComponent } from './kluberplant/petline1/krones/krones.component';
import { Petline2Component } from './kluberplant/petline2/petline2.component';
import { Injectionmolderpt2Component } from './kluberplant/petline2/injectionmolderpt2/injectionmolderpt2.component';
import { Bottleblowerpt2Component } from './kluberplant/petline2/bottleblowerpt2/bottleblowerpt2.component';
import { Fillerpt2Component } from './kluberplant/petline2/fillerpt2/fillerpt2.component';
import { Conveyorpt2Component } from './kluberplant/petline2/conveyorpt2/conveyorpt2.component';
import { Labellerpt2Component } from './kluberplant/petline2/labellerpt2/labellerpt2.component';
import { Sanyudividerpt2Component } from './kluberplant/petline2/sanyudividerpt2/sanyudividerpt2.component';
import { Caserpt2Component } from './kluberplant/petline2/caserpt2/caserpt2.component';
import { Sheetfeederpt2Component } from './kluberplant/petline2/sheetfeederpt2/sheetfeederpt2.component';
import { Packconveyorpt2Component } from './kluberplant/petline2/packconveyorpt2/packconveyorpt2.component';
import { Palletconveyorpt2Component } from './kluberplant/petline2/palletconveyorpt2/palletconveyorpt2.component';
import { Palletiserpt2Component } from './kluberplant/petline2/palletiserpt2/palletiserpt2.component';
import { PreparationroomComponent } from './kluberplant/preparationroom/preparationroom.component';
import { Pet1AgitatorsComponent } from './kluberplant/preparationroom/pet1-agitators/pet1-agitators.component';
import { Pet2AgitatorsComponent } from './kluberplant/preparationroom/pet2-agitators/pet2-agitators.component';
import { FilterPress1Component } from './kluberplant/preparationroom/filter-press1/filter-press1.component';
import { FilterPress2Component } from './kluberplant/preparationroom/filter-press2/filter-press2.component';
import { DpcPumpComponent } from './kluberplant/preparationroom/dpc-pump/dpc-pump.component';
import { OxoniaComponent } from './kluberplant/preparationroom/oxonia/oxonia.component';
import { GamesComponent } from './games/games.component';
import { SuitComponent } from './suit/suit.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
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
  {path: 'offlinepacking', component: OfflinepackingComponent, canActivate: [AuthGuard]},
  {path: 'robopacker', component: RobopackerOffComponent, canActivate: [AuthGuard]},
  {path: 'resealeroff', component: ResealerOffComponent, canActivate: [AuthGuard]},
  {path: 'emptybox', component: EmptyboxOffComponent, canActivate: [AuthGuard]},
  {path: 'packconveyoroff', component: PackConveyorOffComponent, canActivate: [AuthGuard]},
  {path: 'petline1', component: Petline1Component, canActivate: [AuthGuard]},
  {path: 'injectionmolder', component: InjectionMolderComponent, canActivate: [AuthGuard]},
  {path: 'bottleshower', component: BottleShowerComponent, canActivate: [AuthGuard]},
  {path: 'filler', component: FillerComponent, canActivate: [AuthGuard]},
  {path: 'containerconveyor', component: ContainerConveyorComponent, canActivate: [AuthGuard]},
  {path: 'labeller', component: LabellerComponent, canActivate: [AuthGuard]},
  {path: 'divider', component: DividerComponent, canActivate: [AuthGuard]},
  {path: 'sheetfeeder', component: SheetFeederComponent, canActivate: [AuthGuard]},
  {path: 'shrinktray', component: ShrinkTrayComponent, canActivate: [AuthGuard]},
  {path: 'packconveyor', component: PackConveyorComponent, canActivate: [AuthGuard]},
  {path: 'palletconveyor', component: PalletConveyorComponent, canActivate: [AuthGuard]},
  {path: 'palletiser', component: PalletiserComponent, canActivate: [AuthGuard]},
  {path: 'packrollerconveyor', component: PackRollerConveyorsComponent, canActivate: [AuthGuard]},
  {path: 'sanyu', component: SanyuComponent, canActivate: [AuthGuard]},
  {path: 'krones', component: KronesComponent, canActivate: [AuthGuard]},
  {path: 'petline2', component: Petline2Component, canActivate: [AuthGuard]},
  {path: 'injectmolderpt2', component: Injectionmolderpt2Component, canActivate: [AuthGuard]},
  {path: 'bottleblowerpt2', component: Bottleblowerpt2Component, canActivate: [AuthGuard]},
  {path: 'fillerpt2', component: Fillerpt2Component, canActivate: [AuthGuard]},
  {path: 'conveyorpt2', component: Conveyorpt2Component, canActivate: [AuthGuard]},
  {path: 'labellerpt2', component: Labellerpt2Component, canActivate: [AuthGuard]},
  {path: 'sanyudividerpt2', component: Sanyudividerpt2Component, canActivate: [AuthGuard]},
  {path: 'caserpt2', component: Caserpt2Component, canActivate: [AuthGuard]},
  {path: 'sheetfeederpt2', component: Sheetfeederpt2Component, canActivate: [AuthGuard]},
  {path: 'packconveyorpt2', component: Packconveyorpt2Component, canActivate: [AuthGuard]},
  {path: 'palletconveyorpt2', component: Palletconveyorpt2Component, canActivate: [AuthGuard]},
  {path: 'palletiserpt2', component: Palletiserpt2Component, canActivate: [AuthGuard]},
  {path: 'preparationroom', component: PreparationroomComponent, canActivate: [AuthGuard]},
  {path: 'pet1', component: Pet1AgitatorsComponent, canActivate: [AuthGuard]},
  {path: 'pet2', component: Pet2AgitatorsComponent, canActivate: [AuthGuard]},
  {path: 'filterpress1', component: FilterPress1Component, canActivate: [AuthGuard]},
  {path: 'filterpress2', component: FilterPress2Component, canActivate: [AuthGuard]},
  {path: 'dpcpump', component: DpcPumpComponent, canActivate: [AuthGuard]},
  {path: 'oxonia', component: OxoniaComponent, canActivate: [AuthGuard]},
  {path: 'games', component: GamesComponent, canActivate: [AuthGuard]},
  {path: 'suit', component: SuitComponent, canActivate: [AuthGuard]},
  {path: 'tictactoe', component: TicTacToeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
