import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcities',
  templateUrl: './allcities.component.html',
  styleUrls: ['./allcities.component.css']
})
export class AllcitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Sharjah/7.jpg", title: "Golf Views", city: "sharjah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/1.jpg", title: "Sweden Palaces Luxury Villas", city: "sharjah, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/2.jpg", title: "Casablanca Villas", city: "sharjah, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/3.jpg", title: "Seven Palm", city: "sharjah, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/4.jpg", title: "Hera Tower", city: "sharjah, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/Ras Al Khaimah/1.jpg", title: "Golf Views", city: "Ras Al Khaimah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Fujairah/1.jpg", title: "Golf Views", city: "Fujairah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Fujairah/2.jpg", title: "Sweden Palaces Luxury Villas", city: "Fujairah, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/Al Ain/1.jpg", title: "Golf Views", city: "Al Ain, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/003.jpg", title: "Golf Views", city: "ajman, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/1.jpg", title: "Sweden Palaces Luxury Villas", city: "ajman, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/2.jpg", title: "Casablanca Villas", city: "ajman, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/3.jpg", title: "Seven Palm", city: "ajman, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/4.jpg", title: "Hera Tower", city: "ajman, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/5.jpg", title: "The Floating Seahorse Villas", city: "ajman, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/6.jpg", title: "Dezire Residences", city: "ajman, JVC Jumeirah Village Circle", price: "200,000", SqFt:"384-760 SqFt-Studio", bedrooms:"1 bedrooms"},
    {src:"../../../../../assets/Image/newproject/7.jpg", title: "Royal Park", city: "ajman, Jumeirah Park", price: "3,099,000 AED", SqFt:"2900SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/s.jpg", title: "Golf Views", city: "Dubai, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/1.jpg", title: "Sweden Palaces Luxury Villas", city: "Dubai, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/3.jpg", title: "Seven Palm", city: "Dubai, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/4.jpg", title: "Hera Tower", city: "Dubai, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/Abu Dhabi/5.jpg", title: "The Floating Seahorse Villas", city: "Dubai, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/003.jpg", title: "Golf Views", city: "Dubai, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/1.jpg", title: "Sweden Palaces Luxury Villas", city: "Dubai, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/2.jpg", title: "Casablanca Villas", city: "Dubai, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/3.jpg", title: "Seven Palm", city: "Dubai, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/4.jpg", title: "Hera Tower", city: "Dubai, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/dubai/5.jpg", title: "The Floating Seahorse Villas", city: "Dubai, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/6.jpg", title: "Dezire Residences", city: "Dubai, JVC Jumeirah Village Circle", price: "200,000", SqFt:"384-760 SqFt-Studio", bedrooms:"1 bedrooms"},
    {src:"../../../../../assets/Image/newproject/dubai/7.jpg", title: "Royal Park", city: "Dubai, Jumeirah Park", price: "3,099,000 AED", SqFt:"2900SqFt", bedrooms:"4 bedrooms"}

 ]

}
