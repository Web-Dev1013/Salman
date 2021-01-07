import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  OnInit() {
  }
  // public gotoProductsList(url:any, id:any){
  //   this.router.navigate([url, id]).then((e) =>{
  //     if(e){
  //       console.log("success");
  //     }else{
  //       console.log("warning");
  //     }
  //   });
  // }

  // public gotoProductDetail(url: any, id: any){
  //   console.log(url, id);
  //   this.router.navigate([url, id]).then((e) => {
  //     if(e){
  //       console.log("success");
  //     }else{
  //       console.log("warning");
  //     }
  //   });
  // }

  CitiesArr:any[] = [
    {link: "Allcities", name: "All Cities(UAE)"},
    {link: "AbuDhabi", name: "Abu Dhabi"},
    {link: "Ajman", name: "Ajman"},
    {link: "AlAin", name: "Al Ain"},
    {link: "Dubai", name: "Dubai"},
    {link: "Fujairah", name: "Fujairah"},
    {link: "RasAlKhaimah", name: "Ras Al Khaimah"},
    {link: "Sharjah", name: "Sharjah"},
    {link: "UmmAlQuwain", name: "Umm Al Quwain"}
  ]

  jobArr:any[] = [
    {link: "Accounting", name: "Accounting"},
    {link: "ArcInt", name: "Architecture & Interior Design"},
    {link: "Automotive", name: "Automotive"}, 
    {link: "Beauty", name: "Beauty"},
    {link: "BusinDev", name: "Business Development"}, 
    {link: "Construction", name: "Construction"}, 
    {link: "CustomServ", name: "Customer Service"}, 
    {link: "Education", name: "Education"}, 
    {link: "Engineering", name: "Engineering"}, 
    {link: "Fashion", name: "Fashion"},
    {link: "FoodBev", name: "Food & Beverages"}, 
    {link: "GraphicDesign", name: "Graphic Design"}, 
    {link: "HosRes", name: "Hospitality & Restaurants"},
    {link: "HHRec", name: "HR & Recruitment"}, 
    {link: "IndusManu", name: "Industrial & Manufacturing"}, 
    {link: "InfoTech", name: "Information Technology"}, 
    {link: "Internet", name: "Internet"}, 
    {link: "LegalServ", name: "Legal Services"}, 
    {link: "LogDis", name: "Logistics & Distribution"}, 
    {link: "MarkAdvert", name: "Marketing & Advertising"}, 
    {link: "Media", name: "Media"}, 
    {link: "MedicalHealth", name: "Medical & Healthcare"}, 
    {link: "OnlineMedia", name: "Online Media"}, 
    {link: "RealEstate", name: "Real Estate"}, 
    {link: "RetailConsum", name: "Retail & Consumer Goods"}, 
    {link: "SafeSecu", name: "Safety & Security"}, 
    {link: "Sales", name: "Sales"}, 
    {link: "Secretarial", name: "Secretarial"}, 
    {link: "SportsFit", name: "Sports & Fitness"}, 
    {link: "Transport", name: "Transportation"}, 
    {link: "TravelTour", name: "Travel & Tourism"}, 
    {link: "Wanted", name: "Jobs Wanted"} ];

  communityArr:any[] = [
    {link: "Services", name: "Services"},
    {link: "CarLift", name: "Car Lift"},
    {link: "Freelancers", name: "Freelancers"},
    {link: "Domestic", name: "Domestic"},
    {link: "Education", name: "Education"},
    {link: "Childcare", name: "Childcare"},
    {link: "Classes", name: "Classes"},
    {link: "Activities", name: "Activities"},
    {link: "Photography", name: "Photography"},
    {link: "Sports", name: "Sports"},
    {link: "Music", name: "Music"},
    {link: "Artists", name: "Artists"}
  ];
// Mobiles & Tablets Array
  MobileTabletArr:any[] = [
    {link: "MobilePhone", name: "Mobile Phones", child: [
      {link: "Acer", name: "Acer"},
      {link: "Alcatel", name: "Alcatel"},
      {link: "AppleiPhone", name: "Apple iPhone"},
      {link: "Asus", name: "Asus"},
      {link: "Blackberry", name: "Blackberry"},
      {link: "CAT", name: "CAT"},
      {link: "CECT", name: "CECT"},
      {link: "Google", name: "Google"},
      {link: "HTC", name: "HTC"},
      {link: "HewPack", name: "Hewlett Packard"},
      {link: "Huawei", name: "Huawei"},
      {link: "LG", name: "LG"},
      {link: "Lava", name: "Lava"},
      {link: "Lenovo", name: "Lenovo"},
      {link: "Meizu", name: "Meizu"},
      {link: "Motorola", name: "Motorola"},
      {link: "Nokia", name: "Nokia"},
      {link: "OnePlus", name: "OnePlus"},
      {link: "Oppo", name: "Oppo"},
      {link: "Palm", name: "Palm"}
    ]
  },
    {link: "PhoneTablet", name: "Mobile Phone & Tablet Accessories", child: [
      {link: "Batteries", name: "Batteries"},
      {link: "CableAdapter", name: "Cables & Adapters"},
      {link: "CarKits", name: "Car Kits"},
      {link: "CaseSleeve", name: "Cases & Sleeves"},
      {link: "Chargers", name: "Chargers"},
      {link: "GimbalStick", name: "Gimbals & Selfie Sticks"},
      {link: "Headsets", name: "Headsets"},
      {link: "Other", name: "Other"}
    ]},
    {link: "Tablets", name: "Tablets", child: [
      {link: "Apple", name: "Apple"},
      {link: "Dell", name: "Dell"},
      {link: "Franklin", name: "Franklin"},
      {link: "HPCompaq", name: "HP/Compaq"},
      {link: "HTC", name: "HTC"},
      {link: "Handspring", name: "Handspring"},
      {link: "Huawei", name: "Huawei"},
      {link: "Lenovo", name: "Lenovo"},
      {link: "Palm", name: "Palm"},
      {link: "RIM", name: "RIM"},
      {link: "Samsung", name: "Samsung"},
      {link: "Sharp", name: "Sharp"},
      {link: "Sony", name: "Sony"},
      {link: "Symbol", name: "Symbol"},
      {link: "Wintouch", name: "Wintouch"},
      {link: "iMate", name: "iMate"}
    ]},
    {link: "OtherMobileTablet", name: "Other Mobile Phones & Tablets", child:[
      {link: "otherMobileTablet", name: "View All"}
    ]}
  ]

// Mobiles & Tablets Array End

// Furniture Array
  FurnitureGardenArr:any[] = [
    {link: "Furniture", name: "Furniture", child: [
      {link: "ArmoWardrobe", name: "Armoires & Wardrobes"},
      {link: "BedSet", name: "Beds & Bed Sets"},
      {link: "Bookcases", name: "Bookcases"},
      {link: "CabCup", name: "Cabinets & Cupboards"},
      {link: "ChairBench", name: "Chairs, Benches & Stools"},
      {link: "ChildFurniture", name: "Childrens Furniture"},
      {link: "DiningSets", name: "Dining Sets"},
      {link: "DressVan", name: "Dressers & Vanities"},
      {link: "EntCenter", name: "Entertainment Centers"},
      {link: "KitCart", name: "Kitchen Islands & Carts",},
      {link: "Nightstands", name: "Nightstands"},
      {link: "Office", name: "Office Furniture"},
      {link: "SofaFuton", name: "Sofas, Futons & Lounges"},
      {link: "Tables", name: "Tables"},
      {link: "Other", name: "Other"}
    ]},
    {link: "HomeAcc", name: "Home Accessories", child:[
      {link: "Bath", name: "Bath Accessories"},
      {link: "Bed", name: "Bedding & Bed Accessories"},
      {link: "Garden", name: "Garden Decor & Accessories"},
      {link: "HomeAccents", name: "Home Decor & Accents"},
      {link: "Housekeeping", name: "Housekeeping"},
      {link: "KitDining", name: "Kitchen & Dining"},
      {link: "Other", name: "Other"}
    ]},
    {link: "GardenOutdoor", name: "Garden & Outdoor", child:[
      {link: "Accessories", name: "Garden Accessories"},
      {link: "Decor", name: "Garden Decor"},
      {link: "Furniture", name: "Garden Furniture"},
      {link: "StructureFen", name: "Garden Structures & Fences"},
      {link: "JacPool", name: "Jacuzzis & Pools"},
      {link: "Plants", name: "Plants"},
      {link: "Other", name: "Other"}
    ]},
    {link: "LightingFan", name: "Lighting & Fans", child:[
      {link: "CeilingFan", name: "Ceiling Fans"},
      {link: "Lamps", name: "Lamps"},
      {link: "Fixture", name: "Light Fixtures"},
      {link: "StandFan", name: "Stand Fans"}
    ]},
    {link: "RugCarpet", name: "Rugs & Carpets", child:[
      {link: "AbModern", name: "Abstract/Modern"},
      {link: "AmimalSkin", name: "Animal Skin"},
      {link: "Asian", name: "Asian"},
      {link: "Children", name: "Children"},
      {link: "EClassical", name: "European/Classical"},
      {link: "MEIndian", name: "Middle Eartern/Indian"},
      {link: "SolidColor", name: "Solid Color"},
      {link: "Other", name: "Other"}
    ]},
    {link: "CurtainBlind", name: "Curtains & Blinds", child: [
      {link: "CurDrape", name: "Curtains & Drapes"},
      {link: "FabBlind", name: "Fabric Blinds"},
      {link: "WooPlastic", name: "Wooden/Plastic Blinds"},
      {link: "Other", name: "Other"}
    ]},
    {link: "ToolHome", name: "Tools & Home Improvement", child:[
      {link: "HandTool", name: "Hand Tools"},
      {link: "Hardware", name: "Hardware"},
      {link: "ElectAir", name: "Plumbing, Electrical & Air"},
      {link: "PowerTool", name: "Power Tools"}
    ]}
  ]
// Furniture Array End

// Classifieds Array 
  ClassifiedArr:any[] = [
    {link: "Electronics", name: "Electronics", child: [
      {link: "AudioTurn", name: "Home Audio & Turntables"},
      {link: "TV", name: "Televisions"},
      {link: "Theater", name: "DVD & Home Theater"},
      {link: "ElectroAcc", name: "Electronic Accessories"},
      {link: "Gadgets", name: "Gadgets"},
      {link: "CarElectro", name: "Car Electronics"},
      {link: "Mp3Audio", name: "MP3 Players and Portable Audio"},
      {link: "SateCableTV", name: "Satellite & Cable TV"},
      {link: "HealthElectro", name: "Health Electronics"},
      {link: "SmartHome", name: "Smart Home"},
      {link: "WearableTech", name: "Wearable Technology"},
      {link: "Other", name: "Other"}
    ]},
    {link: "ComNetworking", name: "Computer & Networking", child: [
      {link: "Com", name: "Computers"},
      {link: "ComComp", name: "Computer Components"},
      {link: "Accessories", name: "Accessories"},
      {link: "NetComm", name: "Networking & Communication"},
      {link: "Software", name: "Software"},
      {link: "MPOther", name: "Monitor, Printers & Other Peripherals"}
    ]},
    {link: "BusinIndust", name: "Business & Industrial", child: [
      {link: "ForSale", name: "Businesses for Sale"},
      {link: "Construction", name: "Construction"},
      {link: "FoodBev", name: "Food Beverage"},
      {link: "IndustSup", name: "Industrial Supplies"},
      {link: "OfficeEquip", name: "Office Furniture & Equipment"},
      {link: "Manufacturing", name: "Manufacturing"},
      {link: "ElectEquip", name: "Electrical Equipment"},
      {link: "RetailServ", name: "Retail & Services"},
      {link: "HealthLab", name: "Healthcare & Lab"},
      {link: "PrintCopy", name: "Commercial Printing & Copy Machines "},
      {link: "PackShip", name: "Packing & Shipping"},
      {link: "AgForestry", name: "Agriculture & Forestry"},
      {link: "Other", name: "Other"}
    ]},
    {link: "HomeApp", name: "Home Appliances", child: [
      {link: "AppGoods", name: "Large Appliances/White Goods"},
      {link: "kitApp", name: "Small Kitchen Appliances"},
      {link: "OutdoorApp", name: "Outdoor Appliances"},
      {link: "BathroomApp", name: "Small Bathroom APPliances"},
      {link: "IronSewing", name: "Irons & Sewing Machines"},
      {link: "VaccumFloor", name: "Vaccums & Floor Care"},
      {link: "Other", name: "Other"}
    ]},
    {link: "SportsEquip", name: "Sports Equipment", child: [
      {link: "Cycling", name: "Cycling"},
      {link: "ExeEquip", name: "Exercise Equipment"},
      {link: "WaterSports", name: "Water Sports"},
      {link: "CampHik", name: "Camping & Hiking"},
      {link: "Golf", name: "Golf"},
      {link: "IndoorSports", name: "Indoor Sports"},
      {link: "TeamSports", name: "Team Sports"},
      {link: "TennisRacquet", name: "Tennis & Racquet Sports"},
      {link: "WinterSports", name: "Winter Sports"},
      {link: "Other", name: "Other"}
    ]},
    {link: "ClothAcc", name: "Clothing & Accessories", child: [
      {link: "ShoeFoot", name: "Shoes/Footwear"},
      {link: "Clothing", name: "Clothing"},
      {link: "HandBagWallet", name: "Handbags, Bags & Wallets"},
      {link: "MenAcc", name: "Men\'s Accessories"},
      {link: "WomenAcc", name: "Women\'s Accessories"},
      {link: "Luggage", name: "Luggage"},
      {link: "Fragrance", name: "Fragrances"},
      {link: "WedApparel", name: "Welling Apparel"},
      {link: "CoUnifrom", name: "Costumes & Uniforms"},
      {link: "VintageHigh", name: "Vintage & Highend Cothing"},
      {link: "MakeSkin", name: "Make up & Skin Care"}
    ]},
    {link: "CameraImg", name: "Cameras & Imaging", child: [
      {link: "DigitCam", name: "Digital Cameras"},
      {link: "LenFilter", name: "Lenses, Filters & Lighting"},
      {link: "ProEquip", name: "Professional Equipment"},
      {link: "CameraAcc", name: "Camera Accessories"},
      {link: "TripStand", name: "Tripods & Stands"},
      {link: "Camcorders", name: "CAmcorders"},
      {link: "FilmCam", name: "Film Cameras"},
      {link: "BinoTel", name: "Binoculars/Telescopes"},
      {link: "CamcorderAcc", name: "CAmcorder Accessories"},
      {link: "CamDrones", name: "CamDrones"}
    ]},
    {link: "JeWatch", name: "Jewelry & Watches", child: [
      {link: "Watches", name: "Watches"},
      {link: "WomenJew", name: "Women\'s Jewelry"},
      {link: "MenJew", name: "Men\'s Jewelry"},
      {link: "DiamGem", name: "Loose Diamonds & Gems"},
      {link: "Other", name: "Other"}
    ]},
    {link: "Pets", name: "Pets", child: [
      {link: "FreeAdopion", name: "Pets for Free Adoption"},
      {link: "PetAcc", name: "Pet Accessories"},
      {link: "LostFond", name: "Lost & Found Pets"}
    ]},
    {link: "Musical", name: "Musical Instruments", child: [
      {link: "Guitars", name: "Guitars"},
      {link: "PianosKey", name: "Pianos, Keyboards & Organs"},
      {link: "Percussion", name: "Percussion"},
      {link: "StrInst", name: "String Instruments"},
      {link: "WindInst", name: "Wind Instruments"},
      {link: "DJRecEquip", name: "DJ & Recording Equipment"},
      {link: "Other", name: "Other"}
    ]},
    {link: "Gaming", name: "Gaming", child: [
      {link: "GamingSys", name: "Gaming Systems"},
      {link: "VideoGames", name: "VideoGames"},
      {link: "GamingAcc", name: "Gaming Accessories"}
    ]},
    {link: "Baby", name: "Baby Items", child: [
      {link: "StrollerCar", name: "Strollers & Car Seats"},
      {link: "NurseryAcc", name: "Nursery Furniture & Accessories"},
      {link: "BabyGear", name: "Baby Gear"},
      {link: "BabyToys", name: "Baby Toys"},
      {link: "Feeding", name: "Feeding"},
      {link: "SafeHealth", name: "Safety & Health"},
      {link: "BathDiaper", name: "Bath & Diapers"}
    ]},
    {link: "Toy", name: "Toys", child: [
      {link: "ElectRemote", name: "Electronic & Remote Control Toys"},
      {link: "ActionToy", name: "Action Figures & Toy Vehicles"},
      {link: "OutdoorStrut", name: "Outdoor Toys & Structures"},
      {link: "Hobbies", name: "Hobbies"},
      {link: "PlayToys", name: "Pretend Play & Preschool Toys"},
      {link: "EduToys", name: "Educational Toys"},
      {link: "DollStuff", name: "Dolls & Stuffed Animals"},
      {link: "GamePuzzle", name: "Games & Puzzles"},
      {link: "ClassicVintage", name: "Classic & Vintage Toys"},
      {link: "BuildingToys", name: "Building Toys"},
      {link: "Other", name: "Other"}
    ]},
    {link: "TicVoucher", name: "Tickets & Vouchers", child: [
      {link: "Concerts", name: "Concerts"},
      {link: "SportEvents", name: "Sporting Events"},
      {link: "Travel", name: "Travel"},
      {link: "Events", name: "Events"},
      {link: "Movies", name: "Movies"},
      {link: "Theater", name: "Theater"},
      {link: "ActAttr", name: "Activities & Attractions"},
      {link: "VouchGift", name: "Vouchers & Gift Cards"},
      {link: "Other", name: "Other"}
    ]},
    {link: "Collectible", name: "Collectibles", child: [
      {link: "Antiques", name: "Antiques"},
      {link: "Art", name: "Art"},
      {link: "Decorations", name: "Decorations"},
      {link: "PensWriting", name: "Pens & Writing Instruments"},
      {link: "Memorabilia", name: "Memorabilia"},
      {link: "RocksArtifacts", name: "Rocks/Fossils/Artifacts"},
      {link: "Other", name: "Other"}
    ]},
    {link: "Book", name: "Books", child: [
      {link: "Textbooks", name: "Textbooks"},
      {link: "Nonfiction", name: "Nonfiction"},
      {link: "Fiction", name: "Fiction"},
      {link: "ChildBooks", name: "Children\'s Books"},
      {link: "BookAcc", name: "Book Accessories"},
      {link: "DEbooks", name: "Digital/E-books"},
      {link: "Audiobooks", name: "Audiobooks"}
    ]},
    {link: "Music", name: "Music", child: [
      {link: "Vinyl", name: "Vinyl"},
      {link: "CDs", name: "CDs"},
      {link: "Casettes", name: "Casettes"},
      {link: "Digital", name: "Digital"}
    ]},
    {link: "FreeStuff", name: "Free Stuff", child: [
      {link: "FHGarden", name: "Furniture, Home & Garden"},
      {link: "HomeApp", name: "Home Appliances"},
      {link: "Baby", name: "Baby Items"},
      {link: "Electronics", name: "Electronics"},
      {link: "ClothingAcc", name: "Clothing & Accessories"},
      {link: "Books", name: "Books"},
      {link: "SportsEquip", name: "Sports Equipment"},
      {link: "Other", name: "Other"},
    ]},
    {link: "LostFound", name: "Lost/Found", child: [
      {link: "Lost", name: "Lost"},
      {link: "Found", name: "Found"}
    ]
  },
    {link: "DVD", name: "DVDs & Movies", child: [
      {link: "DVD", name: "DVD"},
      {link: "Digital", name: "Digital"},
      {link: "VHS", name: "VHS"},
      {link: "OtherFormats", name: "Other Formats"}
    ]}
  ]

// Classifieds Array End

// Property New Project
  NewProjectArr:any[] = [
    {link: "Apartment" , name: "Apartment New Projects"},
    {link: "Villa" , name: "Villa New Projects"},
    {link: "Townhouse" , name: "Townhouse New Projects"}
  ]

// Property for Sale
  PropertyForSaleArr:any[] = [
    {link: "Apartment" , name: "Apartment for Sale"},
    {link: "VillaHouse" , name: "Villa/House for Sale"},
    {link: "Commercial" , name: "Commercial for Sale"},
    {link: "Multiple" , name: "Multiple Units for Sale"},
    {link: "Land" , name: "Land for Sale"}
  ]
// Property for Rent
  PropertyForRentArr: any[] = [
    {link: "Apartment/Flat" , name: "Apartment/Flat for Rent"},
    {link: "VillaHouse" , name: "Villa/House for Rent"},
    {link: "Commercial" , name: "Commercial for Rent"},
    {link: "Rooms" , name: "Rooms for Rent"},
    {link: "Monthly" , name: "Short Term (Monthly)"},
    {link: "Daily" , name: "Short Term (Daily)"}
  ]

// Motors
  MotorsArr:any[] = [
    {id: "usedCar" , name: "Used Cars for Sale", child:[
      {id: "Acura" , name: "Acura"},
      {id: "AlfaRomeo" , name: "Alfa Romeo"},
      {id: "AstonMartin" , name: "Aston Martin"},
      {id: "Audi" , name: "Audi"},
      {id: "BAIC" , name: "BAIC"},
      {id: "BMW" , name: "BMW"},
      {id: "BYD" , name: "BYD"},
      {id: "Bentley" , name: "Bentley"},
      {id: "Bizzarrini" , name: "Bizzarrini"},
      {id: "Borgward" , name: "Borgward"},
      {id: "Brilliance" , name: "Brilliance"},
      {id: "Bufori" , name: "Bufori"},
      {id: "Bugatti" , name: "Bugatti"},
      {id: "Buick" , name: "Buick"},
      {id: "CMC" , name: "CMC"},
      {id: "Cadilac" , name: "Cadilac"},
      {id: "Caterham" , name: "Caterham"},
      {id: "Changan" , name: "Changan"},
      {id: "Chery" , name: "Chery"},
      {id: "Chevrolet" , name: "Chevrolet"}
    ]},
    {id: "motorcycle" , name: "Motorcycles", child:[
      {id: "usedCar", name: "Sport Bike"},
      {id: "boats", name: "Adventure/Touring"},
      {id: "motorcycle", name: "Cruiser/Chopper"},
      {id: "OffRoad", name: "Off-Road"},
      {id: "Scooter", name: "Scooter"},
      {id: "StandCommuter", name: "Standard/Commuter"},
      {id: "CafeRacer", name: "Cafe Racer"},
      {id: "Trike", name: "Trike"},
      {id: "Trailer", name: "Trailer"},
      {id: "Karting", name: "Karting"},
      {id: "MoPed", name: "Mo-Ped"},
      {id: "Other", name: "Other"}
    ]},
    {id: "accessories" , name: "Auto Accessories & Parts", child:[
      {id: "CarPart", name: "Car/4&times;4 Parts"},
      {id: "AppMerAcc", name: "Apparel, Merchandise & Accessories"},
      {id: "MotorcyclePart", name: "MotorCycle Parts"},
      {id: "AutoMotiveTool", name: "Automotive Tools"},
      {id: "BoatPart", name: "Boat Parts"},
      {id: "NumPlate", name: "Number Plates"},
      {id: "OtherVehiclePart", name: "Other Vehicle Parts"}
    ]},
    {id: "heavyVehicles" , name: "Heavy Vehicles", child:[
      {id: "Truck", name: "Trucks"},
      {id: "Buses", name: "Buses"},
      {id: "Forklift", name: "Forklifts"},
      {id: "Trailer", name: "Trailers"},
      {id: "Crane", name: "Cranes"},
      {id: "Tanker", name: "Tankers"},
      {id: "PartEngine", name: "Parts & Engines"},
      {id: "OtherHeavyVehicle", name: "Other Heavy Vehicle"}
    ]},
    {id: "boats" , name: "Boats", child: [
      {id: "Motorboat", name: "Motorboats"},
      {id: "Sailboat", name: "Sailboats"},
      {id: "RowPaddle", name: "Row/Paddle Boats"}
    ]},
    {id: "numberPlates" , name: "Number Plates", child:[
      {id: "Dubai", name: "Dubai Plate"},
      {id: "AbuDhabi", name: "Abu Dhabi Plate"},
      {id: "Sharjah", name: "Sharjah Plate"},
      {id: "Ajman", name: "Ajman Plate"},
      {id: "Fujairah", name: "Fujairah Plate"},
      {id: "UmmAlQuwain", name: "Umm Al Quwain Plate"},
      {id: "RasAlKhaimah", name: "Ras Al Khaimah Plate"}
    ]},
    {id: "" , name: "Export Cars", child:[
      {id: "ExportCar", name: "View All"}
    ]}
  ]

}
