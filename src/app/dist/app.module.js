"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var core_2 = require("@agm/core");
var app_routing_module_1 = require("./app-routing.module");
var furnituregarden_routing_module_1 = require("./component/pages/furnituregarden/furnituregarden-routing.module");
var mobiletablet_routing_module_1 = require("./component/pages/mobiletablet/mobiletablet-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./component/common/header/header.component");
var footer_component_1 = require("./component/common/footer/footer.component");
var main_component_1 = require("./component/main/main.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var animations_1 = require("@angular/platform-browser/animations");
var motors_component_1 = require("./component/pages/motors/motors.component");
var propertyforrent_component_1 = require("./component/pages/propertyforrent/propertyforrent.component");
var carousel_component_1 = require("./component/common/carousel/carousel.component");
var propertyforsale_component_1 = require("./component/pages/propertyforsale/propertyforsale.component");
var classified_component_1 = require("./component/pages/classified/classified.component");
var furnituregarden_component_1 = require("./component/pages/furnituregarden/furnituregarden.component");
var navbar_component_1 = require("./component/common/navbar/navbar.component");
var mobiletablet_component_1 = require("./component/pages/mobiletablet/mobiletablet.component");
var mobilephone_component_1 = require("./component/pages/mobiletablet/mobilephone/mobilephone.component");
var phonetablet_component_1 = require("./component/pages/mobiletablet/phonetablet/phonetablet.component");
var othermobiletablet_component_1 = require("./component/pages/mobiletablet/othermobiletablet/othermobiletablet.component");
var tablets_component_1 = require("./component/pages/mobiletablet/tablets/tablets.component");
var job_component_1 = require("./component/pages/job/job.component");
var community_component_1 = require("./component/pages/community/community.component");
var newproject_component_1 = require("./component/pages/newproject/newproject.component");
var product_detail_component_1 = require("./component/common/product-detail/product-detail.component");
var products_list_component_1 = require("./component/common/products-list/products-list.component");
var realestate_component_1 = require("./component/common/realestate/realestate.component");
var estate_detail_component_1 = require("./component/common/estate-detail/estate-detail.component");
var new_project_detail_component_1 = require("./component/pages/newproject/new-project-detail/new-project-detail.component");
var new_project_detail_list_component_1 = require("./component/pages/newproject/new-project-detail-list/new-project-detail-list.component");
var new_project_developer_component_1 = require("./component/pages/newproject/new-project-developer/new-project-developer.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                main_component_1.MainComponent,
                motors_component_1.MotorsComponent,
                propertyforrent_component_1.PropertyforrentComponent,
                carousel_component_1.CarouselComponent,
                propertyforsale_component_1.PropertyforsaleComponent,
                classified_component_1.ClassifiedComponent,
                furnituregarden_component_1.FurnituregardenComponent,
                navbar_component_1.NavbarComponent,
                mobiletablet_component_1.MobiletabletComponent,
                mobilephone_component_1.MobilephoneComponent,
                phonetablet_component_1.PhonetabletComponent,
                othermobiletablet_component_1.OthermobiletabletComponent,
                tablets_component_1.TabletsComponent,
                job_component_1.JobComponent,
                community_component_1.CommunityComponent,
                newproject_component_1.NewprojectComponent,
                product_detail_component_1.ProductDetailComponent,
                products_list_component_1.ProductsListComponent,
                realestate_component_1.RealestateComponent,
                estate_detail_component_1.EstateDetailComponent,
                new_project_detail_component_1.NewProjectDetailComponent,
                new_project_detail_list_component_1.NewProjectDetailListComponent,
                new_project_developer_component_1.NewProjectDeveloperComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                furnituregarden_routing_module_1.FurnituregardenRoutingModule,
                mobiletablet_routing_module_1.MobiletabletRoutingModule,
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule,
                // CountryService,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// https://www.positronx.io/angular-routing-tutorial-sending-getting-routes-parameters/
