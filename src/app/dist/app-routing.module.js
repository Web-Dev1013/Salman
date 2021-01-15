"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_component_1 = require("./component/main/main.component");
var carousel_component_1 = require("./component/common/carousel/carousel.component");
var navbar_component_1 = require("./component/common/navbar/navbar.component");
var product_detail_component_1 = require("./component/common/product-detail/product-detail.component");
var estate_detail_component_1 = require("./component/common/estate-detail/estate-detail.component");
var user_info_component_1 = require("./component/common/user-info/user-info.component");
var my_chats_component_1 = require("./component/common/my-chats/my-chats.component");
var account_setting_component_1 = require("./component/common/account-setting/account-setting.component");
var routes = [
    { path: "", component: main_component_1.MainComponent },
    { path: "place_ad", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/place-ad/place-ad.module"); }).then(function (m) { return m.PlaceAdModule; }); } },
    { path: "user_info/:id", component: user_info_component_1.UserInfoComponent },
    { path: "my_chats/:id", component: my_chats_component_1.MyChatsComponent },
    { path: "account_setting/:id", component: account_setting_component_1.AccountSettingComponent },
    { path: "navbar", component: navbar_component_1.NavbarComponent },
    { path: "main/:id", component: main_component_1.MainComponent },
    { path: "propertyforrent", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/propertyforrent/propertyforrent.module"); }).then(function (m) { return m.PropertyforrentModule; }); } },
    { path: "propertyforsale", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/propertyforsale/propertyforsale.module"); }).then(function (m) { return m.PropertyforsaleModule; }); } },
    { path: "carousel", component: carousel_component_1.CarouselComponent },
    { path: "classified", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/classified/classified.module"); }).then(function (m) { return m.ClassifiedModule; }); } },
    { path: "motors", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/motors/motors.module"); }).then(function (m) { return m.MotorsModule; }); } },
    { path: "furnituregarden", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/furnituregarden/furnituregarden.module"); }).then(function (m) { return m.FurnituregardenModule; }); } },
    { path: "mobiletablet", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/mobiletablet/mobiletablet.module"); }).then(function (m) { return m.MobiletabletModule; }); } },
    { path: "job", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/job/job.module"); }).then(function (m) { return m.JobModule; }); } },
    { path: "community", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/community/community.module"); }).then(function (m) { return m.CommunityModule; }); } },
    // {path: "common/:id", component: ProductsListComponent},
    { path: "product_detail/:id", component: product_detail_component_1.ProductDetailComponent },
    // {path: "realEstate/:id", component: RealestateComponent},
    { path: "estate_detail/:id", component: estate_detail_component_1.EstateDetailComponent },
    { path: "propertynewproject", loadChildren: function () { return Promise.resolve().then(function () { return require("./component/pages/newproject/newproject.module"); }).then(function (m) { return m.NewprojectModule; }); } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
