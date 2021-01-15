import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewprojectComponent } from '../../pages/newproject/newproject.component';
import { NewProjectDetailListComponent } from './new-project-detail-list/new-project-detail-list.component';
import { NewProjectDetailPromotionComponent } from './new-project-detail-promotion/new-project-detail-promotion.component';
import { NewProjectDetailComponent } from './new-project-detail/new-project-detail.component';
import { NewProjectDeveloperComponent } from './new-project-developer/new-project-developer.component';
import { NewProjectForDeveloperComponent } from './new-project-for-developer/new-project-for-developer.component';

const routes: Routes = [
  {
    path: "", component: NewprojectComponent, children: [
      { path: "", redirectTo: "new_project_detail_list", pathMatch: "full" },
      { path: "new_project_detail_list", component: NewProjectDetailListComponent },
      { path: "new_project_detail/:id", component: NewProjectDetailComponent },
      { path: ":id", component: NewProjectDetailListComponent },
      { path: "new_project_developer", component: NewProjectDeveloperComponent },
      { path: "new_project_detail_promotion/:id", component: NewProjectDetailPromotionComponent },
      { path: "new_project_for_developer/:id", component: NewProjectForDeveloperComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewprojectRoutingModule { }
