import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobiletabletComponent } from './mobiletablet.component';
import { MobilephoneComponent } from './mobilephone/mobilephone.component';
import { OthermobiletabletComponent } from './othermobiletablet/othermobiletablet.component';
import { PhonetabletComponent } from './phonetablet/phonetablet.component';
import { TabletsComponent } from './tablets/tablets.component';

const routes: Routes = [
  { path: "", redirectTo: "mobiletablet", pathMatch: "full" },
  {
    path: "mobiletablet", component: MobiletabletComponent, children: [
      { path: "", redirectTo:"mobilephones", pathMatch:"full"},
      { path: "mobilephones", component:MobilephoneComponent},
      { path: ":id", component: TabletsComponent},
      { path: "phonetablet", component: PhonetabletComponent },
      { path: "tablets", component: TabletsComponent },
      { path: "othermobiletablet", component: OthermobiletabletComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobiletabletRoutingModule { }
