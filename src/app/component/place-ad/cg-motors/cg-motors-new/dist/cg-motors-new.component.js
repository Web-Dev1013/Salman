"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgMotorsNewComponent = void 0;
var core_1 = require("@angular/core");
var CgMotorsNewComponent = /** @class */ (function () {
    function CgMotorsNewComponent() {
        this.activePage = "feature";
        this.lat = 22.2736308;
        this.lng = 70.7512555;
        this.yearArr = [];
        this.seller_typeArr = [
            { value: "owner", name: "Owner" },
            { value: "dealer", name: "Dealer" },
            { value: "certified", name: "Dealership/Certified Pre-Owned" }
        ];
        this.drive_systemArr = [
            { value: "belt", name: "Belt" },
            { value: "chain", name: "Chain" },
            { value: "shaft", name: "Shaft" },
            { value: "not_apply", name: "Does not apply" }
        ];
        this.wheelArr = [
            { value: "2w", name: "2 Wheel" },
            { value: "3w", name: "3 Wheel" },
            { value: "4w", name: "4 Wheel" }
        ];
        this.manufactureArr = [
            { value: "845", name: "Access Motor" },
            { value: "835", name: "Aprillia" },
            { value: "846", name: "Asiawing" },
            { value: "285", name: "Bajaj" },
            { value: "844", name: "Benelli" },
            { value: "283", name: "BMW" },
            { value: "834", name: "Buell" },
            { value: "842", name: "Can-am" },
            { value: "279", name: "Ducati" },
            { value: "840", name: "Gas Gas" },
            { value: "277", name: "Harley Davidson" },
            { value: "284", name: "Honda" },
            { value: "839", name: "Husaberg" },
            { value: "833", name: "Husqvarna" },
            { value: "287", name: "Indian" },
            { value: "280", name: "Kawasaki" },
            { value: "286", name: "KTM" },
            { value: "836", name: "Moto Guzzi" },
            { value: "838", name: "MV Agusta" },
            { value: "837", name: "Norton" },
            { value: "843", name: "Polaris" },
            { value: "832", name: "Royal Enfield" },
            { value: "281", name: "Suzuki" },
            { value: "282", name: "Triumph" },
            { value: "841", name: "Vespa" },
            { value: "288", name: "Victory" },
            { value: "278", name: "Yamaha" },
            { value: "289", name: "Other" }
        ];
        this.engine_sizeArr = [
            { value: "290", name: "Less than 250cc" },
            { value: "291", name: "250cc - 499cc" },
            { value: "292", name: "500cc - 599cc" },
            { value: "293", name: "600cc - 749cc" },
            { value: "294", name: "750cc - 999cc" },
            { value: "295", name: "1,000cc or more" },
            { value: "831", name: "Does not apply" }
        ];
        this.warrantyArr = [
            { value: "yes", name: "Yes" },
            { value: "no", name: "No" },
            { value: "not_apply", name: "Does not apply" }
        ];
    }
    CgMotorsNewComponent.prototype.ngOnInit = function () {
        for (var i = 1921; i < 2021; i++) {
            this.yearArr.push(i);
        }
    };
    CgMotorsNewComponent.prototype.gotoNextPage = function (nextPage) {
        this.activePage = nextPage;
    };
    CgMotorsNewComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-motors-new',
            templateUrl: './cg-motors-new.component.html',
            styleUrls: ['./cg-motors-new.component.css']
        })
    ], CgMotorsNewComponent);
    return CgMotorsNewComponent;
}());
exports.CgMotorsNewComponent = CgMotorsNewComponent;
