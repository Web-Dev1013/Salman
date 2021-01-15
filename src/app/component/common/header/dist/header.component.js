"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var country_service_1 = require("../../../services/country.service");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.cityName = "All Cities";
        this.showChats = false;
        this.logged = "";
        this.displayInfo = "";
        this.showCityMenu = false;
        this.activeMenu = "";
    }
    HeaderComponent.prototype.gotoProductDetail = function (url, id) {
        this.router.navigate([url, id]).then(function (e) {
            if (e) {
                console.log("success");
            }
            else {
                console.log("warning");
            }
        });
    };
    HeaderComponent.prototype.displayCity = function (City) {
        this.cityName = City.name;
    };
    HeaderComponent.prototype.toggleChats = function () {
        console.log("+++++++");
        if (this.showChats == false) {
            this.showChats = true;
        }
        else {
            this.showChats = false;
        }
    };
    HeaderComponent.prototype.loggedIn = function (success) {
        this.logged = success;
    };
    HeaderComponent.prototype.showUserInfo = function (showInfo) {
        this.displayInfo = showInfo;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.userInfoArr = [
            { id: "my_ads", name: "My Ads" },
            { id: "my_favorites", name: "My Favorites" },
            { id: "my_searches", name: "My Searches" },
            { id: "my_profile", name: "My Profile" }
        ];
        this.notificationArr = [
            { id: "usedCar", title: "61 new search results", avatar: "../../../../assets/Image/notification/image.webp", description: "Have a look at these used cars for sale ads!", date: "2" },
            { id: "accessories", title: "156 new search results", avatar: "../../../../assets/Image/notification/image (1).webp", description: "Have a look at these Furniture, Home & Garden ads!", date: "2" },
            { id: "vehicle", title: "67 new search results", avatar: "../../../../assets/Image/notification/image (2).webp", description: "Have a look at these Used Car for Sale ads!", date: "5" },
            { id: "boats", title: "90 new search results", avatar: "../../../../assets/Image/notification/image (3).webp", description: "Have a look at these Furniture, Home & Garden ads!", date: "6" },
            { id: "motorcycle", title: "55 new search results", avatar: "../../../../assets/Image/notification/image (4).webp", description: "Have a look at these Used Car for Sale", date: "8" },
        ];
        this.CitiesArr = [
            { id: "all", name: "All Cities" },
            { id: "dubai", name: "Dubai" },
            { id: "dhabi", name: "Abu Dhabi" },
            { id: "khaimah", name: "Ras al Khaimah" },
            { id: "sharjah", name: "Sharjah" },
            { id: "fujairah", name: "Fujairah" },
            { id: "ajman", name: "Ajman" },
            { id: "quwain", name: "Umm al Quwain" },
            { id: "ain", name: "Al Ain" }
        ];
        this.menuArr = [
            {
                id: "motors", name: "Motors", subMenu: [
                    {
                        id: "usedCar", name: "Used Cars for Sale", child: [
                            { id: "motorcycle", name: "Acura" },
                            { id: "usedCar_AlfaRomeo", name: "Alfa Romeo" },
                            { id: "usedCar_AstonMartin", name: "Aston Martin" },
                            { id: "usedCar_Audi", name: "Audi" },
                            { id: "usedCar_BAIC", name: "BAIC" },
                            { id: "usedCar_BMW", name: "BMW" },
                            { id: "usedCar_BYD", name: "BYD" },
                            { id: "usedCar_Bentley", name: "Bentley" },
                            { id: "usedCar_Bizzarrini", name: "Bizzarrini" },
                            { id: "usedCar_Borgward", name: "Borgward" },
                            { id: "usedCar_Brilliance", name: "Brilliance" },
                            { id: "usedCar_Bufori", name: "Bufori" },
                            { id: "usedCar_Bugatti", name: "Bugatti" },
                            { id: "usedCar_Buick", name: "Buick" },
                            { id: "usedCar_CMC", name: "CMC" },
                            { id: "usedCar_Cadilac", name: "Cadilac" },
                            { id: "usedCar_Caterham", name: "Caterham" },
                            { id: "usedCar_Changan", name: "Changan" },
                            { id: "usedCar_Chery", name: "Chery" },
                            { id: "usedCar_Chevrolet", name: "Chevrolet" }
                        ]
                    },
                    {
                        id: "motorcycle", name: "Motorcycles", child: [
                            { id: "vehicles", name: "Sport Bike" },
                            { id: "motorcycle_adventure", name: "Adventure/Touring" },
                            { id: "motorcycle_cruiser", name: "Cruiser/Chopper" },
                            { id: "motorcycle_OffRoad", name: "Off-Road" },
                            { id: "motorcycle_Scooter", name: "Scooter" },
                            { id: "motorcycle_StandCommuter", name: "Standard/Commuter" },
                            { id: "motorcycle_CafeRacer", name: "Cafe Racer" },
                            { id: "motorcycle_Trike", name: "Trike" },
                            { id: "motorcycle_Trailer", name: "Trailer" },
                            { id: "motorcycle_Karting", name: "Karting" },
                            { id: "motorcycle_MoPed", name: "Mo-Ped" },
                            { id: "motorcycle_Other", name: "Other" }
                        ]
                    },
                    {
                        id: "accessories", name: "Auto Accessories & Parts", child: [
                            { id: "numberPlates", name: "Car/4&times;4 Parts" },
                            { id: "accessories_AppMerAcc", name: "Apparel, Merchandise & Accessories" },
                            { id: "accessories_MotorcyclePart", name: "MotorCycle Parts" },
                            { id: "accessories_AutoMotiveTool", name: "Automotive Tools" },
                            { id: "accessories_BoatPart", name: "Boat Parts" },
                            { id: "accessories_NumPlate", name: "Number Plates" },
                            { id: "accessories_OtherVehiclePart", name: "Other Vehicle Parts" }
                        ]
                    },
                    {
                        id: "vehicles", name: "Heavy Vehicles", child: [
                            { id: "vehicles_Truck", name: "Trucks" },
                            { id: "vehicles_Buses", name: "Buses" },
                            { id: "vehicles_Forklift", name: "Forklifts" },
                            { id: "vehicles_Trailer", name: "Trailers" },
                            { id: "vehicles_Crane", name: "Cranes" },
                            { id: "vehicles_Tanker", name: "Tankers" },
                            { id: "vehicles_PartEngine", name: "Parts & Engines" },
                            { id: "vehicles_OtherHeavyVehicle", name: "Other Heavy Vehicle" }
                        ]
                    },
                    {
                        id: "boats", name: "Boats", child: [
                            { id: "motorcycle", name: "Motorboats" },
                            { id: "boats_Sailboat", name: "Sailboats" },
                            { id: "boats_RowPaddle", name: "Row/Paddle Boats" }
                        ]
                    },
                    {
                        id: "numberPlates", name: "Number Plates", child: [
                            { id: "usedCar", name: "Dubai Plate" },
                            { id: "numberPlates_AbuDhabi", name: "Abu Dhabi Plate" },
                            { id: "numberPlates_Sharjah", name: "Sharjah Plate" },
                            { id: "numberPlates_Ajman", name: "Ajman Plate" },
                            { id: "numberPlates_Fujairah", name: "Fujairah Plate" },
                            { id: "numberPlates_UmmAlQuwain", name: "Umm Al Quwain Plate" },
                            { id: "numberPlates_RasAlKhaimah", name: "Ras Al Khaimah Plate" }
                        ]
                    },
                    {
                        id: "", name: "Export Cars", child: [
                            { id: "ExportCar", name: "View All" }
                        ]
                    }
                ]
            },
            {
                id: "propertyforrent", name: "Property for Rent", subMenu: [
                    { id: "Apartment/Flat", name: "Apartment/Flat for Rent" },
                    { id: "VillaHouse", name: "Villa/House for Rent" },
                    { id: "Commercial", name: "Commercial for Rent" },
                    { id: "Rooms", name: "Rooms for Rent" },
                    { id: "Monthly", name: "Short Term (Monthly)" },
                    { id: "Daily", name: "Short Term (Daily)" }
                ]
            },
            {
                id: "propertyforsale", name: "Property for Sale", subMenu: [
                    { id: "Apartment11", name: "Apartment for Sale" },
                    { id: "VillaHouse11", name: "Villa/House for Sale" },
                    { id: "Commercial11", name: "Commercial for Sale" },
                    { id: "Multiple11", name: "Multiple Units for Sale" },
                    { id: "Land11", name: "Land for Sale" }
                ]
            },
            {
                id: "propertynewproject", name: "Property New Projects", subMenu: [
                    { id: "Apartment", name: "Apartment New Projects" },
                    { id: "Villa", name: "Villa New Projects" },
                    { id: "Townhouse", name: "Townhouse New Projects" }
                ]
            },
            {
                id: "classified", name: "Classified", subMenu: [
                    {
                        id: "usedCar", name: "Electronics", child: [
                            { id: "motorcycle", name: "Home Audio & Turntables" },
                            { id: "TV", name: "Televisions" },
                            { id: "Theater", name: "DVD & Home Theater" },
                            { id: "ElectroAcc", name: "Electronic Accessories" },
                            { id: "Gadgets", name: "Gadgets" },
                            { id: "CarElectro", name: "Car Electronics" },
                            { id: "Mp3Audio", name: "MP3 Players and Portable Audio" },
                            { id: "SateCableTV", name: "Satellite & Cable TV" },
                            { id: "HealthElectro", name: "Health Electronics" },
                            { id: "SmartHome", name: "Smart Home" },
                            { id: "WearableTech", name: "Wearable Technology" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "motorcycle", name: "Computer & Networking", child: [
                            { id: "boats", name: "Computers" },
                            { id: "ComComp", name: "Computer Components" },
                            { id: "Accessories", name: "Accessories" },
                            { id: "NetComm", name: "Networking & Communication" },
                            { id: "Software", name: "Software" },
                            { id: "MPOther", name: "Monitor, Printers & Other Peripherals" }
                        ]
                    },
                    {
                        id: "vehicles", name: "Business & Industrial", child: [
                            { id: "usedCar", name: "Businesses for Sale" },
                            { id: "Construction", name: "Construction" },
                            { id: "FoodBev", name: "Food Beverage" },
                            { id: "IndustSup", name: "Industrial Supplies" },
                            { id: "OfficeEquip", name: "Office Furniture & Equipment" },
                            { id: "Manufacturing", name: "Manufacturing" },
                            { id: "ElectEquip", name: "Electrical Equipment" },
                            { id: "RetailServ", name: "Retail & Services" },
                            { id: "HealthLab", name: "Healthcare & Lab" },
                            { id: "PrintCopy", name: "Commercial Printing & Copy Machines " },
                            { id: "PackShip", name: "Packing & Shipping" },
                            { id: "AgForestry", name: "Agriculture & Forestry" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "numberPlates", name: "Home Appliances", child: [
                            { id: "motorcycle", name: "Large Appliances/White Goods" },
                            { id: "kitApp", name: "Small Kitchen Appliances" },
                            { id: "OutdoorApp", name: "Outdoor Appliances" },
                            { id: "BathroomApp", name: "Small Bathroom APPliances" },
                            { id: "IronSewing", name: "Irons & Sewing Machines" },
                            { id: "VaccumFloor", name: "Vaccums & Floor Care" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "accessories", name: "Sports Equipment", child: [
                            { id: "numberPlates", name: "Cycling" },
                            { id: "ExeEquip", name: "Exercise Equipment" },
                            { id: "WaterSports", name: "Water Sports" },
                            { id: "CampHik", name: "Camping & Hiking" },
                            { id: "Golf", name: "Golf" },
                            { id: "IndoorSports", name: "Indoor Sports" },
                            { id: "TeamSports", name: "Team Sports" },
                            { id: "TennisRacquet", name: "Tennis & Racquet Sports" },
                            { id: "WinterSports", name: "Winter Sports" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "usedCar", name: "Clothing & Accessories", child: [
                            { id: "motorcycle", name: "Shoes/Footwear" },
                            { id: "Clothing", name: "Clothing" },
                            { id: "HandBagWallet", name: "Handbags, Bags & Wallets" },
                            { id: "MenAcc", name: "Men\'s Accessories" },
                            { id: "WomenAcc", name: "Women\'s Accessories" },
                            { id: "Luggage", name: "Luggage" },
                            { id: "Fragrance", name: "Fragrances" },
                            { id: "WedApparel", name: "Welling Apparel" },
                            { id: "CoUnifrom", name: "Costumes & Uniforms" },
                            { id: "VintageHigh", name: "Vintage & Highend Cothing" },
                            { id: "MakeSkin", name: "Make up & Skin Care" }
                        ]
                    },
                    {
                        id: "CameraImg", name: "Cameras & Imaging", child: [
                            { id: "DigitCam", name: "Digital Cameras" },
                            { id: "LenFilter", name: "Lenses, Filters & Lighting" },
                            { id: "ProEquip", name: "Professional Equipment" },
                            { id: "CameraAcc", name: "Camera Accessories" },
                            { id: "TripStand", name: "Tripods & Stands" },
                            { id: "Camcorders", name: "CAmcorders" },
                            { id: "FilmCam", name: "Film Cameras" },
                            { id: "BinoTel", name: "Binoculars/Telescopes" },
                            { id: "CamcorderAcc", name: "CAmcorder Accessories" },
                            { id: "CamDrones", name: "CamDrones" }
                        ]
                    },
                    {
                        id: "JeWatch", name: "Jewelry & Watches", child: [
                            { id: "Watches", name: "Watches" },
                            { id: "WomenJew", name: "Women\'s Jewelry" },
                            { id: "MenJew", name: "Men\'s Jewelry" },
                            { id: "DiamGem", name: "Loose Diamonds & Gems" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "Pets", name: "Pets", child: [
                            { id: "FreeAdopion", name: "Pets for Free Adoption" },
                            { id: "PetAcc", name: "Pet Accessories" },
                            { id: "LostFond", name: "Lost & Found Pets" }
                        ]
                    },
                    {
                        id: "Musical", name: "Musical Instruments", child: [
                            { id: "Guitars", name: "Guitars" },
                            { id: "PianosKey", name: "Pianos, Keyboards & Organs" },
                            { id: "Percussion", name: "Percussion" },
                            { id: "StrInst", name: "String Instruments" },
                            { id: "WindInst", name: "Wind Instruments" },
                            { id: "DJRecEquip", name: "DJ & Recording Equipment" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "Gaming", name: "Gaming", child: [
                            { id: "GamingSys", name: "Gaming Systems" },
                            { id: "VideoGames", name: "VideoGames" },
                            { id: "GamingAcc", name: "Gaming Accessories" }
                        ]
                    },
                    {
                        id: "Baby", name: "Baby Items", child: [
                            { id: "StrollerCar", name: "Strollers & Car Seats" },
                            { id: "NurseryAcc", name: "Nursery Furniture & Accessories" },
                            { id: "BabyGear", name: "Baby Gear" },
                            { id: "BabyToys", name: "Baby Toys" },
                            { id: "Feeding", name: "Feeding" },
                            { id: "SafeHealth", name: "Safety & Health" },
                            { id: "BathDiaper", name: "Bath & Diapers" }
                        ]
                    },
                ]
            },
            {
                id: "furnituregarden", name: "Furniture & Garden", subMenu: [
                    {
                        id: "Furniture", name: "Furniture", child: [
                            { id: "ArmoWardrobe", name: "Armoires & Wardrobes" },
                            { id: "BedSet", name: "Beds & Bed Sets" },
                            { id: "Bookcases", name: "Bookcases" },
                            { id: "CabCup", name: "Cabinets & Cupboards" },
                            { id: "ChairBench", name: "Chairs, Benches & Stools" },
                            { id: "ChildFurniture", name: "Childrens Furniture" },
                            { id: "DiningSets", name: "Dining Sets" },
                            { id: "DressVan", name: "Dressers & Vanities" },
                            { id: "EntCenter", name: "Entertainment Centers" },
                            { id: "KitCart", name: "Kitchen Islands & Carts" },
                            { id: "Nightstands", name: "Nightstands" },
                            { id: "Office", name: "Office Furniture" },
                            { id: "SofaFuton", name: "Sofas, Futons & Lounges" },
                            { id: "Tables", name: "Tables" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "HomeAcc", name: "Home Accessories", child: [
                            { id: "Bath", name: "Bath Accessories" },
                            { id: "Bed", name: "Bedding & Bed Accessories" },
                            { id: "Garden", name: "Garden Decor & Accessories" },
                            { id: "HomeAccents", name: "Home Decor & Accents" },
                            { id: "Housekeeping", name: "Housekeeping" },
                            { id: "KitDining", name: "Kitchen & Dining" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "GardenOutdoor", name: "Garden & Outdoor", child: [
                            { id: "Accessories", name: "Garden Accessories" },
                            { id: "Decor", name: "Garden Decor" },
                            { id: "Furniture", name: "Garden Furniture" },
                            { id: "StructureFen", name: "Garden Structures & Fences" },
                            { id: "JacPool", name: "Jacuzzis & Pools" },
                            { id: "Plants", name: "Plants" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "LightingFan", name: "Lighting & Fans", child: [
                            { id: "CeilingFan", name: "Ceiling Fans" },
                            { id: "Lamps", name: "Lamps" },
                            { id: "Fixture", name: "Light Fixtures" },
                            { id: "StandFan", name: "Stand Fans" }
                        ]
                    },
                    {
                        id: "RugCarpet", name: "Rugs & Carpets", child: [
                            { id: "AbModern", name: "Abstract/Modern" },
                            { id: "AmimalSkin", name: "Animal Skin" },
                            { id: "Asian", name: "Asian" },
                            { id: "Children", name: "Children" },
                            { id: "EClassical", name: "European/Classical" },
                            { id: "MEIndian", name: "Middle Eartern/Indian" },
                            { id: "SolidColor", name: "Solid Color" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "CurtainBlind", name: "Curtains & Blinds", child: [
                            { id: "CurDrape", name: "Curtains & Drapes" },
                            { id: "FabBlind", name: "Fabric Blinds" },
                            { id: "WooPlastic", name: "Wooden/Plastic Blinds" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "ToolHome", name: "Tools & Home Improvement", child: [
                            { id: "HandTool", name: "Hand Tools" },
                            { id: "Hardware", name: "Hardware" },
                            { id: "ElectAir", name: "Plumbing, Electrical & Air" },
                            { id: "PowerTool", name: "Power Tools" }
                        ]
                    }
                ]
            },
            {
                id: "mobiletablet", name: "Mobiles & Tablets", subMenu: [
                    {
                        id: "usedCar", name: "Mobile Phones", child: [
                            { id: "motorcycle", name: "Acer" },
                            { id: "Alcatel", name: "Alcatel" },
                            { id: "AppleiPhone", name: "Apple iPhone" },
                            { id: "Asus", name: "Asus" },
                            { id: "Blackberry", name: "Blackberry" },
                            { id: "CAT", name: "CAT" },
                            { id: "CECT", name: "CECT" },
                            { id: "Google", name: "Google" },
                            { id: "HTC", name: "HTC" },
                            { id: "HewPack", name: "Hewlett Packard" },
                            { id: "Huawei", name: "Huawei" },
                            { id: "LG", name: "LG" },
                            { id: "Lava", name: "Lava" },
                            { id: "Lenovo", name: "Lenovo" },
                            { id: "Meizu", name: "Meizu" },
                            { id: "Motorola", name: "Motorola" },
                            { id: "Nokia", name: "Nokia" },
                            { id: "OnePlus", name: "OnePlus" },
                            { id: "Oppo", name: "Oppo" },
                            { id: "Palm", name: "Palm" }
                        ]
                    },
                    {
                        id: "numberPlates", name: "Mobile Phone & Tablet Accessories", child: [
                            { id: "accessories", name: "Batteries" },
                            { id: "CableAdapter", name: "Cables & Adapters" },
                            { id: "CarKits", name: "Car Kits" },
                            { id: "CaseSleeve", name: "Cases & Sleeves" },
                            { id: "Chargers", name: "Chargers" },
                            { id: "GimbalStick", name: "Gimbals & Selfie Sticks" },
                            { id: "Headsets", name: "Headsets" },
                            { id: "Other", name: "Other" }
                        ]
                    },
                    {
                        id: "vehicles", name: "Tablets", child: [
                            { id: "boats", name: "Apple" },
                            { id: "Dell", name: "Dell" },
                            { id: "Franklin", name: "Franklin" },
                            { id: "HPCompaq", name: "HP/Compaq" },
                            { id: "HTC", name: "HTC" },
                            { id: "Handspring", name: "Handspring" },
                            { id: "Huawei", name: "Huawei" },
                            { id: "Lenovo", name: "Lenovo" },
                            { id: "Palm", name: "Palm" },
                            { id: "RIM", name: "RIM" },
                            { id: "Samsung", name: "Samsung" },
                            { id: "Sharp", name: "Sharp" },
                            { id: "Sony", name: "Sony" },
                            { id: "Symbol", name: "Symbol" },
                            { id: "Wintouch", name: "Wintouch" },
                            { id: "iMate", name: "iMate" }
                        ]
                    },
                    {
                        id: "accessories", name: "Other Mobile Phones & Tablets", child: [
                            { id: "usedCar", name: "View All" }
                        ]
                    }
                ]
            },
            {
                id: "job", name: "Jobs", subMenu: [
                    { id: "usedCar", name: "Accounting" },
                    { id: "motorcycle", name: "Architecture & Interior Design" },
                    { id: "boats", name: "Automotive" },
                    { id: "Beauty", name: "Beauty" },
                    { id: "BusinDev", name: "Business Development" },
                    { id: "Construction", name: "Construction" },
                    { id: "CustomServ", name: "Customer Service" },
                    { id: "Education", name: "Education" },
                    { id: "Engineering", name: "Engineering" },
                    { id: "Fashion", name: "Fashion" },
                    { id: "FoodBev", name: "Food & Beverages" },
                    { id: "GraphicDesign", name: "Graphic Design" },
                    { id: "HosRes", name: "Hospitality & Restaurants" },
                    { id: "HHRec", name: "HR & Recruitment" },
                    { id: "IndusManu", name: "Industrial & Manufacturing" },
                    { id: "InfoTech", name: "Information Technology" },
                    { id: "Internet", name: "Internet" },
                    { id: "LegalServ", name: "Legal Services" },
                    { id: "LogDis", name: "Logistics & Distribution" },
                    { id: "MarkAdvert", name: "Marketing & Advertising" },
                    { id: "Media", name: "Media" },
                    { id: "MedicalHealth", name: "Medical & Healthcare" },
                    { id: "OnlineMedia", name: "Online Media" },
                    { id: "RealEstate", name: "Real Estate" },
                    { id: "RetailConsum", name: "Retail & Consumer Goods" },
                    { id: "SafeSecu", name: "Safety & Security" },
                    { id: "Sales", name: "Sales" },
                    { id: "Secretarial", name: "Secretarial" },
                    { id: "SportsFit", name: "Sports & Fitness" },
                    { id: "Transport", name: "Transportation" },
                    { id: "TravelTour", name: "Travel & Tourism" },
                    { id: "Wanted", name: "Jobs Wanted" }
                ]
            },
            {
                id: "community", name: "Community", subMenu: [
                    { id: "vehicles", name: "Services" },
                    { id: "accessories", name: "Car Lift" },
                    { id: "numberPlates", name: "Freelancers" },
                    { id: "Domestic", name: "Domestic" },
                    { id: "Education", name: "Education" },
                    { id: "Childcare", name: "Childcare" },
                    { id: "Classes", name: "Classes" },
                    { id: "Activities", name: "Activities" },
                    { id: "Photography", name: "Photography" },
                    { id: "Sports", name: "Sports" },
                    { id: "Music", name: "Music" },
                    { id: "Artists", name: "Artists" }
                ]
            }
        ];
    };
    HeaderComponent.prototype.showCityDropdown = function () {
        this.showCityMenu = true;
    };
    HeaderComponent.prototype.hideCityDropdown = function () {
        this.showCityMenu = false;
    };
    HeaderComponent.prototype.toggleDropdown = function (active) {
        this.activeMenu = active;
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            providers: [country_service_1.CountryService]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
