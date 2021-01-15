import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from '../../common/products-list/products-list.component';
import { CommunityComponent } from './community.component';

const routes: Routes = [
  {path:"" , redirectTo: "community", pathMatch:"full"},
  {path: "community", component:CommunityComponent},
  {path: ":id", component: ProductsListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
