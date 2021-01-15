"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EstateDetailComponent = void 0;
var core_1 = require("@angular/core");
var estate_detail_model_1 = require("./estate-detail.model");
var EstateDetailComponent = /** @class */ (function () {
    function EstateDetailComponent() {
        this.showPhoneNum = false;
        this.hidePhoneNum = true;
        this.lat = 22.2736308;
        this.lng = 70.7512555;
        this.estateData = new estate_detail_model_1.EstateData("205-VI-S-0084", ["UAE", "Dubai", "The Villa", "Ponderosa"], "Upgraded Mallorca | 6BR villa | Extended Patio", "6,500,000", "../../../../assets/Image/propertyforrent/promoted-detail/Patriot_small_logo_2.jpg", "Dar Al Aqar Real Estate LLC", 11887, 677330, 6, 7, "8,400", "no", "Sale", "Agent", "Damac Properties", "January 7th, 2021", [
            "../../../../assets/Image/propertyforrent/estate-detail/image (1).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (2).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (3).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (4).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (5).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (6).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (7).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (8).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (9).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (10).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image (14).webp",
            "../../../../assets/Image/propertyforrent/estate-detail/image.webp"
        ], [
            "Maids Room", "View of Landmark", "View of Water"
        ], "This is the section of description", "+971-55-2313432");
    }
    EstateDetailComponent.prototype.ngOnInit = function () {
    };
    EstateDetailComponent.prototype.showPhoneNumber = function () {
        this.showPhoneNum = true;
        this.hidePhoneNum = false;
    };
    EstateDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-estate-detail',
            templateUrl: './estate-detail.component.html',
            styleUrls: ['./estate-detail.component.css']
        })
    ], EstateDetailComponent);
    return EstateDetailComponent;
}());
exports.EstateDetailComponent = EstateDetailComponent;
