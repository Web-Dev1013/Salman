import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-estate-rent',
  templateUrl: './cg-estate-rent.component.html',
  styleUrls: ['./cg-estate-rent.component.css']
})
export class CgEstateRentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toggle_dropdown: string = "";
  showDropdown(dropdown_id:string) {
    this.toggle_dropdown = dropdown_id;
  }
  hideDropdown() {
    this.toggle_dropdown = "";
  }


  p_rentArr:any[] = [
    {id: "residential_rent", name: "Residential Units for Rent", subItem:[
      {id: "villa_rent", name: "Villa/House for Rent"},
      {id: "apartment_rent", name: "Apartment/Flat for Rent"}
    ]},
    {id: "commercial_rent", name: "Commercial for Rent", subItem:[
      {id: "industrial_rent", name: "Industrial for Rent"},
      {id: "office_rent", name: "Office for Rent"},
      {id: "retail_rent", name: "Retail for Rent"},
      {id: "staff Accomm for Rent"}
    ]},
    {id: "rooms_rent", name: "Rooms for rent (flatmates)", subItem:[
      {id: "apartment_rooms_rent", name: "Apartment/Flat for Rent"},
      {id: "villa_rooms_rent", name: "Villa/House for Rent"}
    ]},
    {id: "monthly_rent", name: "Short Term (Monthly)", subItem:[
      {id: "apartment_monthly_rent", name: "Apartment/Flat for Rent"},
      {id: "villa_monthly_rent", name: "Villa/House for Rent"}
    ]},
    {id: "daily_rent", name: "Short Term (Daily)", subItem:[      
      {id: "apartment_daily_rent", name: "Apartment/Flat for Rent"},
      {id: "villa_daily_rent", name: "Villa/House for Rent"}
    ]},
  ]

}
