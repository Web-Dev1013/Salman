import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classified',
  templateUrl: './classified.component.html',
  styleUrls: ['./classified.component.css']
})
export class ClassifiedComponent implements OnInit {

  constructor() { }

  BannerArr: any[] = [
    { name: "ELECTRONICS", amount: "17,829", id: "usedCar" },
    { name: "COMPUTERS & NETWORKING", amount: "129", id: "motorcycle" },
    { name: "HOME APPLIANCES", amount: "17,829", id: "accessories" },
    { name: "SPORTS EQUIPMENTS", amount: "829", id: "boats" },
    { name: "FURNITURE, HOME & GARDEN", amount: "1,829", id: "vehicles" },
    { name: "MOBILE PHONES & TABLETS", amount: "7,829", id: "numberPlates" }
  ]

  FeaturedArr: any[] = [
    { id: "usedCar", src: "../../../../assets/Image/classified/feature/image (1).webp" },
    { id: "motorcycle", src: "../../../../assets/Image/classified/feature/image (3).webp" },
    { id: "accessories", src: "../../../../assets/Image/classified/feature/image (2).webp" },
    { id: "boats", src: "../../../../assets/Image/classified/feature/image (4).webp" },
    { id: "numberPlates", src: "../../../../assets/Image/classified/feature/image.webp" },
    { id: "vehicles", src: "../../../../assets/Image/classified/feature/image (2).webp" }];

  LatestNewsArr: any[] = [
    { id: "usedCar", src: "../../../../assets/Image/classified/news/Blog-02-360x240.jpg" },
    { id: "motorcycle", src: "../../../../assets/Image/classified/news/Blog-6-Aug-01-360x240.jpg" },
    { id: "accessories", src: "../../../../assets/Image/classified/news/Cover_Image-360x240.jpg" },
    { id: "boats", src: "../../../../assets/Image/classified/news/Image01-360x240.jpg" }
  ];
  ngOnInit(): void {
  }

}
