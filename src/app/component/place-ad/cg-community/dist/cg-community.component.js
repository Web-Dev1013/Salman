"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgCommunityComponent = void 0;
var core_1 = require("@angular/core");
var CgCommunityComponent = /** @class */ (function () {
    function CgCommunityComponent() {
        this.toggle_dropdown = "";
        this.communityArr = [
            { id: "services", name: "Services", subItem: [
                    { id: "maids", name: "Maids" },
                    { id: "movers_removals", name: "Movers/Removals" },
                    { id: "general_maintenance", name: "General Maintenance" },
                    { id: "nannies", name: "Nannies" },
                    { id: "electronic_repair", name: "Electronic Repair" },
                    { id: "IT_repair", name: "IT Repair" },
                    { id: "painters", name: "Painters" },
                    { id: "plumbers", name: "Plumbers" },
                    { id: "gardeners", name: "Gardeners" },
                    { id: "mechanics", name: "Mechanics" },
                    { id: "other_services", name: "Other Services" }
                ] },
            { id: "car_lift", name: "Car Lift" },
            { id: "freelancers", name: "Freelancers" },
            { id: "domestic", name: "Domestic" },
            { id: "education", name: "Education" },
            { id: "childcare", name: "Childcare" },
            { id: "classes", name: "Classes" },
            { id: "activities", name: "Activities" },
            { id: "photography", name: "Photography" },
            { id: "sports", name: "Sports" },
            { id: "music", name: "Music" },
            { id: "artists", name: "Artists" }
        ];
    }
    CgCommunityComponent.prototype.ngOnInit = function () {
    };
    CgCommunityComponent.prototype.showDropdown = function (dropdown_id) {
        this.toggle_dropdown = dropdown_id;
    };
    CgCommunityComponent.prototype.hideDropdown = function () {
        this.toggle_dropdown = "";
    };
    CgCommunityComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-community',
            templateUrl: './cg-community.component.html',
            styleUrls: ['./cg-community.component.css']
        })
    ], CgCommunityComponent);
    return CgCommunityComponent;
}());
exports.CgCommunityComponent = CgCommunityComponent;
