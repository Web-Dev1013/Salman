import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../../common/products-list/products-list.component';
import { ClassifiedComponent } from './classified.component';

const routes: Routes = [
  {path: "", component: ClassifiedComponent},
  {path: ":id", component: ProductsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassifiedRoutingModule { }
