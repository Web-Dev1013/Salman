import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FurnituregardenComponent } from "./furnituregarden.component";
import { FurnitureComponent } from "./furniture/furniture.component";
import { LightingComponent } from "./lighting/lighting.component";
import { RugsComponent } from "./rugs/rugs.component";
import { ToolsComponent } from "./tools/tools.component";
import { CurtainsComponent } from "./curtains/curtains.component";
import { GardenComponent } from "./garden/garden.component";

const routes: Routes = [
  { path: "", redirectTo: "furnituregarden", pathMatch: "full" },
  {
    path: "furnituregarden", component: FurnituregardenComponent, children: [
      {path: "", redirectTo:"furniture", pathMatch:"full"},
      {path: ":id", component: FurnitureComponent},
      {path: "furniture", component: FurnitureComponent},
      {path: "home", component: HomeComponent},
      {path: "lighting", component: LightingComponent},
      {path: "rugs", component: RugsComponent},
      {path: "tools", component: ToolsComponent},
      {path: "curtains",component: CurtainsComponent},
      {path: "garden", component: GardenComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnituregardenRoutingModule { }
