"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewProjectDetailListComponent = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var newproject_model_1 = require("../newproject.model");
var NewProjectDetailListComponent = /** @class */ (function () {
    function NewProjectDetailListComponent(modalService) {
        this.modalService = modalService;
        this.title = 'appBootstrap';
        this.closeResult = "";
        // State value for modal
        this.showDialog = false;
        // ///////////////
        // When click select Project, Change name of dropdown button.
        this.ProjectName = "New Projects";
        //////////////
        this.projectsArr = [
            new newproject_model_1.NewProjectModel(1, "../../../../../assets/Image/newproject/dubai/003.jpg", "Golf Views", "Dubai, JLT Jumeirah Lake Towers", "400,888 AED", "384-1516SqFt-Studio", 3),
            new newproject_model_1.NewProjectModel(2, "../../../../../assets/Image/newproject/dubai/1.jpg", "Sweden Palaces Luxury Villas", "Dubai, The World", "80,000,000 AED", "21168 SqFt", 5),
            new newproject_model_1.NewProjectModel(3, "../../../../../assets/Image/newproject/dubai/2.jpg", "Casablanca Villas", "Dubai, Akoya Oxygen", "1,680,000 AED", "2300 SqFt", 4),
            new newproject_model_1.NewProjectModel(4, "../../../../../assets/Image/newproject/dubai/3.jpg", "Seven Palm", "Dubai, The Palm Jumeirah", "649,888 AED", "307-1664 SqFt-Studio", 3),
            new newproject_model_1.NewProjectModel(5, "../../../../../assets/Image/newproject/dubai/4.jpg", "Hera Tower", "Dubai, The Heart of Europe", "20,000,000 AED", "340 SqFt-Studio", 3),
            new newproject_model_1.NewProjectModel(6, "../../../../../assets/Image/newproject/dubai/5.jpg", "The Floating Seahorse Villas", "Dubai, The Heart of Europe", "20,000,000", "4004SqFt", 4),
            new newproject_model_1.NewProjectModel(7, "../../../../../assets/Image/newproject/dubai/6.jpg", "Dezire Residences", "Dubai, JVC Jumeirah Village Circle", "200,000", "384-760 SqFt-Studio", 1),
            new newproject_model_1.NewProjectModel(8, "../../../../../assets/Image/newproject/dubai/7.jpg", "Royal Park", "Dubai, Jumeirah Park", "3,099,000 AED", "2900SqFt", 4)
        ];
        this.NewProjectArr = [
            { id: 1, name: "Dubai Projects(252)" },
            { id: 2, name: "Sharjah Projects(24)" },
            { id: 3, name: "Abu Dhabi Projects(11)" },
            { id: 4, name: "Fujalrah Projects(2)" },
            { id: 5, name: "Al Ain Projects(1)" },
            { id: 6, name: "Ras Al Khaimah Projects(1)" },
            { id: 7, name: "Ajman Projects(1)" }
        ];
        /// Cities
        this.CityName = "All Cities";
        this.CitiesArr = [
            { link: "AllCities", name: "All Cities", amount: "292" },
            { link: "Dubai", name: "Dubai", amount: "252" },
            { link: "Sharjah", name: "Sharjah", amount: "24" },
            { link: "AbuDhabi", name: "Abu Dhabi", amount: "11" },
            { link: "Fujairah", name: "Fujairah", amount: "2" },
            { link: "AlAin", name: "Al Ain", amount: "1" },
            { link: "Khaimah", name: "Ras Al Khaimah", amount: "1" },
            { link: "Ajman", name: "Ajman", amount: "1" },
        ];
        /// Neighborhoods   
        this.Neighborhood = "Neighborhoods";
        this.NeighborhoodsArr = [
            { name: "All neighborhoods" },
            { name: "Al Khail Heights" },
            { name: "Al Khawaneej" },
            { name: "Al Mamzar" },
            { name: "Al Manara" },
            { name: "Al Mankhool" },
            { name: "Al Mizhar" },
            { name: "Al Muteena" },
            { name: "Al Nahda" },
            { name: "Al Quoz" },
            { name: "Al Qusals" },
            { name: "Al Ras" },
            { name: "Al Rigga" },
        ];
        //// Bedrooms
        this.BedroomName = "Bedrooms";
        this.BedroomsArr = [
            { name: "All" },
            { name: "Studio" },
            { name: "1Bedroom" },
            { name: "2Bedrooms" },
            { name: "3Bedrooms" },
            { name: "4Bedrooms" },
            { name: "5+Bedrooms" }
        ];
        ///Price From
        this.PriceFromName = "Price from";
        this.PriceFromArr = [
            { name: "250,000 AED" },
            { name: "500,000 AED" },
            { name: "1,000,000 AED" },
            { name: "2,000,000 AED" },
            { name: "4,000,000 AED" },
            { name: "5,000,000 AED" },
            { name: "10,000,000 AED" },
            { name: "20,000,000 AED" },
            { name: "30,000,000 AED" },
            { name: "40,000,000 AED" },
            { name: "60,000,000 AED" }
        ];
        ///Price  To
        this.PriceToName = "Price to";
        this.PriceToArr = [
            { name: "250,000 AED" },
            { name: "500,000 AED" },
            { name: "1,000,000 AED" },
            { name: "2,000,000 AED" },
            { name: "4,000,000 AED" },
            { name: "5,000,000 AED" },
            { name: "10,000,000 AED" },
            { name: "20,000,000 AED" },
            { name: "30,000,000 AED" },
            { name: "40,000,000 AED" },
            { name: "60,000,000 AED" }
        ];
        ////Property
        this.PropertyTypeName = "Property type";
        this.PropertyTypeArr = ["All", "Apartment", "Villa", "Townhouse"];
        /// Developer
        this.DeveloperArr = [
            { src: "", name: "DAMAC properties" },
            { src: "", name: "Azizi Developments" },
            { src: "", name: "Arada" },
            { src: "", name: "Nshama" },
            { src: "", name: "Reportage Properties" },
            { src: "", name: "Tiger Group" },
            { src: "", name: "Binghatti Developers" },
            { src: "", name: "Omnlyat Group" },
            { src: "", name: "Kleindlenst Group" },
            { src: "", name: "MAG Lifestyle Development" },
            { src: "", name: "Dubai South" },
            { src: "", name: "IFA Hotels&Resorts" },
            { src: "", name: "Dubai Properties" },
            { src: "", name: "Meraas" },
            { src: "", name: "FAM Holding" },
            { src: "", name: "Danube Properties" },
            { src: "", name: "Ellington Properties" },
            { src: "", name: "Sobha Realty" },
            { src: "", name: "Deyaar" },
            { src: "", name: "Al Zahia" }
        ];
        this.Advanced_SizeArr = [
            { name: "250SqFt" },
            { name: "500SqFt" },
            { name: "1,000SqFt" },
            { name: "2,000SqFt" },
            { name: "3,000SqFt" },
            { name: "4,000SqFt" },
            { name: "5,000SqFt" },
            { name: "10,000SqFt" },
            { name: "15,000SqFt" },
            { name: "20,000SqFt" },
            { name: "25,000SqFt" },
            { name: "30,000SqFt" }
        ];
        this.Advanced_TypeArr = [
            { name: "All" },
            { name: "Simplex" },
            { name: "Duplex" },
            { name: "Loft" },
            { name: "Penthouse" }
        ];
        this.Advanced_StatusArr = [
            { name: "All" },
            { name: "Under Construction" },
            { name: "Ready" },
            { name: "On-hold" }
        ];
        this.CompletionArr = ["All", "Before 2018", "2018", "2019", "1Q 2020", "2Q 2020", "3Q 2020", "4Q 2020", "1Q 2021", "2Q 2021", "3Q 2021", "4Q 2021", "1Q 2022", "2Q 2022", "3Q 2022", "4Q 2022", "1Q 2023", "2Q 2023", "3Q 2023", "4Q 2023", "1Q 2024", "2Q 2024", "3Q 2024", "4Q 2024", "1Q 2025", "2Q 2025", "3Q 2025", "4Q 2025", "1Q 2026", "2Q 2026", "3Q 2026", "4Q 2026"];
        this.ParkingTypeArr = ["All Parkings", "Overground", "Underground", "Covered"];
        this.BathroomsArr = ["All", "1", "2", "3", "4", "5+"];
        this.PricePerSqFtArr = ["250 AED", "500 AED", "750 AED", "1000 AED", "1250 AED", "1500 AED", "2000 AED", "3000 AED", "5000 AED"];
        this.AdvancedTagArr = ["24 Hour Security", "Balcony", "BBQ area", "Beach Access", "Book for under AED 60,000", "Central Air Conditioning", "Children's Play Area", "Children's Swimming Pool", "Cycle track", "Garage", "Gym", "Jogging track", "Marina View", "Parking", "Private garden", "Proximity to Cafes and Restaurants", "Retail Facilities", "Sea Views", "Spa or Sauna", "Swimming Pool", "Tennis courts", "Terrace"];
    }
    NewProjectDetailListComponent.prototype.ngOnInit = function () {
    };
    NewProjectDetailListComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewProjectDetailListComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NewProjectDetailListComponent.prototype.select = function (event, Projects) {
        console.log(Projects.name);
        this.ProjectName = Projects.name;
    };
    NewProjectDetailListComponent.prototype.SelectCity = function (City) {
        this.CityName = City;
    };
    NewProjectDetailListComponent.prototype.SelectNeighborhood = function (Neighborhood) {
        this.Neighborhood = Neighborhood;
    };
    NewProjectDetailListComponent.prototype.SelectBedroom = function (Bedroom) {
        this.BedroomName = Bedroom;
    };
    NewProjectDetailListComponent.prototype.SelectPriceFrom = function (PriceFrom) {
        this.PriceFromName = PriceFrom;
    };
    NewProjectDetailListComponent.prototype.SelectPriceTo = function (PriceTo) {
        this.PriceToName = PriceTo;
    };
    NewProjectDetailListComponent.prototype.SelectPropertyType = function (PropertyType) {
        this.PropertyTypeName = PropertyType;
    };
    NewProjectDetailListComponent = __decorate([
        core_1.Component({
            selector: 'app-newproject',
            templateUrl: './new-project-detail-list.component.html',
            styleUrls: ['./new-project-detail-list.component.css']
        })
    ], NewProjectDetailListComponent);
    return NewProjectDetailListComponent;
}());
exports.NewProjectDetailListComponent = NewProjectDetailListComponent;
