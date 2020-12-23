import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-al-ain',
  templateUrl: './al-ain.component.html',
  styleUrls: ['./al-ain.component.css']
})
export class AlAinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Al Ain/1.jpg", title: "Golf Views", city: "Al Ain, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
  ]
  }
