import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CgClassifiedComponent } from './cg-classified/cg-classified.component';
import { CgCommunityComponent } from './cg-community/cg-community.component';
import { CgEstateRentDetailComponent } from './cg-estate-rent/cg-estate-rent-detail/cg-estate-rent-detail.component';
import { CgEstateRentComponent } from './cg-estate-rent/cg-estate-rent.component';
import { CgEstateSaleComponent } from './cg-estate-sale/cg-estate-sale.component';
import { CgJobHireComponent } from './cg-job/cg-job-hire/cg-job-hire.component';
import { CgJobWantedComponent } from './cg-job/cg-job-wanted/cg-job-wanted.component';
import { CgJobComponent } from './cg-job/cg-job.component';
import { CgCarsComponent } from './cg-motors/cg-cars/cg-cars.component';
import { SellTypeDubbizleComponent } from './cg-motors/cg-cars/sell-type-dubbizle/sell-type-dubbizle.component';
import { SellTypeYourselfComponent } from './cg-motors/cg-cars/sell-type-yourself/sell-type-yourself.component';
import { CgMotorsListComponent } from './cg-motors/cg-motors-list/cg-motors-list.component';
import { CgMotorsNewComponent } from './cg-motors/cg-motors-new/cg-motors-new.component';
import { CgMotorsComponent } from './cg-motors/cg-motors.component';
import { PickCategoryComponent } from './pick-category/pick-category.component';
import { PlaceAdComponent } from './place-ad.component';

const routes: Routes = [
  {path: "", component:PlaceAdComponent, children:[
    {path: "", component:PickCategoryComponent},
    {path: "cg_motors", component:CgMotorsComponent },
    {path: "cg_motors/cg_cars", component:CgCarsComponent},
    {path: "cg_motors/cg_cars/dubizzle", component: SellTypeDubbizleComponent},
    {path: "cg_motors/cg_cars/yourself", component: SellTypeYourselfComponent},
    {path: "cg_motors/cg_motors_list/:id", component: CgMotorsListComponent},
    {path: "cg_motors/cg_motors_new/:id", component: CgMotorsNewComponent},
    {path: "cg_job/:id", component: CgJobComponent},
    {path: "cg_job/cg_job_hire/:id", component:CgJobHireComponent},
    {path: "cg_job/cg_job_wanted/:id", component:CgJobWantedComponent},
    {path: "cg_estate_rent", component: CgEstateRentComponent},
    {path: "cg_estate_rent/cg_estate_rent_detail/:id", component: CgEstateRentDetailComponent},
    {path: "cg_estate_sale", component: CgEstateSaleComponent},
    {path: "cg_community", component: CgCommunityComponent},
    {path: "cg_classified", component: CgClassifiedComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceAdRoutingModule { }
