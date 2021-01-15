import { Component, OnInit } from '@angular/core';
import { EstateData } from './estate-detail.model';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.css']
})
export class EstateDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showPhoneNum: boolean = false;
  hidePhoneNum : boolean = true;
  showPhoneNumber(){
    this.showPhoneNum = true;
    this.hidePhoneNum = false;
  }
  
  lat = 22.2736308;
  lng = 70.7512555;

  estateData = new EstateData("205-VI-S-0084", ["UAE", "Dubai", "The Villa", "Ponderosa"], "Upgraded Mallorca | 6BR villa | Extended Patio", "6,500,000", "../../../../assets/Image/propertyforrent/promoted-detail/Patriot_small_logo_2.jpg", "Dar Al Aqar Real Estate LLC", 11887, 677330, 6, 7, "8,400", "no", "Sale", "Agent", "Damac Properties", "January 7th, 2021", [
      "../../../../assets/Image/propertyforrent/estate-detail/image (1).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (2).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (3).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (4).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (5).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (6).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (7).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (8).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (9).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (10).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image (14).webp",
      "../../../../assets/Image/propertyforrent/estate-detail/image.webp"
    ],
    [
      "Maids Room", "View of Landmark", "View of Water"
    ],
    "This is the section of description", "+971-55-2313432");
}

