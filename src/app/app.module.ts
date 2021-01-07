import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FurnituregardenRoutingModule } from './component/pages/furnituregarden/furnituregarden-routing.module';
import { MobiletabletRoutingModule } from './component/pages/mobiletablet/mobiletablet-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/common/header/header.component';
import { FooterComponent } from './component/common/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotorsComponent } from './component/pages/motors/motors.component';
import { PropertyforrentComponent } from './component/pages/propertyforrent/propertyforrent.component';
import { CarouselComponent } from './component/common/carousel/carousel.component';
import { PropertyforsaleComponent } from './component/pages/propertyforsale/propertyforsale.component';
import { ClassifiedComponent } from './component/pages/classified/classified.component';
import { FurnituregardenComponent } from './component/pages/furnituregarden/furnituregarden.component';
import { FurnituregardenModule } from './component/pages/furnituregarden/furnituregarden.module';
import { NavbarComponent } from './component/common/navbar/navbar.component';
import { MobiletabletComponent } from './component/pages/mobiletablet/mobiletablet.component';
import { MobilephoneComponent } from './component/pages/mobiletablet/mobilephone/mobilephone.component';
import { PhonetabletComponent } from './component/pages/mobiletablet/phonetablet/phonetablet.component';
import { OthermobiletabletComponent } from './component/pages/mobiletablet/othermobiletablet/othermobiletablet.component';
import { TabletsComponent } from './component/pages/mobiletablet/tablets/tablets.component';
import { JobComponent } from './component/pages/job/job.component';
import { CommunityComponent } from './component/pages/community/community.component';
import { NewprojectComponent } from './component/pages/newproject/newproject.component';
import { CommonofkindComponent } from './component/pages/motors/commonofkind/commonofkind.component';
import { ProductDetailComponent } from './component/common/product-detail/product-detail.component';
import { ProductsListComponent } from './component/common/products-list/products-list.component';
import { RealestateComponent } from './component/common/realestate/realestate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MotorsComponent,
    PropertyforrentComponent,
    CarouselComponent,
    PropertyforsaleComponent,
    ClassifiedComponent,
    FurnituregardenComponent,
    NavbarComponent,
    MobiletabletComponent,
    MobilephoneComponent,
    PhonetabletComponent,
    OthermobiletabletComponent,
    TabletsComponent,
    JobComponent,
    CommunityComponent,
    NewprojectComponent,
    CommonofkindComponent,
    ProductDetailComponent,
    ProductsListComponent,
    RealestateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FurnituregardenRoutingModule,
    MobiletabletRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    // FurnituregardenModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://www.positronx.io/angular-routing-tutorial-sending-getting-routes-parameters/