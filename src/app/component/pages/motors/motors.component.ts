import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  KindOfCarsArr:any[] = [
    {kind:"USED CARS FOR SALE", amount:"250", id: "usedCar"},
    {kind:"MOTORCYCLES", amount:"114", id: "motorcycle"},
    {kind:"AUTO ACCESSORIES & PARTS", amount:"176", id: "accessories"},
    {kind:"HEAVY VEHICLES", amount:"81", id: "heavyVehicles"},
    {kind:"BOATS", amount:"2", id : "boats"},
    {kind:"NUMBER PLATES", amount:"10", id : "numberPlates"}
  ]

  FeaturedArr:any[] = [
    {src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min"},
    {src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours"},
    {src: "../../../../assets/Image/motors/cars/car3.webp", price: "225,000", title: "2019 Ford Expedition Platinum", property: "Year:2011.KM:76,000", name: "Al Mutarad", time: "19 hours"},
    {src: "../../../../assets/Image/motors/cars/car4.webp", price: "AED 155,000", title: "s500", property: "Year:2016.KM:151,000", name: "Al Ain", time: "19 hours"}
  ]

  LatestNewsArr:any[] = [
    {src: "../../../../assets/Image/motors/cars/car2.webp", title: "A unique Range Stormer makes...", date: "Aug.11.2020"},
    {src: "../../../../assets/Image/motors/cars/car3.webp", title: "A complete overview of electric...", date: "Aug.9.2020"},
    {src: "../../../../assets/Image/motors/cars/car4.webp", title: "how to transfer the ownership of...", date: "Aug.9.2020"},
    {src: "../../../../assets/Image/motors/cars/car5.webp", title: "5 things you didn't know about V...", date: "July.26.2020"},
  ]
}
