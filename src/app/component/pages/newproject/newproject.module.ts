import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewprojectRoutingModule } from './newproject-routing.module';
import { NewProjectDetailPromotionComponent } from './new-project-detail-promotion/new-project-detail-promotion.component';
import { NewProjectForDeveloperComponent } from './new-project-for-developer/new-project-for-developer.component';


@NgModule({
  declarations: [NewProjectDetailPromotionComponent, NewProjectForDeveloperComponent],
  imports: [
    CommonModule,
    NewprojectRoutingModule,
  ]
})
export class NewprojectModule { }
