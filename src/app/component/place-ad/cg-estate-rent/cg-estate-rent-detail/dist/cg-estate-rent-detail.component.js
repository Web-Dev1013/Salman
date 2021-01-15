"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgEstateRentDetailComponent = void 0;
var core_1 = require("@angular/core");
var CgEstateRentDetailComponent = /** @class */ (function () {
    function CgEstateRentDetailComponent() {
        this.activePage = "feature";
        this.lat = 22.2736308;
        this.lng = 70.7512555;
        this.selectArr = [
            {
                id: "prefer_national", name: "Preferred Nationality of tenants", option: [
                    { id: "mixed", name: " Mixed " },
                    { id: "mainly_indian", name: " Mainly Indian " },
                    { id: "mainly_filipino", name: " Mainly Filipino " },
                    { id: "mainly_pakistani", name: " Mainly Pakistani " },
                    { id: "mainly_arab", name: " Mainly Arab " },
                    { id: "mainly_european", name: " Mainly European " },
                    { id: "mainly_russian", name: " Mainly Russian " },
                    { id: "mainly_other", name: " Mainly Other " }
                ]
            },
            {
                id: "room_type", name: "Room type", option: [
                    { id: "private_room", name: " Private Room " },
                    { id: "partitioned_room", name: " Room with partition " },
                    { id: "bed_space", name: " Bed Space" }
                ]
            },
            {
                id: "allowed_tenants", name: "Type of tenants Allowed", option: [
                    { id: "not_mind", name: "Don't Mind" },
                    { id: "female", name: "Females" },
                    { id: "male", name: "Males" },
                    { id: "couple", name: "Couples" },
                    { id: "family", name: "Families" }
                ]
            },
            {
                id: "balcony", name: "Balcony", option: [
                    { id: "balcony_yes", name: "Yes" },
                    { id: "balcony_no", name: "No" }
                ]
            }
        ];
        this.checkboxArr = [
            { id: "cable_TV", name: "Cable TV" },
            { id: "dryer", name: "Dryer" },
            { id: "gym", name: "Gym" },
            { id: "kitchen_app", name: "Kitchen Appliances" },
            { id: "recreation_center", name: "Recreation Center" },
            { id: "swimming_pool", name: "Swimming Pool" },
            { id: "wireless", name: "Wireless Internet" },
            { id: "cleaning_included", name: "Cleaning Included" },
            { id: "free_parking", name: "Free Parking" },
            { id: "jacuzzi", name: "Jacuzzi" },
            { id: "metro_tram", name: "Near Metro or Tram" },
            { id: "sauna", name: "Sauna" },
            { id: "washer", name: "Washer" }
        ];
    }
    CgEstateRentDetailComponent.prototype.ngOnInit = function () {
    };
    CgEstateRentDetailComponent.prototype.gotoNextPage = function (nextPage) {
        this.activePage = nextPage;
    };
    CgEstateRentDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-estate-rent-detail',
            templateUrl: './cg-estate-rent-detail.component.html',
            styleUrls: ['./cg-estate-rent-detail.component.css']
        })
    ], CgEstateRentDetailComponent);
    return CgEstateRentDetailComponent;
}());
exports.CgEstateRentDetailComponent = CgEstateRentDetailComponent;
