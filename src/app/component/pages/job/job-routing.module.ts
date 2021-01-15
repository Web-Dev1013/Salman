import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../../common/products-list/products-list.component';
import { JobComponent } from './job.component';

const routes: Routes = [
  {path: "", redirectTo: "job", pathMatch:"full"},
  {path: "job", component:JobComponent},
  {path: ":id", component: ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
