import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { ListComponent } from './common/list/list.component';
import { JobComponent } from './job.component';

const routes: Routes = [
  {path: "", redirectTo: "job", pathMatch:"full"},
  {path: "job", component:JobComponent},
  {path: "common", component:MainComponent, children:[
    {path: "", redirectTo:"list", pathMatch:"full"},
    {path: "list:/job-id", component:ListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
