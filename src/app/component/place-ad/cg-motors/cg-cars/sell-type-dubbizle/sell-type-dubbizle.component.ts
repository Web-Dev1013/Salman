import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sell-type-dubbizle',
  templateUrl: './sell-type-dubbizle.component.html',
  styleUrls: ['./sell-type-dubbizle.component.css']
})
export class SellTypeDubbizleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  other_detail: boolean = false;
  payment: boolean = false;
  activePage: string = "car_detail";
  gotoNextPage(next: string) {
    this.activePage = next;
    switch (next) {
      case "other_detail":
        this.other_detail = true;
        break;
      case "payment":
        this.payment = true;
        break;

    }
  }

  car_detailArr: any[] = [
    {
      id: "Emirate", lists: [
        { name: "Abu Dhabi" },
        { name: "Ajman" },
        { name: "Al Ain" },
        { name: "Dubai" },
        { name: "Fujairah" },
        { name: "Ras al Khaimah" },
        { name: "Sharjah" },
        { name: "Umm al Quwain" }
      ]
    },
    {
      id: "Make", lists: [
        { name: "Acura" },
        { name: "Alfa Romeo" },
        { name: "Aston Martin" },
        { name: "Audi" },
        { name: "BAIC" },
        { name: "Bentley" },
        { name: "Bizzarrini" },
        { name: "BMW" },
        { name: "Borgward" },
        { name: "Brilliance" },
        { name: "Bufori" },
        { name: "Bugatti" },
        { name: "Buick" },
        { name: "BYD" },
        { name: "Cadillac" },
        { name: "Caterham" },
        { name: "Changan" },
        { name: "Chery" },
        { name: "Chevrolet" },
        { name: "Chrysler" },
        { name: "Citroen" },
        { name: "CMC" },
        { name: "Daewoo" },
        { name: "Daihatsu" },
        { name: "Datsun" },
        { name: "DeLorean" },
        { name: "DFSK" },
        { name: "Dodge" },
        { name: "DongFeng" },
        { name: "Dorcen" },
        { name: "Equus" },
        { name: "Fenyr" },
        { name: "Ferrari" },
        { name: "Fiat" },
        { name: "Fisker" },
        { name: "Force" },
        { name: "Ford" },
        { name: "Foton" },
        { name: "GAC" },
        { name: "GAC Gonow" },
        { name: "Geely" },
        { name: "GMC" },
        { name: "Grand Tiger" },
        { name: "Great Wall" },
        { name: "Gumpert" },
        { name: "Haval" },
        { name: "Honda" },
        { name: "Hongqi" },
        { name: "Hummer" },
        { name: "Hyundai" },
        { name: "Infiniti" },
        { name: "Isuzu" },
        { name: "JAC" },
        { name: "Jaguar" },
        { name: "Jeep" },
        { name: "Jinbei" },
        { name: "JMC" },
        { name: "Kia" },
        { name: "Koenigsegg" },
        { name: "KTM" },
        { name: "Lada" },
        { name: "Lamborghini" },
        { name: "Lancia" },
        { name: "Land Rover" },
        { name: "Lexus" },
        { name: "Lincoln" },
        { name: "Lotus" },
        { name: "Luxgen" },
        { name: "Mahindra" },
        { name: "Maserati" },
        { name: "Maxus" },
        { name: "Maybach" },
        { name: "Mazda" },
        { name: "McLaren" },
        { name: "Mercedes-Benz" },
        { name: "Mercury" },
      ]
    },
    {
      id: "Model", lists: [
        { name: "Cygnet" },
        { name: "DB10" },
        { name: "DB11" },
        { name: "DB7" },
        { name: "DB9" },
        { name: "DBS" },
        { name: "Lagonda" },
        { name: "One-77" },
        { name: "Other" },
        { name: "Rapide" },
        { name: "Vanquish" },
        { name: "Vantage" },
        { name: "Virage" },
        { name: "Vulcan" },
        { name: "Zagato" }
      ]
    },
    {
      id: "Trim", lists: [
        { name: "Other" }
      ]
    }
  ]

}
