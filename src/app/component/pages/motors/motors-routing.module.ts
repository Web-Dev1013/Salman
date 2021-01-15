import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../../common/products-list/products-list.component';
import { MotorsComponent } from './motors.component';

const routes: Routes = [
  {path: "", component: MotorsComponent},
  {path:":id", component: ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorsRoutingModule { }
