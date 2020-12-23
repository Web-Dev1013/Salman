import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotorsComponent } from './motors.component';
const routes: Routes = [
  { path: "", component: MotorsComponent },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorsRoutingModule { }
