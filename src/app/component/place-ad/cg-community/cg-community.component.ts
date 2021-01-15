import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-community',
  templateUrl: './cg-community.component.html',
  styleUrls: ['./cg-community.component.css']
})
export class CgCommunityComponent implements OnInit {

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

  communityArr:any[] = [
    {id: "services", name: "Services", subItem: [
      {id: "maids", name: "Maids"},
      {id: "movers_removals", name: "Movers/Removals"},
      {id: "general_maintenance", name: "General Maintenance"},
      {id: "nannies", name: "Nannies"},
      {id: "electronic_repair", name: "Electronic Repair"},
      {id: "IT_repair", name: "IT Repair"},
      {id: "painters", name: "Painters"},
      {id: "plumbers", name: "Plumbers"},
      {id: "gardeners", name: "Gardeners"},
      {id: "mechanics", name: "Mechanics"},
      {id: "other_services", name: "Other Services"}
    ]},
    {id: "car_lift", name: "Car Lift"},
    {id: "freelancers", name: "Freelancers"},
    {id: "domestic", name: "Domestic"},
    {id: "education", name: "Education"},
    {id: "childcare", name: "Childcare"},
    {id: "classes", name: "Classes"},
    {id: "activities", name: "Activities"},
    {id: "photography", name: "Photography"},
    {id: "sports", name: "Sports"},
    {id: "music", name: "Music"},
    {id: "artists", name: "Artists"}
  ]
}
