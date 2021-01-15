"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CgMotorsListComponent = void 0;
var core_1 = require("@angular/core");
var CgMotorsListComponent = /** @class */ (function () {
    function CgMotorsListComponent(activatedRoute) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activeRoute = "";
        this.toggle_dropdown = "";
        this.motorcycleArr = [
            {
                id: "sport_bike", name: "Sport Bike", subItem: [
                    { id: "hyper_sports", name: "Hyper sports" },
                    { id: "super_bike", name: "Super bike" },
                    { id: "super_sports", name: "Super sports" }
                ]
            },
            { id: "adventure", name: "Adventure/Touring" },
            { id: "cruiser", name: "Cruiser/Chopper" },
            { id: "off_load", name: "Off-Road" },
            { id: "scooter", name: "Scooter" },
            { id: "standard", name: "Standard/Commuter" },
            { id: "cafe_racer", name: "Cafe racer" },
            { id: "trike", name: "Trike" },
            { id: "trailer", name: "Trailer" },
            { id: "karting", name: "Karting" },
            { id: "mo_ped", name: "Mo-Ped" },
            { id: "other_motorcycle", name: "Other" }
        ];
        this.accessoriesArr = [
            { id: "car4x4", name: "Car/4x4 Parts", subItem: [
                    { id: "ac_heating", name: "A/C & Heating Parts" },
                    { id: "batteries", name: "Batteries" },
                    { id: "brakes", name: "Brakes" },
                    { id: "engine_computer", name: "Engine & Computer Parts" },
                    { id: "exhaust_air", name: "Exhaust/Air Intake" },
                    { id: "exterior", name: "Exterior Parts" },
                    { id: "interior", name: "Interior Parts" },
                    { id: "lighting", name: "Lighting" },
                    { id: "suspension", name: "Suspension" },
                    { id: "wheel_tires", name: "Wheels/Tires" },
                    { id: "other", name: "other" },
                ] },
            { id: "apparel", name: "Apparel, Merchandise & Accessories", subItem: [
                    { id: "apparel", name: "Apparel" },
                    { id: "boat", name: "Boat Accessories" },
                    { id: "car4x4", name: "Car/4x4 Accessories" },
                    { id: "merchandise", name: "Merchandise" },
                    { id: "motorcycle", name: "Motorcycle Accessories" },
                    { id: "other", name: "Other" }
                ] },
            { id: "motorcycle", name: "Motorcycle Parts", subItem: [
                    { id: "accessories", name: "Accessories" },
                    { id: "body_frame", name: "Body & Frame" },
                    { id: "brake_suspension", name: "Brakes & Suspension" },
                    { id: "engine_component", name: "Engines & Components" },
                    { id: "lighting", name: "Lighting" },
                    { id: "wheel_tires", name: "Wheels Tires" },
                    { id: "other", name: "Other" }
                ] },
            { id: "automotive", name: "Automotive Tools", subItem: [
                    { id: "accessories", name: "Tool Accessories" },
                    { id: "sets", name: "Tool Sets" },
                    { id: "tools", name: "Tools" },
                ] },
            { id: "boat", name: "Boat Parts", subItem: [
                    { id: "body", name: "Body Parts & Accessories" },
                    { id: "electronic", name: "Electronic Parts" },
                    { id: "engine", name: "Engine Parts" },
                    { id: "plumbing", name: "Plumbing & Ventilation" },
                    { id: "gear", name: "Sailing Gear" },
                    { id: "other", name: "Other" },
                ] },
            { id: "num_plate", name: "Number Plates", subItem: [
                    { id: "dubai", name: "Dubai plate" },
                    { id: "dhabi", name: "Abu Dhabi plate" },
                    { id: "sharjah", name: "Sharjah plate" },
                    { id: "ajman", name: "Ajman plate" },
                    { id: "fujairah", name: "Fujairah plate" },
                    { id: "quwain", name: "Umm al Quwain plate" },
                    { id: "khaimah", name: "Ras al Khaimah plate" }
                ] },
            { id: "other_accessories", name: "Other Vehicle Parts" }
        ];
        this.vehicleArr = [
            { id: "trucks", name: "Trucks", subItem: [
                    { id: "cab_chassis", name: "Cab-Chassis" },
                    { id: "cherry_picker", name: "Cherry Picker" },
                    { id: "crane", name: "Crane Truck" },
                    { id: "curtain", name: "Curtain Sider" },
                    { id: "dual", name: "Dual Cab" },
                    { id: "fire_truck", name: "Fire Truck" },
                    { id: "prime", name: "Prime Mover" },
                    { id: "refrigerated_truck", name: "Refrigerated Truck" },
                    { id: "service", name: "Service Vehicle" },
                    { id: "tipper", name: "Tipper" },
                    { id: "tow_tilt", name: "Tow & Tilt" },
                    { id: "wrecking", name: "Wrecking" },
                    { id: "other_truck", name: "other" },
                ] },
            { id: "buses", name: "Buses", subItem: [
                    { id: "city", name: "City Bus" },
                    { id: "coach", name: "Coach" },
                    { id: "coaster", name: "Coaster" },
                    { id: "school", name: "School Bus" },
                    { id: "other_bus", name: "Other" }
                ] },
            { id: "forklifts", name: "Forklifts", subItem: [
                    { id: "all_terrain", name: "All Terrain" },
                    { id: "diesel", name: "Diesel" },
                    { id: "electric", name: "Electric" },
                    { id: "side_loader", name: "Side Loader" },
                    { id: "other_forklifts", name: "Other" }
                ] },
            { id: "trailers", name: "Trailers", subItem: [
                    { id: "b_double", name: "B Double" },
                    { id: "curtain", name: "Curtain Sider" },
                    { id: "dog", name: "Dog Trailer" },
                    { id: "dolly", name: "Dolly Trailer" },
                    { id: "drop_decker", name: "Drop Decker" },
                    { id: "extendable", name: "Extendable Trailer" },
                    { id: "flat_deck", name: "Flat Deck" },
                    { id: "low_loader", name: "Low Loader" },
                    { id: "refrigerated_trailers", name: "Refrigerated Trailer" },
                    { id: "tipper", name: "Tipper" },
                    { id: "other_trailers", name: "Other" }
                ] },
            { id: "cranes", name: "Cranes", subItem: [
                    { id: "all_terrain", name: "All Terrain Cranes" },
                    { id: "tower_cranes", name: "Tower Cranes" },
                    { id: "tractor_cranes", name: "Tractor Cranes" },
                    { id: "truck_loading", name: "Truck Loading" },
                    { id: "other_vehicle", name: "Other" },
                ] },
            { id: "tankers", name: "Tankers", subItem: [
                    { id: "fiberglass_tank", name: "Fiberglass Tank" },
                    { id: "fuel_tank", name: "Fuel Tank" },
                    { id: "stainess_steel_tank", name: "Stainless steel Tank" },
                    { id: "water_tank", name: "Water Tank" },
                    { id: "other_tank", name: "Water Tank" }
                ] },
            { id: "parts_engines", name: "Parts & Engines", subItem: [
                    { id: "bus_parts", name: "Bus Parts" },
                    { id: "crane_parts", name: "Crane Parts" },
                    { id: "forklift_parts", name: "Forklift Parts" },
                    { id: "tanker_parts", name: "Tanker Parts" },
                    { id: "trailer_parts", name: "Trailer Parts" },
                    { id: "truck_parts", name: "Truck Parts" },
                    { id: "other_parts", name: "Other Parts" }
                ] },
            { id: "other_vehicle", name: "Other Heavy Vehicles", subItem: [
                    { id: "agriculture_vehicles", name: "Agriculture Vehicles" },
                    { id: "rvs_motorhomes", name: "RVs & Motorhomes" },
                    { id: "site_dumpers", name: "Site Dumpers" },
                    { id: "sweepers", name: "Sweepers" },
                    { id: "tractors", name: "Tractors" },
                    { id: "winches", name: "Winches" }
                ] },
        ];
        this.boatArr = [
            { id: "motorboats", name: "Motorboats", subItem: [
                    { id: "fishing_boat", name: "Fishing Boat" },
                    { id: "outboard_dayboat", name: "Outboard Dayboat" },
                    { id: "pontoon_house_boat", name: "Pontoon/House Boat" },
                    { id: "racing_boat", name: "Racing Boat" },
                    { id: "sleeper_mini_yacht", name: "Sleeper/Mini Yacht" },
                    { id: "wakeboarding_ski_boat", name: "Wakeboarding/Ski Boat" },
                    { id: "yacht", name: "Yacht" },
                    { id: "other_motorboats", name: "Other" }
                ] },
            { id: "sailboats", name: "Sailboats", subItem: [
                    { id: "catamaran", name: "Catamaran" },
                    { id: "cruiser_day_sailor", name: "Cruiser/Day Sailor" },
                    { id: "dinghy", name: "Dinghy" },
                    { id: "racer", name: "Racer" },
                    { id: "sailing_yacht", name: "Sailing Yacht" },
                    { id: "other_sailboats", name: "Other" }
                ] },
            { id: "row_paddle_boats", name: "Row/Paddle Boats", subItem: [
                    { id: "canoe_row_boat", name: "Canoe/Row Boat" },
                    { id: "paddle_boat", name: "Paddle Boat" },
                    { id: "other_rp_boat", name: "Other" }
                ] }
        ];
        this.num_plateArr = [
            { id: "dubai_np", name: "Dubai Plate", subItem: [
                    { id: "dubai_private_car", name: "Private car" },
                    { id: "dubai_classic_car", name: "Classic car" },
                    { id: "dubai_motorcycle", name: "Motorcycle" }
                ] },
            { id: "dhabi_np", name: "Abu Dhabi plate", subItem: [
                    { id: "dhabi_private_car", name: "Private car" },
                    { id: "dhabi_motorcycle", name: "Motorcycle" }
                ] },
            { id: "sharjah_np", name: "Sharjah plate", subItem: [
                    { id: "sharjah_private_car", name: "Private car" },
                    { id: "sharjah_classic_car", name: "Classic car" },
                    { id: "sharjah_motorcycle", name: "Motorcycle" }
                ] },
            { id: "ajman_np", name: "Ajman plate", subItem: [
                    { id: "ajman_private_car", name: "Private car" },
                    { id: "ajman_motorcycle", name: "Motorcycle" }
                ] },
            { id: "fujairah_np", name: "Fujairah plate", subItem: [
                    { id: "fujairah_private_car", name: "Private car" },
                    { id: "fujairah_motorcycle", name: "Motorcycle" }
                ] },
            { id: "quwain_np", name: "Umm al Quwain plate", subItem: [
                    { id: "quwain_private_car", name: "Private car" },
                    { id: "quwain_motorcycle", name: "Motorcycle" }
                ] },
            { id: "khaimah_np", name: "Ras al Khaimah plate", subItem: [
                    { id: "khaimah_private_car", name: "Private car" },
                    { id: "khaimah_motorcycle", name: "Motorcycle" }
                ] },
        ];
        this.activatedRoute.params.subscribe(function (params) {
            _this.activeRoute = params.id;
            console.log(_this.activeRoute);
        });
    }
    CgMotorsListComponent.prototype.ngOnInit = function () {
        switch (this.activeRoute) {
            case 'motorcycles':
                this.pageDataArr = this.motorcycleArr;
                break;
            case 'accessories':
                this.pageDataArr = this.accessoriesArr;
                break;
            case 'vehicles':
                this.pageDataArr = this.accessoriesArr;
                break;
            case 'boats':
                this.pageDataArr = this.boatArr;
                break;
            case 'num_plate':
                this.pageDataArr = this.num_plateArr;
                break;
        }
    };
    CgMotorsListComponent.prototype.showDropdown = function (dropdown_id) {
        this.toggle_dropdown = dropdown_id;
    };
    CgMotorsListComponent.prototype.hideDropdown = function () {
        this.toggle_dropdown = "";
    };
    CgMotorsListComponent = __decorate([
        core_1.Component({
            selector: 'app-cg-motors-list',
            templateUrl: './cg-motors-list.component.html',
            styleUrls: ['./cg-motors-list.component.css']
        })
    ], CgMotorsListComponent);
    return CgMotorsListComponent;
}());
exports.CgMotorsListComponent = CgMotorsListComponent;
