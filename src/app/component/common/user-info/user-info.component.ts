import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

    active = 1;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params=>{
      console.log(params.id)
      switch (params.id){
        case "my_profile":
          this.active = 1;
          break;
        case "my_ads":
          this.active = 2;
          break;
        case "my_favorites":
          this.active = 3;
          break;
        case "my_searches":
          this.active = 4;
          break;
      }
    });
  }

  mySearchesArr:any[] = [
    {id: "motors", name: "Motors", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "classified", name: "Classified", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "propertyforsale", name: "Property for Sale", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "propertyforrent", name: "Property for Rent", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "jobs", name: "Jobs", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "job_wanted", name: "Job Wanted", item: [
      {id: "", name: "Empty"},
    ]},
    {id: "community", name: "Community", item: [
      {id: "", name: "Empty"},
    ]},
  ]

}
