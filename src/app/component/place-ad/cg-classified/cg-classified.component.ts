import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-classified',
  templateUrl: './cg-classified.component.html',
  styleUrls: ['./cg-classified.component.css']
})
export class CgClassifiedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  toggle_dropdown: string = "";
  showDropdown(dropdown_id:string) {
    this.toggle_dropdown = dropdown_id;
  }
  hideDropdown() {
    this.toggle_dropdown = "";
  }

  classifiedArr:any[] = [
    {id: "electronics", name: "Electronics"},
    {id: "com_net", name: "Computers & Networking"},
    {id: "business_industrial", name: "Business & Industrial"},
    {id: "home_app", name: "Home Appliances"},
    {id: "sports_equip", name: "Sports Equipment"},
    {id: "clothing_accessories", name: "Clothing & Accessories"},
    {id: "cameras_imaging", name: "Cameras & Imaging"},
    {id: "jewelry_watch", name: "Jewelry & Watches"},
    {id: "pets", name: "Pets"},
    {id: "musical_instrument", name: "Musical Instrument"},
    {id: "gaming", name: "Gaming"},
    {id: "baby_items", name: "Baby Items"},
    {id: "toys", name: "Toys"},
    {id: "tickets_vouchers", name: "Tickets & Vouchers"},
    {id: "collectibles", name: "Collectibles"},
    {id: "books", name: "Books"},
    {id: "music", name: "Music"},
    {id: "free_stuff", name: "Free Stuff"},
    {id: "lost_found", name: "Lost/Found"},
    {id: "DVD_movies", name: "DVDs & Movies"},
    {id: "fur_home_garden", name: "Furniture, Home & Garden"},
    {id: "phone_tablets", name: "Mobile Phones & Tablets"}
  ]

}
