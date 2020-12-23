import { Component } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor( public location: Location) {}
  title = 'salman';

  
  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'signup' || titlee === 'nucleoicons' || titlee.indexOf("propertynewproject/propertynewproject") > -1){
        return false;
    }
    else {
        return true;
    }
}

  hideHeader(){
    var newproject = this.location.prepareExternalUrl(this.location.path());
    newproject = newproject.slice(1);
    if(newproject.indexOf("propertynewproject/propertynewproject") > -1){
      return false;
    }
    else{
      return true;
    }
  } 

}
