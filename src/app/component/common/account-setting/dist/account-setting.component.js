"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountSettingComponent = void 0;
var core_1 = require("@angular/core");
var AccountSettingComponent = /** @class */ (function () {
    function AccountSettingComponent() {
        this.userInfo = { id: "", name: "Star", password: "ddddddd", email: "Ilyaivanov19951013@gmail.com", phone: "55 1234 5678" };
    }
    AccountSettingComponent.prototype.ngOnInit = function () {
    };
    AccountSettingComponent = __decorate([
        core_1.Component({
            selector: 'app-account-setting',
            templateUrl: './account-setting.component.html',
            styleUrls: ['./account-setting.component.css']
        })
    ], AccountSettingComponent);
    return AccountSettingComponent;
}());
exports.AccountSettingComponent = AccountSettingComponent;
