import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fujairah',
  templateUrl: './fujairah.component.html',
  styleUrls: ['./fujairah.component.css']
})
export class FujairahComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectsArr:any[] = [
    {src:"../../../../../assets/Image/newproject/Fujairah/1.jpg", title: "Golf Views", city: "Fujairah, JLT Jumeirah Lake Towers", price: "400,888 AED", SqFt:"384-1516SqFt-Studio", bedrooms:"3 bedrooms"},
    {src:"../../../../../assets/Image/newproject/Fujairah/2.jpg", title: "Sweden Palaces Luxury Villas", city: "Fujairah, The World", price: "80,000,000 AED", SqFt:"21168 SqFt", bedrooms:"5+ bedrooms"}
   ]
}
