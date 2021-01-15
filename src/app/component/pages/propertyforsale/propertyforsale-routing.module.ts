import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealestateComponent } from '../../common/realestate/realestate.component';
import { PropertyforsaleComponent } from './propertyforsale.component';

const routes: Routes = [
  {path: "", component: PropertyforsaleComponent},
  {path: ":id", component: RealestateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyforsaleRoutingModule { }
