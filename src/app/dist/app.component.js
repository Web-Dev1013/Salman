"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(location) {
        this.location = location;
        this.title = 'salman';
    }
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons' || titlee.indexOf("propertynewproject/propertynewproject") > -1 || titlee.indexOf("place_ad") > -1) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.hideHeader = function () {
        var newproject = this.location.prepareExternalUrl(this.location.path());
        newproject = newproject.slice(1);
        if (newproject.indexOf("propertynewproject") > -1 || newproject.indexOf("new_project_detail") > -1 || newproject.indexOf("place_ad") > -1) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
