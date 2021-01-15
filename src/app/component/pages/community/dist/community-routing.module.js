"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommunityRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var products_list_component_1 = require("../../common/products-list/products-list.component");
var community_component_1 = require("./community.component");
var routes = [
    { path: "", redirectTo: "community", pathMatch: "full" },
    { path: "community", component: community_component_1.CommunityComponent },
    { path: ":id", component: products_list_component_1.ProductsListComponent }
];
var CommunityRoutingModule = /** @class */ (function () {
    function CommunityRoutingModule() {
    }
    CommunityRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], CommunityRoutingModule);
    return CommunityRoutingModule;
}());
exports.CommunityRoutingModule = CommunityRoutingModule;
