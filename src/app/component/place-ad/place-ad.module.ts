import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { PlaceAdRoutingModule } from './place-ad-routing.module';
import { PickCategoryComponent } from './pick-category/pick-category.component';
import { CgMotorsComponent } from './cg-motors/cg-motors.component';
import { CgCarsComponent } from './cg-motors/cg-cars/cg-cars.component';
import { SellTypeDubbizleComponent } from './cg-motors/cg-cars/sell-type-dubbizle/sell-type-dubbizle.component';
import { SellTypeYourselfComponent } from './cg-motors/cg-cars/sell-type-yourself/sell-type-yourself.component';
import { CgMotorsListComponent } from './cg-motors/cg-motors-list/cg-motors-list.component';
import { CgMotorsNewComponent } from './cg-motors/cg-motors-new/cg-motors-new.component';
import { CgJobComponent } from './cg-job/cg-job.component';
import { CgJobHireComponent } from './cg-job/cg-job-hire/cg-job-hire.component';
import { CgJobWantedComponent } from './cg-job/cg-job-wanted/cg-job-wanted.component';
import { CgEstateRentComponent } from './cg-estate-rent/cg-estate-rent.component';
import { CgEstateSaleComponent } from './cg-estate-sale/cg-estate-sale.component';
import { CgCommunityComponent } from './cg-community/cg-community.component';
import { CgClassifiedComponent } from './cg-classified/cg-classified.component';
import { CgEstateRentDetailComponent } from './cg-estate-rent/cg-estate-rent-detail/cg-estate-rent-detail.component';


@NgModule({
  declarations: [PickCategoryComponent, CgMotorsComponent, CgCarsComponent, SellTypeDubbizleComponent, SellTypeYourselfComponent, CgMotorsListComponent, CgMotorsNewComponent, CgJobComponent, CgJobHireComponent, CgJobWantedComponent, CgEstateRentComponent, CgEstateSaleComponent, CgCommunityComponent, CgClassifiedComponent, CgEstateRentDetailComponent],
  imports: [
    CommonModule,
    PlaceAdRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
    })
  ]
})
export class PlaceAdModule { }
