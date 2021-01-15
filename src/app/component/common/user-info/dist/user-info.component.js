"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserInfoComponent = void 0;
var core_1 = require("@angular/core");
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(activeRoute) {
        this.activeRoute = activeRoute;
        this.active = 1;
        this.mySearchesArr = [
            { id: "motors", name: "Motors", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "classified", name: "Classified", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "propertyforsale", name: "Property for Sale", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "propertyforrent", name: "Property for Rent", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "jobs", name: "Jobs", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "job_wanted", name: "Job Wanted", item: [
                    { id: "", name: "Empty" },
                ] },
            { id: "community", name: "Community", item: [
                    { id: "", name: "Empty" },
                ] },
        ];
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            console.log(params.id);
            switch (params.id) {
                case "my_profile":
                    _this.active = 1;
                    break;
                case "my_ads":
                    _this.active = 2;
                    break;
                case "my_favorites":
                    _this.active = 3;
                    break;
                case "my_searches":
                    _this.active = 4;
                    break;
            }
        });
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            templateUrl: './user-info.component.html',
            styleUrls: ['./user-info.component.css']
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
