import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-motors',
  templateUrl: './cg-motors.component.html',
  styleUrls: ['./cg-motors.component.css']
})
export class CgMotorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  motorItemArr:any[] = [
    {id: "motorcycles", name: "Motorcycles"},
    {id: "accessories", name: "Auto Accessories & Parts"},
    {id: "vehicles", name: "Heavy Vehicles"},
    {id: "boats", name: "Boats"},
    {id: "num_plate", name: "Number Plates"}
  ]

}
