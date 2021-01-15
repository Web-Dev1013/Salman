import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute) {
  }
  activeCityName: string = "All cities";
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.activeCityName = params.id;
    });
  }

  public gotoProductDetails(url: any, id: any) {
    this.router.navigate([url, id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  selectedCityName: string = "All Cities";
  public selectedCity(SearchItem: any) {
    this.selectedCityName = SearchItem.item;
  }

  usedCar: string = "usedCar";
  motorcycle: string = "motorcycle";
  accessories: string = "accessories";
  vehicles: string = "vehicles";

  FeaturedArr: any[] = ["Dubai", [
    { id: 15, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
    { id: 16, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" },
    { id: 17, src: "../../../../assets/Image/motors/cars/car3.webp", price: "225,000", title: "2019 Ford Expedition Platinum", property: "Year:2011.KM:76,000", name: "Al Mutarad", time: "19 hours" },
    { id: 18, src: "../../../../assets/Image/motors/cars/car4.webp", price: "AED 155,000", title: "s500", property: "Year:2016.KM:151,000", name: "Al Ain", time: "19 hours" },
    { id: 34, src: "../../../../assets/Image/motors/cars/car5.webp", price: "AED 23,500", title: "Urjent SL 350 model 2007 Japan...", property: "Year:2007.KM:250.000", name: "Al jimi", time: "15min" },
    { id: 12, src: "../../../../assets/Image/motors/cars/car1.webp", price: "AED 10,000", title: "شيفر آفيو 2011 للبيع", property: "Year:2011.KM:76,600", name: "Al Ain", time: "2 hours" }
  ]]

  SearchItemsArr: any[] = [
    { id: 2, item: "All" },
    { id: 3, item: "Motors" },
    { id: 4, item: "Classified" },
    { id: 5, item: "Property for Rent" },
    { id: 6, item: "Property for Sale" },
    { id: 7, item: "Job" },
    { id: 8, item: "Community" }
  ]

}
