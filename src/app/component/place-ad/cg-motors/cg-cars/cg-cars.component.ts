import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-cars',
  templateUrl: './cg-cars.component.html',
  styleUrls: ['./cg-cars.component.css']
})
export class CgCarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  type:string = "";
  sell_type(type:string){
    this.type = type;
    console.log(this.type)
  }
}
