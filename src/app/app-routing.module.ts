import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from "./component/main/main.component";
import { PropertyforrentComponent } from "./component/pages/propertyforrent/propertyforrent.component";
import { PropertyforsaleComponent } from "./component/pages/propertyforsale/propertyforsale.component";
import { CarouselComponent } from "./component/common/carousel/carousel.component";
import { ClassifiedComponent} from "./component/pages/classified/classified.component";
import { NavbarComponent } from './component/common/navbar/navbar.component';
import { ProductDetailComponent } from './component/common/product-detail/product-detail.component';
import { ProductsListComponent } from './component/common/products-list/products-list.component';
import { MotorsComponent } from './component/pages/motors/motors.component';
import { RealestateComponent } from './component/common/realestate/realestate.component';
const routes: Routes = [
  {path: "", redirectTo: "main", pathMatch: "full"},
  {path: "navbar", component: NavbarComponent},
  {path: "main",  component: MainComponent},
  {path: "propertyforrent", component: PropertyforrentComponent},
  {path: "propertyforsale", component: PropertyforsaleComponent},
  {path: "carousel", component: CarouselComponent},
  {path: "classified", component: ClassifiedComponent},
  {path: "motors", component: MotorsComponent},
  {path: "furnituregarden", loadChildren: () => import(`./component/pages/furnituregarden/furnituregarden.module`).then(m => m.FurnituregardenModule)},
  {path: "mobiletablet", loadChildren: () => import(`./component/pages/mobiletablet/mobiletablet.module`).then(m => m.MobiletabletModule)}, 
  {path: "job", loadChildren: () => import(`./component/pages/job/job.module`).then(m => m.JobModule)},  
  {path: "community", loadChildren: () => import(`./component/pages/community/community.module`).then(m => m.CommunityModule)},
  {path: "propertynewproject", loadChildren: () => import(`./component/pages/newproject/newproject.module`).then(m => m.NewprojectModule)},
  {path: "common/:id", component: ProductsListComponent},
  {path: "product_detail/:id", component: ProductDetailComponent},
  {path: "realEstate/:id", component: RealestateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
