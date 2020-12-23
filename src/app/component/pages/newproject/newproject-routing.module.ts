import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbuDhabiComponent } from './abu-dhabi/abu-dhabi.component';
import { AjmanComponent } from './ajman/ajman.component';
import { AlAinComponent } from './al-ain/al-ain.component';
import { AllcitiesComponent } from './allcities/allcities.component';
import { DubaiComponent } from './dubai/dubai.component';
import { FujairahComponent } from './fujairah/fujairah.component';
import { NewprojectComponent } from './newproject.component';
import { RasAlKhaimahComponent } from './ras-al-khaimah/ras-al-khaimah.component';
import { SharjahComponent } from './sharjah/sharjah.component';

const routes: Routes = [
  {path: "", redirectTo:"propertynewproject", pathMatch:"full"},
  {path: "propertynewproject", component:NewprojectComponent, children:[
    {path: "", redirectTo:"DubaiProject", pathMatch:"full"},
    {path: "DubaiProject", component:DubaiComponent},
    {path: "SharjahProject", component: SharjahComponent},
    {path: "AbuDhabiProject", component: AbuDhabiComponent},
    {path: "FujairahProject", component: FujairahComponent},
    {path: "AlAinProject", component:AlAinComponent},
    {path: "RasAlKhaimahProject", component:RasAlKhaimahComponent},
    {path: "AjmanProject", component:AjmanComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewprojectRoutingModule { }
