import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewprojectRoutingModule } from './newproject-routing.module';
import { AllcitiesComponent } from './allcities/allcities.component';
import { DubaiComponent } from './dubai/dubai.component';
import { SharjahComponent } from './sharjah/sharjah.component';
import { AbuDhabiComponent } from './abu-dhabi/abu-dhabi.component';
import { FujairahComponent } from './fujairah/fujairah.component';
import { AlAinComponent } from './al-ain/al-ain.component';
import { RasAlKhaimahComponent } from './ras-al-khaimah/ras-al-khaimah.component';
import { AjmanComponent } from './ajman/ajman.component';


@NgModule({
  declarations: [AllcitiesComponent, DubaiComponent, SharjahComponent, AbuDhabiComponent, FujairahComponent, AlAinComponent, RasAlKhaimahComponent, AjmanComponent],
  imports: [
    CommonModule,
    NewprojectRoutingModule,
  ]
})
export class NewprojectModule { }
