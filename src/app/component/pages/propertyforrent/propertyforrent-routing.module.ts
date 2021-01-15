import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstateDetailComponent } from '../../common/estate-detail/estate-detail.component';
import { RealestateComponent } from '../../common/realestate/realestate.component';
import { PropertyforrentComponent } from './propertyforrent.component';

const routes: Routes = [
  {path: "", component: PropertyforrentComponent},
  {path: ":id", component: RealestateComponent},
  {path: "/propertyforrent/estate_detail/:id", component: EstateDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyforrentRoutingModule { }
