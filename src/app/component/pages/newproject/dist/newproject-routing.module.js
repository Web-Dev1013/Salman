"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewprojectRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var newproject_component_1 = require("../../pages/newproject/newproject.component");
var new_project_detail_list_component_1 = require("./new-project-detail-list/new-project-detail-list.component");
var new_project_detail_promotion_component_1 = require("./new-project-detail-promotion/new-project-detail-promotion.component");
var new_project_detail_component_1 = require("./new-project-detail/new-project-detail.component");
var new_project_developer_component_1 = require("./new-project-developer/new-project-developer.component");
var new_project_for_developer_component_1 = require("./new-project-for-developer/new-project-for-developer.component");
var routes = [
    {
        path: "", component: newproject_component_1.NewprojectComponent, children: [
            { path: "", redirectTo: "new_project_detail_list", pathMatch: "full" },
            { path: "new_project_detail_list", component: new_project_detail_list_component_1.NewProjectDetailListComponent },
            { path: "new_project_detail/:id", component: new_project_detail_component_1.NewProjectDetailComponent },
            { path: ":id", component: new_project_detail_list_component_1.NewProjectDetailListComponent },
            { path: "new_project_developer", component: new_project_developer_component_1.NewProjectDeveloperComponent },
            { path: "new_project_detail_promotion/:id", component: new_project_detail_promotion_component_1.NewProjectDetailPromotionComponent },
            { path: "new_project_for_developer/:id", component: new_project_for_developer_component_1.NewProjectForDeveloperComponent }
        ]
    }
];
var NewprojectRoutingModule = /** @class */ (function () {
    function NewprojectRoutingModule() {
    }
    NewprojectRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], NewprojectRoutingModule);
    return NewprojectRoutingModule;
}());
exports.NewprojectRoutingModule = NewprojectRoutingModule;
