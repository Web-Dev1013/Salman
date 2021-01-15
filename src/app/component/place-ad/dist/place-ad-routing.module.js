"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlaceAdRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cg_classified_component_1 = require("./cg-classified/cg-classified.component");
var cg_community_component_1 = require("./cg-community/cg-community.component");
var cg_estate_rent_detail_component_1 = require("./cg-estate-rent/cg-estate-rent-detail/cg-estate-rent-detail.component");
var cg_estate_rent_component_1 = require("./cg-estate-rent/cg-estate-rent.component");
var cg_estate_sale_component_1 = require("./cg-estate-sale/cg-estate-sale.component");
var cg_job_hire_component_1 = require("./cg-job/cg-job-hire/cg-job-hire.component");
var cg_job_wanted_component_1 = require("./cg-job/cg-job-wanted/cg-job-wanted.component");
var cg_job_component_1 = require("./cg-job/cg-job.component");
var cg_cars_component_1 = require("./cg-motors/cg-cars/cg-cars.component");
var sell_type_dubbizle_component_1 = require("./cg-motors/cg-cars/sell-type-dubbizle/sell-type-dubbizle.component");
var sell_type_yourself_component_1 = require("./cg-motors/cg-cars/sell-type-yourself/sell-type-yourself.component");
var cg_motors_list_component_1 = require("./cg-motors/cg-motors-list/cg-motors-list.component");
var cg_motors_new_component_1 = require("./cg-motors/cg-motors-new/cg-motors-new.component");
var cg_motors_component_1 = require("./cg-motors/cg-motors.component");
var pick_category_component_1 = require("./pick-category/pick-category.component");
var place_ad_component_1 = require("./place-ad.component");
var routes = [
    { path: "", component: place_ad_component_1.PlaceAdComponent, children: [
            { path: "", component: pick_category_component_1.PickCategoryComponent },
            { path: "cg_motors", component: cg_motors_component_1.CgMotorsComponent },
            { path: "cg_motors/cg_cars", component: cg_cars_component_1.CgCarsComponent },
            { path: "cg_motors/cg_cars/dubizzle", component: sell_type_dubbizle_component_1.SellTypeDubbizleComponent },
            { path: "cg_motors/cg_cars/yourself", component: sell_type_yourself_component_1.SellTypeYourselfComponent },
            { path: "cg_motors/cg_motors_list/:id", component: cg_motors_list_component_1.CgMotorsListComponent },
            { path: "cg_motors/cg_motors_new/:id", component: cg_motors_new_component_1.CgMotorsNewComponent },
            { path: "cg_job/:id", component: cg_job_component_1.CgJobComponent },
            { path: "cg_job/cg_job_hire/:id", component: cg_job_hire_component_1.CgJobHireComponent },
            { path: "cg_job/cg_job_wanted/:id", component: cg_job_wanted_component_1.CgJobWantedComponent },
            { path: "cg_estate_rent", component: cg_estate_rent_component_1.CgEstateRentComponent },
            { path: "cg_estate_rent/cg_estate_rent_detail/:id", component: cg_estate_rent_detail_component_1.CgEstateRentDetailComponent },
            { path: "cg_estate_sale", component: cg_estate_sale_component_1.CgEstateSaleComponent },
            { path: "cg_community", component: cg_community_component_1.CgCommunityComponent },
            { path: "cg_classified", component: cg_classified_component_1.CgClassifiedComponent }
        ] }
];
var PlaceAdRoutingModule = /** @class */ (function () {
    function PlaceAdRoutingModule() {
    }
    PlaceAdRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], PlaceAdRoutingModule);
    return PlaceAdRoutingModule;
}());
exports.PlaceAdRoutingModule = PlaceAdRoutingModule;
