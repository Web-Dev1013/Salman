"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgMotorsComponent = void 0;
var core_1 = require("@angular/core");
var CgMotorsComponent = /** @class */ (function () {
    function CgMotorsComponent() {
        this.motorItemArr = [
            { id: "motorcycles", name: "Motorcycles" },
            { id: "accessories", name: "Auto Accessories & Parts" },
            { id: "vehicles", name: "Heavy Vehicles" },
            { id: "boats", name: "Boats" },
            { id: "num_plate", name: "Number Plates" }
        ];
    }
    CgMotorsComponent.prototype.ngOnInit = function () {
    };
    CgMotorsComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-motors',
            templateUrl: './cg-motors.component.html',
            styleUrls: ['./cg-motors.component.css']
        })
    ], CgMotorsComponent);
    return CgMotorsComponent;
}());
exports.CgMotorsComponent = CgMotorsComponent;
