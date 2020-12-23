import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ras-al-khaimah',
  templateUrl: './ras-al-khaimah.component.html',
  styleUrls: ['./ras-al-khaimah.component.css']
})
export class RasAlKhaimahComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Ras Al Khaimah/1.jpg", title: "Golf Views", city: "Ras Al Khaimah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
   ]
}
