import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { MainComponent } from './main/main.component';
import { CommonComponent } from './common/common.component';
import { ListComponent } from './common/list/list.component';


@NgModule({
  declarations: [MainComponent, CommonComponent, ListComponent],
  imports: [
    CommonModule,
    JobRoutingModule
  ]
})
export class JobModule { }
