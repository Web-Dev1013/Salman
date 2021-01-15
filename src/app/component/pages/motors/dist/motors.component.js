"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MotorsComponent = void 0;
var core_1 = require("@angular/core");
var motor_model_1 = require("./motor.model");
var MotorsComponent = /** @class */ (function () {
    function MotorsComponent(router) {
        this.router = router;
        this.CommonArr = [
            new motor_model_1.MotorModel("usedCar", "USED CARS FOR SALE", 250),
            new motor_model_1.MotorModel("motorcycle", "MOTORCYCLES", 114),
            new motor_model_1.MotorModel("accessories", "AUTO ACCESSORIES & PARTS", 176),
            new motor_model_1.MotorModel("heavyVehicles", "HEAVY VEHICLES", 81),
            new motor_model_1.MotorModel("boats", "BOATS", 2),
            new motor_model_1.MotorModel("numberPlates", "NUMBER PLATES", 10),
        ];
        this.FeaturedArr = [
            { id: 15, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
            { id: 16, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" },
            { id: 17, src: "../../../../assets/Image/motors/cars/car3.webp", price: "225,000", title: "2019 Ford Expedition Platinum", property: "Year:2011.KM:76,000", name: "Al Mutarad", time: "19 hours" },
            { id: 18, src: "../../../../assets/Image/motors/cars/car4.webp", price: "AED 155,000", title: "s500", property: "Year:2016.KM:151,000", name: "Al Ain", time: "19 hours" }
        ];
        this.LatestNewsArr = [
            { id: 19, src: "../../../../assets/Image/motors/cars/car2.webp", title: "A unique Range Stormer makes...", date: "Aug.11.2020" },
            { id: 20, src: "../../../../assets/Image/motors/cars/car3.webp", title: "A complete overview of electric...", date: "Aug.9.2020" },
            { id: 21, src: "../../../../assets/Image/motors/cars/car4.webp", title: "how to transfer the ownership of...", date: "Aug.9.2020" },
            { id: 22, src: "../../../../assets/Image/motors/cars/car5.webp", title: "5 things you didn't know about V...", date: "July.26.2020" },
        ];
    }
    MotorsComponent.prototype.ngOnInit = function () {
        console.log("+++++++");
    };
    MotorsComponent.prototype.gotoCommonDetails = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    };
    MotorsComponent.prototype.gotoProductDetails = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    };
    MotorsComponent = __decorate([
        core_1.Component({
            selector: 'app-motors',
            templateUrl: './motors.component.html',
            styleUrls: ['./motors.component.css']
        })
    ], MotorsComponent);
    return MotorsComponent;
}());
exports.MotorsComponent = MotorsComponent;
