import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharjah',
  templateUrl: './sharjah.component.html',
  styleUrls: ['./sharjah.component.css']
})
export class SharjahComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Sharjah/7.jpg", title: "Golf Views", city: "sharjah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/1.jpg", title: "Sweden Palaces Luxury Villas", city: "sharjah, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/2.jpg", title: "Casablanca Villas", city: "sharjah, Akoya Oxygen", price: "1,680,000 AED", SqFt:"2300 SqFt", bedrooms:"4 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/3.jpg", title: "Seven Palm", city: "sharjah, The Palm Jumeirah", price: "649,888 AED", SqFt:"307-1664 SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Sharjah/4.jpg", title: "Hera Tower", city: "sharjah, The Heart of Europe", price: "20,000,000 AED", SqFt:"340 SqFt-Studio", bedrooms:""},
    ]
}
