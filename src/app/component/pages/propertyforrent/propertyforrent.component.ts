import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyforrent',
  templateUrl: './propertyforrent.component.html',
  styleUrls: ['./propertyforrent.component.scss']
})
export class PropertyforrentComponent implements OnInit {
  
  public Popular_slides = [
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/commercial.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/apartment.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/monthly-short.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/multiple-units.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/daily-short.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/rooms.jpg"},
    {src: "./../../../../assets/Image/propertyforrent/carousel/popular/villa.jpg"}
  ];

  public Featured_slides = [
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (1).webp", price: "55,000 AED", title: "3BHK Near Al Markhaniya...", property: "3Bed.4Bath.1,500 SqFt", name: "Al Bateen", days: "3"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (2).webp", price: "33,000 AED", title: "BRAND NEW!! Elegant...", property: "2 Beds . 2 Baths . 786 SqFt", name: "Al Hili", days: "6"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (3).webp", price: "60,000 AED", title: "Private entrance 3 Bedr...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Qattara", days: "9"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (4).webp", price: "50,000 AED", title: "Brand New with Securit...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Mutawaa", days: "14"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (5).webp", price: "40,000 AED", title: "Centralize AC|Facilities|...", property: "2 Beds. 3 Baths . 1,185 SqFt", name: "Al Batten", days: "2"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image.jpg", price: "33,000 AED", title: "BRAND NEW!! Elegant...", property: "2 Beds . 2 Baths . 786 SqFt", name: "Al Hili", days: "6"},
    {src: "../../../../assets/Image/propertyforrent/carousel/feature/image (3).webp", price: "60,000 AED", title: "Private entrance 3 Bedr...", property: "3 Beds . 3 Baths . 1,500 SqFt", name: "Al Qattara", days: "9"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
