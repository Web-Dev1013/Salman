import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dubai',
  templateUrl: './dubai.component.html',
  styleUrls: ['./dubai.component.css']
})
export class DubaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/dubai/003.jpg", title: "Golf Views", city: "Dubai, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/1.jpg", title: "Sweden Palaces Luxury Villas", city: "Dubai, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/2.jpg", title: "Casablanca Villas", city: "Dubai, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/3.jpg", title: "Seven Palm", city: "Dubai, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/4.jpg", title: "Hera Tower", city: "Dubai, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/dubai/5.jpg", title: "The Floating Seahorse Villas", city: "Dubai, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/6.jpg", title: "Dezire Residences", city: "Dubai, JVC Jumeirah Village Circle", price: "200,000", SqFt:"384-760 SqFt-Studio", bedrooms:"1 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/7.jpg", title: "Royal Park", city: "Dubai, Jumeirah Park", price: "3,099,000 AED", SqFt:"2900SqFt", bedrooms:"4 bedrooms"}  ]

}
