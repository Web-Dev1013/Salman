"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgClassifiedComponent = void 0;
var core_1 = require("@angular/core");
var CgClassifiedComponent = /** @class */ (function () {
    function CgClassifiedComponent() {
        this.toggle_dropdown = "";
        this.classifiedArr = [
            { id: "electronics", name: "Electronics" },
            { id: "com_net", name: "Computers & Networking" },
            { id: "business_industrial", name: "Business & Industrial" },
            { id: "home_app", name: "Home Appliances" },
            { id: "sports_equip", name: "Sports Equipment" },
            { id: "clothing_accessories", name: "Clothing & Accessories" },
            { id: "cameras_imaging", name: "Cameras & Imaging" },
            { id: "jewelry_watch", name: "Jewelry & Watches" },
            { id: "pets", name: "Pets" },
            { id: "musical_instrument", name: "Musical Instrument" },
            { id: "gaming", name: "Gaming" },
            { id: "baby_items", name: "Baby Items" },
            { id: "toys", name: "Toys" },
            { id: "tickets_vouchers", name: "Tickets & Vouchers" },
            { id: "collectibles", name: "Collectibles" },
            { id: "books", name: "Books" },
            { id: "music", name: "Music" },
            { id: "free_stuff", name: "Free Stuff" },
            { id: "lost_found", name: "Lost/Found" },
            { id: "DVD_movies", name: "DVDs & Movies" },
            { id: "fur_home_garden", name: "Furniture, Home & Garden" },
            { id: "phone_tablets", name: "Mobile Phones & Tablets" }
        ];
    }
    CgClassifiedComponent.prototype.ngOnInit = function () {
    };
    CgClassifiedComponent.prototype.showDropdown = function (dropdown_id) {
        this.toggle_dropdown = dropdown_id;
    };
    CgClassifiedComponent.prototype.hideDropdown = function () {
        this.toggle_dropdown = "";
    };
    CgClassifiedComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-classified',
            templateUrl: './cg-classified.component.html',
            styleUrls: ['./cg-classified.component.css']
        })
    ], CgClassifiedComponent);
    return CgClassifiedComponent;
}());
exports.CgClassifiedComponent = CgClassifiedComponent;
