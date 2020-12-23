import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajman',
  templateUrl: './ajman.component.html',
  styleUrls: ['./ajman.component.css']
})
export class AjmanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/003.jpg", title: "Golf Views", city: "ajman, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/1.jpg", title: "Sweden Palaces Luxury Villas", city: "ajman, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/2.jpg", title: "Casablanca Villas", city: "ajman, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/3.jpg", title: "Seven Palm", city: "ajman, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/4.jpg", title: "Hera Tower", city: "ajman, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    {src:"../../../../../assets/Image/newproject/5.jpg", title: "The Floating Seahorse Villas", city: "ajman, The Heart of Europe", price: "20,000,000", SqFt:"4004SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/6.jpg", title: "Dezire Residences", city: "ajman, JVC Jumeirah Village Circle", price: "200,000", SqFt:"384-760 SqFt-Studio", bedrooms:"1 bedrooms"},
    {src:"../../../../../assets/Image/newproject/7.jpg", title: "Royal Park", city: "ajman, Jumeirah Park", price: "3,099,000 AED", SqFt:"2900SqFt", bedrooms:"4 bedrooms"}  ]

}
