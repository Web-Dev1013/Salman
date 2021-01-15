import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NewProjectModel } from "../newproject.model"; 

@Component({
  selector: 'app-newproject',
  templateUrl: './new-project-detail-list.component.html',
  styleUrls: ['./new-project-detail-list.component.css']
})
export class NewProjectDetailListComponent implements OnInit {
  title = 'appBootstrap';
  closeResult: string = "";
  constructor(private modalService: NgbModal) { 
  }
  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

// State value for modal
  showDialog = false;
// ///////////////
// When click select Project, Change name of dropdown button.
  ProjectName:string = "New Projects";
  select(event:any, Projects:any){
    console.log(Projects.name);
    this.ProjectName = Projects.name;
  }
//////////////
projectsArr:NewProjectModel[] = [
  new NewProjectModel(1, "../../../../../assets/Image/newproject/dubai/003.jpg", "Golf Views", "Dubai, JLT Jumeirah Lake Towers", "400,888 AED", "384-1516SqFt-Studio",3),
  new NewProjectModel(2, "../../../../../assets/Image/newproject/dubai/1.jpg", "Sweden Palaces Luxury Villas", "Dubai, The World", "80,000,000 AED", "21168 SqFt", 5),
  new NewProjectModel(3, "../../../../../assets/Image/newproject/dubai/2.jpg", "Casablanca Villas", "Dubai, Akoya Oxygen", "1,680,000 AED", "2300 SqFt", 4),
  new NewProjectModel(4, "../../../../../assets/Image/newproject/dubai/3.jpg", "Seven Palm", "Dubai, The Palm Jumeirah", "649,888 AED", "307-1664 SqFt-Studio", 3),
  new NewProjectModel(5, "../../../../../assets/Image/newproject/dubai/4.jpg", "Hera Tower", "Dubai, The Heart of Europe", "20,000,000 AED", "340 SqFt-Studio", 3),
  new NewProjectModel(6, "../../../../../assets/Image/newproject/dubai/5.jpg", "The Floating Seahorse Villas", "Dubai, The Heart of Europe", "20,000,000", "4004SqFt", 4),
  new NewProjectModel(7, "../../../../../assets/Image/newproject/dubai/6.jpg", "Dezire Residences", "Dubai, JVC Jumeirah Village Circle", "200,000", "384-760 SqFt-Studio", 1),
  new NewProjectModel(8, "../../../../../assets/Image/newproject/dubai/7.jpg", "Royal Park", "Dubai, Jumeirah Park", "3,099,000 AED", "2900SqFt", 4)  
]

  NewProjectArr: any[] = [
    { id: 1, name: "Dubai Projects(252)" },
    { id: 2, name: "Sharjah Projects(24)" },
    { id: 3, name: "Abu Dhabi Projects(11)" },
    { id: 4, name: "Fujalrah Projects(2)" },
    { id: 5, name: "Al Ain Projects(1)" },
    { id: 6, name: "Ras Al Khaimah Projects(1)" },
    { id: 7, name: "Ajman Projects(1)" }
  ]
/// Cities
    CityName:string = "All Cities";
    SelectCity(City:any){
      this.CityName = City;
    }
    CitiesArr:any[] = [
        { link: "AllCities", name: "All Cities", amount: "292" },
        { link: "Dubai", name: "Dubai", amount: "252" },
        { link: "Sharjah", name: "Sharjah", amount: "24" },
        { link: "AbuDhabi", name: "Abu Dhabi", amount: "11" },
        { link: "Fujairah", name: "Fujairah", amount: "2" },
        { link: "AlAin", name: "Al Ain", amount: "1" },
        { link: "Khaimah", name: "Ras Al Khaimah", amount: "1" },
        { link: "Ajman", name: "Ajman", amount: "1" },
      ]
/// Neighborhoods   
    Neighborhood:string = "Neighborhoods";
    SelectNeighborhood(Neighborhood:any){
      this.Neighborhood = Neighborhood;
    }
    NeighborhoodsArr:any[] = [
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
      ]
 //// Bedrooms
    BedroomName:string = "Bedrooms";
    SelectBedroom(Bedroom:any){
      this.BedroomName = Bedroom;
    }
      BedroomsArr:any[] = [
      {name: "All"},
      {name: "Studio"},
      {name: "1Bedroom"},
      {name: "2Bedrooms"},
      {name: "3Bedrooms"},
      {name: "4Bedrooms"},
      {name: "5+Bedrooms"}
      ]
///Price From
    PriceFromName:string = "Price from";
    SelectPriceFrom(PriceFrom:any){
      this.PriceFromName = PriceFrom;
    }
      PriceFromArr:any[] = [
      {name: "250,000 AED"},
      {name: "500,000 AED"},
      {name: "1,000,000 AED"},
      {name: "2,000,000 AED"},
      {name: "4,000,000 AED"},
      {name: "5,000,000 AED"},
      {name: "10,000,000 AED"},
      {name: "20,000,000 AED"},
      {name: "30,000,000 AED"},
      {name: "40,000,000 AED"},
      {name: "60,000,000 AED"}
      ]
      
///Price  To
    PriceToName:string = "Price to";
    SelectPriceTo(PriceTo:any){
      this.PriceToName = PriceTo;
    }
      PriceToArr:any[] = [
      {name: "250,000 AED"},
      {name: "500,000 AED"},
      {name: "1,000,000 AED"},
      {name: "2,000,000 AED"},
      {name: "4,000,000 AED"},
      {name: "5,000,000 AED"},
      {name: "10,000,000 AED"},
      {name: "20,000,000 AED"},
      {name: "30,000,000 AED"},
      {name: "40,000,000 AED"},
      {name: "60,000,000 AED"}
      ]
      
////Property
    PropertyTypeName:string = "Property type";
    SelectPropertyType(PropertyType:any){
      this.PropertyTypeName = PropertyType;
    }
    PropertyTypeArr:any[] = ["All", "Apartment", "Villa", "Townhouse"];

/// Developer
  DeveloperArr:any[] = [
    {src: "", name: "DAMAC properties"},
    {src: "", name: "Azizi Developments"},
    {src: "", name: "Arada"},
    {src: "", name: "Nshama"},
    {src: "", name: "Reportage Properties"},
    {src: "", name: "Tiger Group"},
    {src: "", name: "Binghatti Developers"},
    {src: "", name: "Omnlyat Group"},
    {src: "", name: "Kleindlenst Group"},
    {src: "", name: "MAG Lifestyle Development"},
    {src: "", name: "Dubai South"},
    {src: "", name: "IFA Hotels&Resorts"},
    {src: "", name: "Dubai Properties"},
    {src: "", name: "Meraas"},
    {src: "", name: "FAM Holding"},
    {src: "", name: "Danube Properties"},
    {src: "", name: "Ellington Properties"},
    {src: "", name: "Sobha Realty"},
    {src: "", name: "Deyaar"},
    {src: "", name: "Al Zahia"}
  ]
  Advanced_SizeArr:any[] = [
    {name: "250SqFt"},
    {name: "500SqFt"},
    {name: "1,000SqFt"},
    {name: "2,000SqFt"},
    {name: "3,000SqFt"},
    {name: "4,000SqFt"},
    {name: "5,000SqFt"},
    {name: "10,000SqFt"},
    {name: "15,000SqFt"},
    {name: "20,000SqFt"},
    {name: "25,000SqFt"},
    {name: "30,000SqFt"}
  ]

  Advanced_TypeArr:any[] = [
      {name: "All"},
      {name: "Simplex"},
      {name: "Duplex"},
      {name: "Loft"},
      {name: "Penthouse"}    
    ]
  Advanced_StatusArr:any[] = [
      {name: "All"},
      {name: "Under Construction"},
      {name: "Ready"},
      {name: "On-hold"}    
  ]
  CompletionArr: any[] = ["All", "Before 2018", "2018", "2019", "1Q 2020", "2Q 2020", "3Q 2020", "4Q 2020", "1Q 2021", "2Q 2021", "3Q 2021", "4Q 2021", "1Q 2022", "2Q 2022", "3Q 2022", "4Q 2022", "1Q 2023", "2Q 2023", "3Q 2023", "4Q 2023", "1Q 2024", "2Q 2024", "3Q 2024", "4Q 2024", "1Q 2025", "2Q 2025", "3Q 2025", "4Q 2025", "1Q 2026", "2Q 2026", "3Q 2026", "4Q 2026" ]

  ParkingTypeArr:any[] = ["All Parkings", "Overground", "Underground", "Covered"]

  BathroomsArr:any[] = ["All", "1", "2", "3", "4", "5+"]

  PricePerSqFtArr:any[] = ["250 AED", "500 AED", "750 AED", "1000 AED", "1250 AED", "1500 AED", "2000 AED", "3000 AED", "5000 AED"]

  AdvancedTagArr:any[] = ["24 Hour Security", "Balcony", "BBQ area", "Beach Access", "Book for under AED 60,000", "Central Air Conditioning", "Children's Play Area", "Children's Swimming Pool", "Cycle track", "Garage", "Gym", "Jogging track", "Marina View", "Parking", "Private garden", "Proximity to Cafes and Restaurants", "Retail Facilities", "Sea Views", "Spa or Sauna", "Swimming Pool", "Tennis courts", "Terrace"]

}