import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CommonModelModule { 

  cityName: string;
  id: number;
  constructor(cityName:string, id: number){
    this.cityName = cityName;
    this.id = id;
  }
}
