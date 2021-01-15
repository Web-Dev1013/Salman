"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsListComponent = void 0;
var core_1 = require("@angular/core");
var products_list_model_1 = require("./products-list.model");
var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(location, router, activedRoute) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.activedRoute = activedRoute;
        this.id = "";
        this.products = [
            new products_list_model_1.Motor_Product("usedCar", 1, "2016 BMW X6 xDrive50i M-Sport, BMW Warranty, ...", "Used Cars for Sale ‪>‪ BMW ‪>‪ BMW X6", "AED 145,000", "5 January 2021", 2016, "4 door", "97,113", "white", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 3", "../../../../../assets/Image/motors/product/usedcar/image.webp"),
            new products_list_model_1.Motor_Product("usedCar", 2, "2016 BMW X6 xDrive50i M-Sport, BMW Warranty, ...", "Used Cars for Sale ‪>‪ BMW ‪>‪ BMW X6", "AED 145,000", "5 January 2021", 2016, "4 door", "97,113", "white", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 3", "../../../../../assets/Image/motors/product/usedcar/image (1).webp"),
            new products_list_model_1.Motor_Product("usedCar", 3, "2016 BMW X6 xDrive50i M-Sport, BMW Warranty, ...", "Used Cars for Sale ‪>‪ BMW ‪>‪ BMW X6", "AED 145,000", "5 January 2021", 2016, "4 door", "97,113", "white", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 3", "../../../../../assets/Image/motors/product/usedcar/image (2).webp"),
            new products_list_model_1.Motor_Product("usedCar", 4, "2016 BMW X6 xDrive50i M-Sport, BMW Warranty, ...", "Used Cars for Sale ‪>‪ BMW ‪>‪ BMW X6", "AED 145,000", "5 January 2021", 2016, "4 door", "97,113", "white", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 3", "../../../../../assets/Image/motors/product/usedcar/image (3).webp"),
            new products_list_model_1.Motor_Product("usedCar", 5, "2016 BMW X6 xDrive50i M-Sport, BMW Warranty, ...", "Used Cars for Sale ‪>‪ BMW ‪>‪ BMW X6", "AED 145,000", "5 January 2021", 2016, "4 door", "97,113", "white", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 3", "../../../../../assets/Image/motors/product/usedcar/image (4).webp"),
            new products_list_model_1.Motor_Product("motorcycle", 6, "Harley-Davidson Heitage soft tail classic", "Motorcycles ‪>‪ Adventure / Touring", "AED 45,000", "5 January 2021", 2011, "", "97,113", "", "  Located : UAE ‪>‪ Dubai ‪>‪ Mirdif ‪>‪ Uptown Mirdif", "../../../../../assets/Image/motors/product/motorcycle/image (1).webp"),
            new products_list_model_1.Motor_Product("motorcycle", 7, "Harley-Davidson Heitage soft tail classic", "Motorcycles ‪>‪ Adventure / Touring", "AED 45,000", "5 January 2021", 2011, "", "97,113", "", "  Located : UAE ‪>‪ Dubai ‪>‪ Mirdif ‪>‪ Uptown Mirdif", "../../../../../assets/Image/motors/product/motorcycle/image (2).webp"),
            new products_list_model_1.Motor_Product("motorcycle", 8, "Harley-Davidson Heitage soft tail classic", "Motorcycles ‪>‪ Adventure / Touring", "AED 45,000", "5 January 2021", 2011, "", "97,113", "", "  Located : UAE ‪>‪ Dubai ‪>‪ Mirdif ‪>‪ Uptown Mirdif", "../../../../../assets/Image/motors/product/motorcycle/image (3).webp"),
            new products_list_model_1.Motor_Product("motorcycle", 9, "Harley-Davidson Heitage soft tail classic", "Motorcycles ‪>‪ Adventure / Touring", "AED 45,000", "5 January 2021", 2011, "", "97,113", "", "  Located : UAE ‪>‪ Dubai ‪>‪ Mirdif ‪>‪ Uptown Mirdif", "../../../../../assets/Image/motors/product/motorcycle/image (5).webp"),
            new products_list_model_1.Motor_Product("motorcycle", 10, "Harley-Davidson Heitage soft tail classic", "Motorcycles ‪>‪ Adventure / Touring", "AED 45,000", "5 January 2021", 2011, "", "97,113", "", "  Located : UAE ‪>‪ Dubai ‪>‪ Mirdif ‪>‪ Uptown Mirdif", "../../../../../assets/Image/motors/product/motorcycle/image.webp"),
            new products_list_model_1.Motor_Product("accessories", 11, "Sony XAV-AX8000 Car Stereo | 8.95 (...", "Auto Accessories & Parts ‪>‪ Car/4x4 Parts ‪>‪ Wheels/Tires", "AED 2,000", "5 January 2021", 2011, "", "97,113", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 4", "../../../../../assets/Image/motors/product/accessories/image.webp"),
            new products_list_model_1.Motor_Product("accessories", 12, "Sony XAV-AX8000 Car Stereo | 8.95 (...", "Auto Accessories & Parts ‪>‪ Car/4x4 Parts ‪>‪ Wheels/Tires", "AED 2,000", "5 January 2021", 2011, "", "97,113", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 4", "../../../../../assets/Image/motors/product/accessories/image (1).webp"),
            new products_list_model_1.Motor_Product("accessories", 13, "Sony XAV-AX8000 Car Stereo | 8.95 (...", "Auto Accessories & Parts ‪>‪ Car/4x4 Parts ‪>‪ Wheels/Tires", "AED 2,000", "5 January 2021", 2011, "", "97,113", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 4", "../../../../../assets/Image/motors/product/accessories/image (2).webp"),
            new products_list_model_1.Motor_Product("accessories", 14, "Sony XAV-AX8000 Car Stereo | 8.95 (...", "Auto Accessories & Parts ‪>‪ Car/4x4 Parts ‪>‪ Wheels/Tires", "AED 2,000", "5 January 2021", 2011, "", "97,113", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 4", "../../../../../assets/Image/motors/product/accessories/image (3).webp"),
            new products_list_model_1.Motor_Product("accessories", 15, "Sony XAV-AX8000 Car Stereo | 8.95 (...", "Auto Accessories & Parts ‪>‪ Car/4x4 Parts ‪>‪ Wheels/Tires", "AED 2,000", "5 January 2021", 2011, "", "97,113", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz Industrial District ‪>‪ Al Quoz Industrial Area 4", "../../../../../assets/Image/motors/product/accessories/image (4).webp"),
            new products_list_model_1.Motor_Product("vehicles", 16, "2000 MAN 40.373, 6X4 MIXER TRUCK (4 Nos. Avai...", "Heavy Vehicles ‪>‪ Trucks ‪>‪ other", "AED 55,000", "5 January 2021", 2000, "", "705,000", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Awir", "../../../../../assets/Image/motors/product/vehicle/image (1).webp"),
            new products_list_model_1.Motor_Product("vehicles", 17, "2000 MAN 40.373, 6X4 MIXER TRUCK (4 Nos. Avai...", "Heavy Vehicles ‪>‪ Trucks ‪>‪ other", "AED 55,000", "5 January 2021", 2000, "", "705,000", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Awir", "../../../../../assets/Image/motors/product/vehicle/image (2).webp"),
            new products_list_model_1.Motor_Product("vehicles", 18, "2000 MAN 40.373, 6X4 MIXER TRUCK (4 Nos. Avai...", "Heavy Vehicles ‪>‪ Trucks ‪>‪ other", "AED 55,000", "5 January 2021", 2000, "", "705,000", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Awir", "../../../../../assets/Image/motors/product/vehicle/image (3).webp"),
            new products_list_model_1.Motor_Product("vehicles", 19, "2000 MAN 40.373, 6X4 MIXER TRUCK (4 Nos. Avai...", "Heavy Vehicles ‪>‪ Trucks ‪>‪ other", "AED 55,000", "5 January 2021", 2000, "", "705,000", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Awir", "../../../../../assets/Image/motors/product/vehicle/image.webp"),
            new products_list_model_1.Motor_Product("vehicles", 20, "2000 MAN 40.373, 6X4 MIXER TRUCK (4 Nos. Avai...", "Heavy Vehicles ‪>‪ Trucks ‪>‪ other", "AED 55,000", "5 January 2021", 2000, "", "705,000", "", " Located : UAE ‪>‪ Dubai ‪>‪ Al Awir", "../../../../../assets/Image/motors/product/vehicle/image (5).webp"),
            new products_list_model_1.Motor_Product("boats", 21, "Sealine boat Hannibal700(24ft) full options -...", "Boats ‪>‪ Motorboats ‪>‪ Other", "AED 69,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/boats/image.webp"),
            new products_list_model_1.Motor_Product("boats", 22, "Sealine boat Hannibal700(24ft) full options -...", "Boats ‪>‪ Motorboats ‪>‪ Other", "AED 69,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/boats/image (1).webp"),
            new products_list_model_1.Motor_Product("boats", 23, "Sealine boat Hannibal700(24ft) full options -...", "Boats ‪>‪ Motorboats ‪>‪ Other", "AED 69,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/boats/image (2).webp"),
            new products_list_model_1.Motor_Product("boats", 24, "Sealine boat Hannibal700(24ft) full options -...", "Boats ‪>‪ Motorboats ‪>‪ Other", "AED 69,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/boats/image (3).webp"),
            new products_list_model_1.Motor_Product("boats", 25, "Sealine boat Hannibal700(24ft) full options -...", "Boats ‪>‪ Motorboats ‪>‪ Other", "AED 69,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/boats/image (4).webp"),
            new products_list_model_1.Motor_Product("numberPlates", 26, "4-digit plate", "Number Plates ‪>‪ Dubai plate ‪>‪ Private car", "AED 12,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/number plats/dubai-plate_private-car_classic (1).png"),
            new products_list_model_1.Motor_Product("numberPlates", 27, "4-digit plate", "Number Plates ‪>‪ Dubai plate ‪>‪ Private car", "AED 12,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/number plats/dubai-plate_private-car_classic (2).png"),
            new products_list_model_1.Motor_Product("numberPlates", 28, "4-digit plate", "Number Plates ‪>‪ Dubai plate ‪>‪ Private car", "AED 12,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/number plats/dubai-plate_private-car_classic (3).png"),
            new products_list_model_1.Motor_Product("numberPlates", 29, "4-digit plate", "Number Plates ‪>‪ Dubai plate ‪>‪ Private car", "AED 12,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/number plats/dubai-plate_private-car_classic.png"),
            new products_list_model_1.Motor_Product("numberPlates", 30, "4-digit plate", "Number Plates ‪>‪ Dubai plate ‪>‪ Private car", "AED 12,000", "5 January 2021", 2000, "", "705,000", "", "Located : UAE ‪>‪ Dubai ‪>‪ Al Quoz ‪>‪ Al Quoz 3", "../../../../../assets/Image/motors/product/number plats/dubai-plate_private-car_new.png"),
        ];
        this.AllCitiesArr = ["All Cities", "Dubai", "Abu Dhabi", "Ras al Khaimah", "Sharjah", "Fujairah", "Ajman", "Umm al Quwain", "Al Ain"];
        this.SideNavListArr = ["All of Dubizzle", "Motors", "Classifieds", "Property For Sale", "Property For Rent", "Job", "Job Wanted", "Community"];
        this.MerchandiseListArr = ["All Categories", "Used Cars for Sale", "Motorcycles", "Auto Accessories &amp; Parts", "Heavy Vehicles", "Boats", "Number Plates"];
        this.CarListArr = ["All Makes", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BAIC", "BMW", "BYD", "Bentley", "Bizzarrini", "Borgward", "Brilliance", "Bufori", "Bugatti", "Buick", "CMC", "Cadillac", "Caterham", "Changan", "Chery", "Chevrolet", "Chrysler", "Citroen", "DFSK", "Daewoo", "Daihatsu", "Datsun", "DeLorean", "Dodge", "DongFeng", "Dorcen", "Equus", "Fenyr", "Ferrari", "Fiat", "Fisker", "Force", "Ford", "Foton", "GAC", "GAC Gonow", "GMC", "Geely", "Grand Tiger", "Great Wall", "Gumpert", "Haval", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti"];
        this.TimeListArr = ["Any Time", "Today", "Within 3 Days", "Within 1 Week", "Within 2 Weeks", "Within 1 Month", "Within 3 Month", "Within 6 Month"];
        // AgeListArr: any[] = ["", "Brand New", "Less than 1 month", "Less than 6 month", "Less than 1 year", "Less than 2 year", "Less than 5 year", "Less than 10 year"]
        // ConditionListArr: any[] = ["", "Flawless", "Exellent or Better", "Good or Better", "Average or better", "Poor or better"]
        // UsageListArr: any[] = ["", "Never Used", "Used Once or less", "Light Usage or less", "Normal Usage or less", "Heavy Usage or less"]
        this.SellerTypeArr = ["All Types", "Owner", "Dealer", "Dealership/Certified Pre-Owned"];
        this.BadgesArr = ["Full Service History", "Negotiable", "Under Warranty", "Urgent"];
        this.BodyTypeArr = ["Coupe", "Crossover", "Hard Top Convertible", "Hatchback", "Pick Up Truck", "Sedan", "Soft Top Convertible", "Sports Car", "SUV", "Utility Truck", "Van", "Wagon", "Other"];
        this.DoorsArr = ["2", "3", "4", "5+"];
        this.NoOfCylindersArr = ["3", "4", "5", "6", "8", "10", "12"];
        this.TechnicalFeaturesArr = ["4 Wheel Drive", "All Wheel Drive", "All Wheel Steering", "Anti-Lock Brakes/ABS", "Cruise Control", "Dual Exhaust", "Front Airbags", "Front Wheel Drive", "N2O System", "Power Steering", "Rear Wheel Drive", "Side Airbags", "Tiptronic Gears"];
        this.ExtrasArr = ["Air Conditioning", "Alarm/Anti-Theft System", "AM/FM Radio", "Aux Audio in", "Bluetooth System", "Body Kit", "Brush Guard", "Cassette Player", "CD player", "Fog Lights", "Heat", "Heated Seats", "Keyless Entry", "Keyless Start", "Leather Seats", "Moonroof", "Navigation System", "Off-Road Tyres", "Parking Sensors", "Performance Tyres", "Power Locks", "Power Mirrors", "Power Seats", "Power Sunroof", "Power Windows", "Premium Lights", "Premium Paint", "Premium Sound System", "Premium Wheels/Rims", "Racing Seats", "Satellite Radio", "Spoiler", "VHS Player", "Winch"];
        this.HorsepowerArr = ["Less than 150", "150-200", "200-300", "300-400", "400-500", "500-600", "600-700", "700-800", "800-900", "900+"];
        this.TransmissionTypeArr = ["Manual", "Automatic"];
        this.ColorArr = ["Black", "Blue", "Brown", "Burgundy", "Gold", "Grey", "Orange", "Green", "Purple", "Red", "Silver", "Tan", "Tea", "White", "Yellow", "Other Color"];
        this.WarrantyArr = ["Yes", "No", "Does not apply"];
        this.FuelTypeArr = ["Gasoline", "Diesel", "Hybrid", "Electric"];
        this.RegionalSpecsArr = ["European Specs", "GCC Specs", "Japanese Specs", "North American Specs", "Other"];
        this.activedRoute.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        console.log("+++++++++", this.id);
    };
    ProductsListComponent.prototype.gotoProductDetails = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("Navigation is successful!");
            }
            else {
                console.log("Navigation has failed!");
            }
        });
    };
    ProductsListComponent = __decorate([
        core_1.Component({
            selector: 'app-commonofkind',
            templateUrl: './products-list.component.html',
            styleUrls: ['./products-list.component.css']
        })
    ], ProductsListComponent);
    return ProductsListComponent;
}());
exports.ProductsListComponent = ProductsListComponent;
