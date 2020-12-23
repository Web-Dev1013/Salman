import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnituregardenRoutingModule } from './furnituregarden-routing.module';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomeComponent } from './home/home.component';
import { GardenComponent } from './garden/garden.component';
import { LightingComponent } from './lighting/lighting.component';
import { RugsComponent } from './rugs/rugs.component';
import { CurtainsComponent } from './curtains/curtains.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [FurnitureComponent, HomeComponent, GardenComponent, LightingComponent, RugsComponent, CurtainsComponent, ToolsComponent],
  imports: [
    CommonModule, 
    FurnituregardenRoutingModule
  ]
})
export class FurnituregardenModule { }
