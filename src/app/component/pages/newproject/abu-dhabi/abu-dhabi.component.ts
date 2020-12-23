import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
@Component({
  selector: 'app-abu-dhabi',
  templateUrl: './abu-dhabi.component.html',
  styleUrls: ['./abu-dhabi.component.css']
})
export class AbuDhabiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/s.jpg", title: "Golf Views", city: "Dubai, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/1.jpg", title: "Sweden Palaces Luxury Villas", city: "Dubai, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/3.jpg", title: "Seven Palm", city: "Dubai, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/4.jpg", title: "Hera Tower", city: "Dubai, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/5.jpg", title: "The Floating Seahorse Villas", city: "Dubai, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
  ]
}
