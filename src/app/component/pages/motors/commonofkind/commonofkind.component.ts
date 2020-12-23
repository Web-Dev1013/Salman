import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commonofkind',
  templateUrl: './commonofkind.component.html',
  styleUrls: ['./commonofkind.component.css']
})
export class CommonofkindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
  }
  
  AllCitiesArr: any[] = ["All Cities", "Dubai", "Abu Dhabi", "Ras al Khaimah", "Sharjah", "Fujairah", "Ajman", "Umm al Quwain", "Al Ain"]
  SideNavListArr: any[] = ["All of Dubizzle", "Motors", "Classifieds", "Property For Sale", "Property For Rent", "Job", "Job Wanted", "Community"]
  MerchandiseListArr: any[] = ["All Categories", "Used Cars for Sale", "Motorcycles", "Auto Accessories &amp; Parts", "Heavy Vehicles", "Boats", "Number Plates"]
  CarListArr: any[] = ["All Makes", "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BAIC", "BMW", "BYD", "Bentley", "Bizzarrini", "Borgward", "Brilliance", "Bufori", "Bugatti", "Buick", "CMC", "Cadillac", "Caterham", "Changan", "Chery", "Chevrolet", "Chrysler", "Citroen", "DFSK", "Daewoo", "Daihatsu", "Datsun", "DeLorean", "Dodge", "DongFeng", "Dorcen", "Equus", "Fenyr", "Ferrari", "Fiat", "Fisker", "Force", "Ford", "Foton", "GAC", "GAC Gonow", "GMC","Geely", "Grand Tiger", "Great Wall", "Gumpert", "Haval", "Honda", "Hongqi", "Hummer", "Hyundai", "Infiniti"]
  TimeListArr: any[] = ["Any Time", "Today", "Within 3 Days", "Within 1 Week", "Within 2 Weeks", "Within 1 Month", "Within 3 Month", "Within 6 Month"]
  // AgeListArr: any[] = ["", "Brand New", "Less than 1 month", "Less than 6 month", "Less than 1 year", "Less than 2 year", "Less than 5 year", "Less than 10 year"]
  // ConditionListArr: any[] = ["", "Flawless", "Exellent or Better", "Good or Better", "Average or better", "Poor or better"]
  // UsageListArr: any[] = ["", "Never Used", "Used Once or less", "Light Usage or less", "Normal Usage or less", "Heavy Usage or less"]
  SellerTypeArr: any[] = ["All Types", "Owner", "Dealer", "Dealership/Certified Pre-Owned"]
  BadgesArr: any[] = ["Full Service History", "Negotiable", "Under Warranty", "Urgent"]
  BodyTypeArr: any[] = ["Coupe", "Crossover", "Hard Top Convertible", "Hatchback", "Pick Up Truck", "Sedan", "Soft Top Convertible", "Sports Car", "SUV", "Utility Truck", "Van", "Wagon", "Other"]
  DoorsArr: any[] = ["2", "3", "4", "5+"]
  NoOfCylindersArr: any[] = ["3", "4", "5", "6", "8", "10", "12"]
  TechnicalFeaturesArr: any[] = ["4 Wheel Drive", "All Wheel Drive", "All Wheel Steering", "Anti-Lock Brakes/ABS", "Cruise Control", "Dual Exhaust", "Front Airbags", "Front Wheel Drive", "N2O System", "Power Steering", "Rear Wheel Drive", "Side Airbags", "Tiptronic Gears"]
  ExtrasArr: any[] = ["Air Conditioning", "Alarm/Anti-Theft System", "AM/FM Radio", "Aux Audio in", "Bluetooth System", "Body Kit", "Brush Guard", "Cassette Player", "CD player", "Fog Lights", "Heat", "Heated Seats", "Keyless Entry", "Keyless Start", "Leather Seats", "Moonroof", "Navigation System", "Off-Road Tyres", "Parking Sensors", "Performance Tyres", "Power Locks", "Power Mirrors", "Power Seats", "Power Sunroof", "Power Windows", "Premium Lights", "Premium Paint", "Premium Sound System", "Premium Wheels/Rims", "Racing Seats", "Satellite Radio", "Spoiler", "VHS Player", "Winch"]
  HorsepowerArr:any[] = ["Less than 150", "150-200", "200-300", "300-400", "400-500", "500-600", "600-700", "700-800", "800-900", "900+"]
  TransmissionTypeArr: any[] = ["Manual", "Automatic"]
  ColorArr: any[] = ["Black", "Blue", "Brown", "Burgundy", "Gold", "Grey", "Orange", "Green", "Purple", "Red", "Silver", "Tan", "Tea", "White", "Yellow", "Other Color"]
  WarrantyArr: any[] = ["Yes", "No", "Does not apply"]
  FuelTypeArr: any[] = ["Gasoline", "Diesel", "Hybrid", "Electric"]
  RegionalSpecsArr: any[] = ["European Specs", "GCC Specs", "Japanese Specs", "North American Specs", "Other"]
  
}
