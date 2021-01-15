"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlaceAdModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@agm/core");
var place_ad_routing_module_1 = require("./place-ad-routing.module");
var pick_category_component_1 = require("./pick-category/pick-category.component");
var cg_motors_component_1 = require("./cg-motors/cg-motors.component");
var cg_cars_component_1 = require("./cg-motors/cg-cars/cg-cars.component");
var sell_type_dubbizle_component_1 = require("./cg-motors/cg-cars/sell-type-dubbizle/sell-type-dubbizle.component");
var sell_type_yourself_component_1 = require("./cg-motors/cg-cars/sell-type-yourself/sell-type-yourself.component");
var cg_motors_list_component_1 = require("./cg-motors/cg-motors-list/cg-motors-list.component");
var cg_motors_new_component_1 = require("./cg-motors/cg-motors-new/cg-motors-new.component");
var cg_job_component_1 = require("./cg-job/cg-job.component");
var PlaceAdModule = /** @class */ (function () {
    function PlaceAdModule() {
    }
    PlaceAdModule = __decorate([
        core_1.NgModule({
            declarations: [pick_category_component_1.PickCategoryComponent, cg_motors_component_1.CgMotorsComponent, cg_cars_component_1.CgCarsComponent, sell_type_dubbizle_component_1.SellTypeDubbizleComponent, sell_type_yourself_component_1.SellTypeYourselfComponent, cg_motors_list_component_1.CgMotorsListComponent, cg_motors_new_component_1.CgMotorsNewComponent, cg_job_component_1.CgJobComponent],
            imports: [
                common_1.CommonModule,
                place_ad_routing_module_1.PlaceAdRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
                })
            ]
        })
    ], PlaceAdModule);
    return PlaceAdModule;
}());
exports.PlaceAdModule = PlaceAdModule;
