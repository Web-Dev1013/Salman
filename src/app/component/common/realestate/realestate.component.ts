import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-realestate',
  templateUrl: './realestate.component.html',
  styleUrls: ['./realestate.component.css']
})
export class RealestateComponent implements OnInit {

  constructor() { }

  state:boolean = false;
  ngOnInit(): void {
  }

  public ShowMore(){
    this.state = true;
  }

  public HideMore(){
    this.state = false;
  }
  CitiesArr:any[] = [
    {id: "Allcities", name: "All Cities(UAE)"},
    {id: "AbuDhabi", name: "Abu Dhabi"},
    {id: "Ajman", name: "Ajman"},
    {id: "AlAin", name: "Al Ain"},
    {id: "Dubai", name: "Dubai"},
    {id: "Fujairah", name: "Fujairah"},
    {id: "RasAlKhaimah", name: "Ras Al Khaimah"},
    {id: "Sharjah", name: "Sharjah"},
    {id: "UmmAlQuwain", name: "Umm Al Quwain"}
  ]

  PromotedImgArr:any[] = [
    {id: 1, price: "113,000", bed: "3 Beds", bath: "3 Baths", sqft: "3,458 SqFt", location: "DMC, DIC & KV Freezones", src: "../../../../assets/Image/propertyforrent/prometed/image.webp"},
    {id: 2, price: "120,000", bed: "3 Beds", bath: "3 Baths", sqft: "3,500 SqFt", location: "Jumeirah 3, Jumeirah", src: "../../../../assets/Image/propertyforrent/prometed/image (1).webp"},
    {id: 3, price: "160,000", bed: "3 Beds", bath: "3 Baths", sqft: "3,800 SqFt", location: "The Springs 6, The Springs", src: "../../../../assets/Image/propertyforrent/prometed/image (2).webp"}
  ]

  EstateDetailArr:any[]=[
    {id: 4, title: "4 Bedrooms, Double Storey Villa Near kite B...", price: "155,000", day: "7 days", bed: "4", bath: "3", sqft: "2800", location: "Umm Suqeim 1, Umm Suqeim", master: "../../../../assets/Image/propertyforrent/promoted-detail/Patriot_small_logo_2.jpg", img:[
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (1).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (2).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (3).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (4).webp"}
    ]},
    {id: 5, title: "MODERN LAYOUT !! PRIVATE POOL !! CONT...", price: "380,000", day: "7 days", bed: "5", bath: "7", sqft: "15,000", location: "JLT Jumeirah Lake Towers", master: "../../../../assets/Image/propertyforrent/promoted-detail/rsz_1asdasdasdasdasd.png", img:[
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image.jfif"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (5).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (6).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (7).webp"}
    ]},
    {id: 6, title: "FREE MAINTENANCE + MAIDS ROOM + SPA...", price: "138,000", day: "7 hours", bed: "4", bath: "5", sqft: "3,832", location: "Cedre Villas, Dubai Silicon Oasis", master: "../../../../assets/Image/propertyforrent/promoted-detail/Stone_House_Logo_Solid_Back_small_logo_002.png", img:[
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (8).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (9).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (10).webp"},
      {src: "../../../../assets/Image/propertyforrent/promoted-detail/image (11).webp"}
    ]},
  ]

}
