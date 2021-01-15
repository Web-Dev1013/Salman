"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.activeCityName = "All cities";
        this.selectedCityName = "All Cities";
        this.usedCar = "usedCar";
        this.motorcycle = "motorcycle";
        this.accessories = "accessories";
        this.vehicles = "vehicles";
        this.FeaturedArr = ["Dubai", [
                { id: 15, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
                { id: 16, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" },
                { id: 17, src: "../../../../assets/Image/motors/cars/car3.webp", price: "225,000", title: "2019 Ford Expedition Platinum", property: "Year:2011.KM:76,000", name: "Al Mutarad", time: "19 hours" },
                { id: 18, src: "../../../../assets/Image/motors/cars/car4.webp", price: "AED 155,000", title: "s500", property: "Year:2016.KM:151,000", name: "Al Ain", time: "19 hours" },
                { id: 34, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
                { id: 12, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" }
            ]];
        this.SearchItemsArr = [
            { id: 2, item: "All" },
            { id: 3, item: "Motors" },
            { id: 4, item: "Classified" },
            { id: 5, item: "Property for Rent" },
            { id: 6, item: "Property for Sale" },
            { id: 7, item: "Job" },
            { id: 8, item: "Community" }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.activeCityName = params.id;
        });
    };
    MainComponent.prototype.gotoProductDetails = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    };
    MainComponent.prototype.selectedCity = function (SearchItem) {
        this.selectedCityName = SearchItem.item;
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
