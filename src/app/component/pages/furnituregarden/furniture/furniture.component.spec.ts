import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FurnituregardenComponent } from "./furnituregarden.component";
import { FurnitureComponent } from "./furniture/furniture.component";

const routes: Routes = [
  { path: "", redirectTo: "furnituregarden", pathMatch: "full" },
  {
    path: "furnituregarden", component: FurnituregardenComponent, children: [
      {path: "", redirectTo:"furniture", pathMatch:"full"},
      {path: "furniture", component: FurnitureComponent},
      {path: "home", component: HomeComponent}
    ]
  }
];
