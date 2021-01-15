"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgEstateSaleComponent = void 0;
var core_1 = require("@angular/core");
var CgEstateSaleComponent = /** @class */ (function () {
    function CgEstateSaleComponent() {
        this.toggle_dropdown = "";
        this.p_rentArr = [
            { id: "residential_rent", name: "Residential Units for Rent", subItem: [
                    { id: "villa_rent", name: "Villa/House for Rent" },
                    { id: "apartment_rent", name: "Apartment/Flat for Rent" }
                ] },
            { id: "commercial_rent", name: "Commercial for Rent", subItem: [
                    { id: "industrial_rent", name: "Industrial for Rent" },
                    { id: "office_rent", name: "Office for Rent" },
                    { id: "retail_rent", name: "Retail for Rent" },
                    { id: "staff Accomm for Rent" }
                ] },
            { id: "rooms_rent", name: "Rooms for rent (flatmates)", subItem: [
                    { id: "apartment_rooms_rent", name: "Apartment/Flat for Rent" },
                    { id: "villa_rooms_rent", name: "Villa/House for Rent" }
                ] },
            { id: "monthly_rent", name: "Short Term (Monthly)", subItem: [
                    { id: "apartment_monthly_rent", name: "Apartment/Flat for Rent" },
                    { id: "villa_monthly_rent", name: "Villa/House for Rent" }
                ] },
            { id: "daily_rent", name: "Short Term (Daily)", subItem: [
                    { id: "apartment_daily_rent", name: "Apartment/Flat for Rent" },
                    { id: "villa_daily_rent", name: "Villa/House for Rent" }
                ] },
        ];
    }
    CgEstateSaleComponent.prototype.ngOnInit = function () {
    };
    CgEstateSaleComponent.prototype.showDropdown = function (dropdown_id) {
        this.toggle_dropdown = dropdown_id;
    };
    CgEstateSaleComponent.prototype.hideDropdown = function () {
        this.toggle_dropdown = "";
    };
    CgEstateSaleComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-estate-sale',
            templateUrl: './cg-estate-sale.component.html',
            styleUrls: ['./cg-estate-sale.component.css']
        })
    ], CgEstateSaleComponent);
    return CgEstateSaleComponent;
}());
exports.CgEstateSaleComponent = CgEstateSaleComponent;
