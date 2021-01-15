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
import { EstateDetailComponent } from './component/common/estate-detail/estate-detail.component';
import { UserInfoComponent } from './component/common/user-info/user-info.component';
import { MyChatsComponent } from './component/common/my-chats/my-chats.component';
import { AccountSettingComponent } from './component/common/account-setting/account-setting.component';
const routes: Routes = [
  {path: "", component:MainComponent},
  {path: "place_ad", loadChildren: () => import(`./component/place-ad/place-ad.module`).then(m => m.PlaceAdModule)},
  {path: "user_info/:id", component: UserInfoComponent},
  {path: "my_chats/:id", component: MyChatsComponent},
  {path: "account_setting/:id", component: AccountSettingComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "main/:id",  component: MainComponent},
  {path: "propertyforrent", loadChildren: () => import(`./component/pages/propertyforrent/propertyforrent.module`).then(m => m.PropertyforrentModule)},
  {path: "propertyforsale", loadChildren: () => import(`./component/pages/propertyforsale/propertyforsale.module`).then( m => m.PropertyforsaleModule)},
  {path: "carousel", component: CarouselComponent},
  {path: "classified", loadChildren: () => import(`./component/pages/classified/classified.module`).then(m => m.ClassifiedModule)},
  {path: "motors", loadChildren: () => import(`./component/pages/motors/motors.module`).then(m => m.MotorsModule)},
  {path: "furnituregarden", loadChildren: () => import(`./component/pages/furnituregarden/furnituregarden.module`).then(m => m.FurnituregardenModule)},
  {path: "mobiletablet", loadChildren: () => import(`./component/pages/mobiletablet/mobiletablet.module`).then(m => m.MobiletabletModule)}, 
  {path: "job", loadChildren: () => import(`./component/pages/job/job.module`).then(m => m.JobModule)},  
  {path: "community", loadChildren: () => import(`./component/pages/community/community.module`).then(m => m.CommunityModule)},
  // {path: "common/:id", component: ProductsListComponent},
  {path: "product_detail/:id", component: ProductDetailComponent},
  // {path: "realEstate/:id", component: RealestateComponent},
  {path: "estate_detail/:id", component: EstateDetailComponent},
  {path: "propertynewproject", loadChildren: () => import(`./component/pages/newproject/newproject.module`).then(m => m.NewprojectModule)},

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
