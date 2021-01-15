"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewProjectDetailPromotionComponent = void 0;
var core_1 = require("@angular/core");
var NewProjectDetailPromotionComponent = /** @class */ (function () {
    function NewProjectDetailPromotionComponent() {
        this.toggle_select_type = false;
    }
    NewProjectDetailPromotionComponent.prototype.ngOnInit = function () {
    };
    NewProjectDetailPromotionComponent.prototype.show_select_type = function () {
        this.toggle_select_type = true;
    };
    NewProjectDetailPromotionComponent.prototype.hide_select_type = function () {
        this.toggle_select_type = false;
    };
    NewProjectDetailPromotionComponent = __decorate([
        core_1.Component({
            selector: 'app-new-project-detail-promotion',
            templateUrl: './new-project-detail-promotion.component.html',
            styleUrls: ['./new-project-detail-promotion.component.css']
        })
    ], NewProjectDetailPromotionComponent);
    return NewProjectDetailPromotionComponent;
}());
exports.NewProjectDetailPromotionComponent = NewProjectDetailPromotionComponent;
