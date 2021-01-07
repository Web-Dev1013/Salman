import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-propertyforrent',
  templateUrl: './propertyforrent.component.html',
  styleUrls: ['./propertyforrent.component.scss']
})
export class PropertyforrentComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public gotoProductDetail(url:any, id:any){
    this.router.navigate([url, id]).then((e) => {
      if(e){
        console.log("success");
      }else{
        console.log("warning");
      }
    });
  }

  public Popular_slides = [
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/commercial.jpg",id: 1},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/apartment.jpg",id: 2},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/monthly-short.jpg",id: 3},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/multiple-units.jpg",id: 4},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/daily-short.jpg",id: 5},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/rooms.jpg",id: 6},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/villa.jpg",id: 7}
  ];

  public Featured_slides = [
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (1).webp",id: 1, price: "55,000 AED", title: "3BHK Near Al Markhaniya...", property: "3Bed.4Bath.1,500 SqFt", name: "Al Bateen", days: "3"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (2).webp",id: 2, price: "33,000 AED", title: "BRAND NEW!! Elegant...", property: "2 Beds . 2 Baths . 786 SqFt", name: "Al Hili", days: "6"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (3).webp",id: 3, price: "60,000 AED", title: "Private entrance 3 Bedr...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Qattara", days: "9"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (4).webp",id: 4, price: "50,000 AED", title: "Brand New with Securit...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Mutawaa", days: "14"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (5).webp",id: 5, price: "40,000 AED", title: "Centralize AC|Facilities|...", property: "2 Beds. 3 Baths . 1,185 SqFt", name: "Al Batten", days: "2"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image.jpg",id: 6, price: "33,000 AED", title: "BRAND NEW!! Elegant...", property: "2 Beds . 2 Baths . 786 SqFt", name: "Al Hili", days: "6"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (3).webp",id: 7, price: "60,000 AED", title: "Private entrance 3 Bedr...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Qattara", days: "9"}
  ]

}
