"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FurnituregardenRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var furnituregarden_component_1 = require("./furnituregarden.component");
var furniture_component_1 = require("./furniture/furniture.component");
var lighting_component_1 = require("./lighting/lighting.component");
var rugs_component_1 = require("./rugs/rugs.component");
var tools_component_1 = require("./tools/tools.component");
var curtains_component_1 = require("./curtains/curtains.component");
var garden_component_1 = require("./garden/garden.component");
var routes = [
    { path: "", redirectTo: "furnituregarden", pathMatch: "full" },
    {
        path: "furnituregarden", component: furnituregarden_component_1.FurnituregardenComponent, children: [
            { path: "", redirectTo: "furniture", pathMatch: "full" },
            { path: ":id", component: furniture_component_1.FurnitureComponent },
            { path: "furniture", component: furniture_component_1.FurnitureComponent },
            { path: "home", component: home_component_1.HomeComponent },
            { path: "lighting", component: lighting_component_1.LightingComponent },
            { path: "rugs", component: rugs_component_1.RugsComponent },
            { path: "tools", component: tools_component_1.ToolsComponent },
            { path: "curtains", component: curtains_component_1.CurtainsComponent },
            { path: "garden", component: garden_component_1.GardenComponent }
        ]
    }
];
var FurnituregardenRoutingModule = /** @class */ (function () {
    function FurnituregardenRoutingModule() {
    }
    FurnituregardenRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], FurnituregardenRoutingModule);
    return FurnituregardenRoutingModule;
}());
exports.FurnituregardenRoutingModule = FurnituregardenRoutingModule;
