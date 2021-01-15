import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.css']
})
export class PickCategoryComponent implements OnInit {

  constructor() { }

  categories:any;
  showJobItem: boolean = true;
  hideJobItem: boolean = false;

  ngOnInit(): void {
    this.categories = [
      {name: "Property for Sale", icon_src: "../../../../assets/icon/icon-p4s.svg", id: "cg_estate_sale"},
      {name: "Property for Rent", icon_src: "../../../../assets/icon/icon-p4r.svg", id: "cg_estate_rent"},
      {name: "Community", icon_src: "../../../../assets/icon/icon-community.svg", id: "cg_community"},
      {name: "Classifieds", icon_src: "../../../../assets/icon/icon-classified.svg", id: "cg_classified"}
    ]
  }

  toggleJobItem(){
    this.showJobItem = false;
    this.hideJobItem = true;
  }
}
