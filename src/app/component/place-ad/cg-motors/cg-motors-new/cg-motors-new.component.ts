import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cg-motors-new',
  templateUrl: './cg-motors-new.component.html',
  styleUrls: ['./cg-motors-new.component.css']
})
export class CgMotorsNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(var i = 1921; i < 2021; i++)
    {
      this.yearArr.push(i);
    }
  }

  activePage:string = "feature";
  gotoNextPage(nextPage: string){
    this.activePage = nextPage;
  } 

  lat = 22.2736308;
  lng = 70.7512555;

  yearArr: any[] = [];
  seller_typeArr: any[] = [
    { value: "owner", name: "Owner" },
    { value: "dealer", name: "Dealer" },
    { value: "certified", name: "Dealership/Certified Pre-Owned" }
  ];
  drive_systemArr: any[] = [
    { value: "belt", name: "Belt" },
    { value: "chain", name: "Chain" },
    { value: "shaft", name: "Shaft" },
    { value: "not_apply", name: "Does not apply" }
  ];
  wheelArr: any[] = [
    { value: "2w", name: "2 Wheel" },
    { value: "3w", name: "3 Wheel" },
    { value: "4w", name: "4 Wheel" }
  ];
  manufactureArr: any[] = [
    { value: "845", name: "Access Motor" },
    { value: "835", name: "Aprillia" },
    { value: "846", name: "Asiawing" },
    { value: "285", name: "Bajaj" },
    { value: "844", name: "Benelli" },
    { value: "283", name: "BMW" },
    { value: "834", name: "Buell" },
    { value: "842", name: "Can-am" },
    { value: "279", name: "Ducati" },
    { value: "840", name: "Gas Gas" },
    { value: "277", name: "Harley Davidson" },
    { value: "284", name: "Honda" },
    { value: "839", name: "Husaberg" },
    { value: "833", name: "Husqvarna" },
    { value: "287", name: "Indian" },
    { value: "280", name: "Kawasaki" },
    { value: "286", name: "KTM" },
    { value: "836", name: "Moto Guzzi" },
    { value: "838", name: "MV Agusta" },
    { value: "837", name: "Norton" },
    { value: "843", name: "Polaris" },
    { value: "832", name: "Royal Enfield" },
    { value: "281", name: "Suzuki" },
    { value: "282", name: "Triumph" },
    { value: "841", name: "Vespa" },
    { value: "288", name: "Victory" },
    { value: "278", name: "Yamaha" },
    { value: "289", name: "Other" }
  ];
 engine_sizeArr:any[] = [
  {value : "290", name: "Less than 250cc"},
  {value : "291", name: "250cc - 499cc"},
  {value : "292", name: "500cc - 599cc"},
  {value : "293", name: "600cc - 749cc"},
  {value : "294", name: "750cc - 999cc"},
  {value : "295", name: "1,000cc or more"},
  {value : "831", name: "Does not apply"}
 ];
  warrantyArr:any[] = [
    {value: "yes", name: "Yes"},
    {value: "no", name: "No"},
    {value: "not_apply", name: "Does not apply"}
  ];

}
