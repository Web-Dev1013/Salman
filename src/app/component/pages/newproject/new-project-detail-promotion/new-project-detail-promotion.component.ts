import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project-detail-promotion',
  templateUrl: './new-project-detail-promotion.component.html',
  styleUrls: ['./new-project-detail-promotion.component.css']
})
export class NewProjectDetailPromotionComponent implements OnInit {

  constructor() { }

  toggle_select_type:boolean = false;

  ngOnInit(): void {
  }

  show_select_type(){
    this.toggle_select_type = true;
  }
  hide_select_type(){
    this.toggle_select_type = false;
  }
}
