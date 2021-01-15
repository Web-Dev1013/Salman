import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorModel } from './motor.model';
@Component({
  selector: 'app-motors',
  templateUrl: './motors.component.html',
  styleUrls: ['./motors.component.css']
})
export class MotorsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    console.log("+++++++")
  }

  public gotoCommonDetails(url:any, id:any) {
    this.router.navigate([url, id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  public gotoProductDetails(url:any, id:any) {
    this.router.navigate([url, id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  CommonArr: MotorModel[] = [
    new MotorModel("usedCar", "USED CARS FOR SALE", 250),
    new MotorModel("motorcycle", "MOTORCYCLES", 114),
    new MotorModel("accessories", "AUTO ACCESSORIES & PARTS", 176),
    new MotorModel("heavyVehicles", "HEAVY VEHICLES", 81),
    new MotorModel("boats", "BOATS", 2),
    new MotorModel("numberPlates", "NUMBER PLATES", 10),
  ]

  FeaturedArr: any[] = [
    {id: 15, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
    {id: 16, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" },
    {id: 17, src: "../../../../assets/Image/motors/cars/car3.webp", price: "225,000", title: "2019 Ford Expedition Platinum", property: "Year:2011.KM:76,000", name: "Al Mutarad", time: "19 hours" },
    {id: 18, src: "../../../../assets/Image/motors/cars/car4.webp", price: "AED 155,000", title: "s500", property: "Year:2016.KM:151,000", name: "Al Ain", time: "19 hours" }
  ]

  LatestNewsArr: any[] = [
    {id: 19, src: "../../../../assets/Image/motors/cars/car2.webp", title: "A unique Range Stormer makes...", date: "Aug.11.2020" },
    {id: 20, src: "../../../../assets/Image/motors/cars/car3.webp", title: "A complete overview of electric...", date: "Aug.9.2020" },
    {id: 21, src: "../../../../assets/Image/motors/cars/car4.webp", title: "how to transfer the ownership of...", date: "Aug.9.2020" },
    {id: 22, src: "../../../../assets/Image/motors/cars/car5.webp", title: "5 things you didn't know about V...", date: "July.26.2020" },
  ]
}
