"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MobiletabletRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mobiletablet_component_1 = require("./mobiletablet.component");
var mobilephone_component_1 = require("./mobilephone/mobilephone.component");
var othermobiletablet_component_1 = require("./othermobiletablet/othermobiletablet.component");
var phonetablet_component_1 = require("./phonetablet/phonetablet.component");
var tablets_component_1 = require("./tablets/tablets.component");
var routes = [
    { path: "", redirectTo: "mobiletablet", pathMatch: "full" },
    {
        path: "mobiletablet", component: mobiletablet_component_1.MobiletabletComponent, children: [
            { path: "", redirectTo: "mobilephones", pathMatch: "full" },
            { path: "mobilephones", component: mobilephone_component_1.MobilephoneComponent },
            { path: ":id", component: tablets_component_1.TabletsComponent },
            { path: "phonetablet", component: phonetablet_component_1.PhonetabletComponent },
            { path: "tablets", component: tablets_component_1.TabletsComponent },
            { path: "othermobiletablet", component: othermobiletablet_component_1.OthermobiletabletComponent }
        ]
    },
];
var MobiletabletRoutingModule = /** @class */ (function () {
    function MobiletabletRoutingModule() {
    }
    MobiletabletRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], MobiletabletRoutingModule);
    return MobiletabletRoutingModule;
}());
exports.MobiletabletRoutingModule = MobiletabletRoutingModule;
