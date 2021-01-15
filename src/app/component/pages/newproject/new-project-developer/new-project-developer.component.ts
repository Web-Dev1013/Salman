import { Component, OnInit } from '@angular/core';
import { NewProjectDeveloperModel } from './new-project-developer.model'

@Component({
  selector: 'app-new-project-developer',
  templateUrl: './new-project-developer.component.html',
  styleUrls: ['./new-project-developer.component.css']
})
export class NewProjectDeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  developersArr:NewProjectDeveloperModel[] = [
    new NewProjectDeveloperModel(["Main", "Developers", "Dubai"], "Dubai", "../../../../../assets/Image/newproject/new-project-developer/master/bWdXN2xkd1NOZmdKWExjUUwwQjBTUkEvTkhZM1VhVzlMS1VJMFF5YzlianJIRG5qNnhLTDNDaDB3UXp2OTMxWXFMT3cxWk1KN29OWm93TWNDMnBMeTVlTEVNY0dhVzZRdzF6Zm1uNFFUeE03bzltR3hMd3ZPY.jpg", 2002, 11, "DAMAC Properties", "", [
      {id: 1, name: "Reva Residences", location: "Business Bay", price: "810,000", sqft: "474", bedrooms: "1", src: "../../../../../assets/Image/newproject/new-project-developer/UFhsTWxsWi9kbWZMWHJJQ2pSRTRxeHYyTXIwWVJhcjlmTkIrdUllWmYzL2JiZkhiOHBXK3BSQXBYUGtPQXFIOFJRWGM0SndQdGpzOGlhWDBPUDlqRWMxczVPbWNRb3FoZE9XY1F2OGo0VW89.png"},
      {id: 2, name: "Damac Towers", location: "Business Bay", price: "2,175,000", sqft: "2,145", bedrooms: "3", src: "../../../../../assets/Image/newproject/new-project-developer/UkFXNkhlVlZEcnBSS1lZdFRYK1VicFpCQkFpZy9abk0zUkVabFpKUzczclVzY1JrU3hJNTlwaDJMMlVhQm5hSkFKYWlMUEJjZ0xuNFV6ZW9ONkdNbzVNcmd1R0p4SC9WbzBVMWJtek9nU1RYTVVBa1VyLzJneUw1LzRa.jpg"},
      {id: 3, name: "Aknan Villas", location: "Dubai Land", price: "1,500,000", sqft: "1735", bedrooms: "3", src: "../../../../../assets/Image/newproject/new-project-developer/Z2V6a0dyTi9LNGZPNkJKNVBERlhOVzBobXVUMm9DeVowV2UyVW5aZy9aRW5KNXBVNVVSWmZUelM1TEs2NUhUOG4wamZGd3Z6R3FBRmozdGN5cGNEaFJmVkhUSkdlN09URno1enFyemtSVG5YZ1djY0pCV3UxNE42TXZt.jpg"}
    ]),
    new NewProjectDeveloperModel([], "Dubai", "../../../../../assets/Image/newproject/new-project-developer/master/djdLbVpKSithZmRpbGpvS2pyYTBLc28zQk05OGdLSUs5SnlvU2w2VW9mUFIxNkt1eE52UjNEckpwVjNpWG9lZw==.jpg", 2007, 17, "Azizi Developments", "", [
      {id: 4, name: "Azizi Mina", location: "The Palm Jumeirah", price: "2,100,000", sqft: "1225-1681", bedrooms:"1...2", src: "../../../../../assets/Image/newproject/new-project-developer/cDd0d0lTd0pOcmxha2xVMUZsdWp6L2FUK3hnNHJnMklMa04zdit5bnFKaUpNdkxhQWhCdXNVbVlBdGc4TU1hLzRHWDk2ZWRYSDFpaDJsZDVMY1FEUWNXTGExRzAwNVc2ZFRBUG5rWjFOY2s9.jpg"},
      {id: 5, name: "Royal Bay", location: "The Palm Jumeirah", price: "1,500,000", sqft: "829-1399", bedrooms:"1...2", src: "../../../../../assets/Image/newproject/new-project-developer/cUFlOGVTY25sSWtIZFBxelozL0Y4U2RNNnJlKzJINXdPMVZYSHdtZGNnSjhyRzVxS25Wc0hXTGR2WTgrd0M1dGRNdlZOOHR3L3BtMkZQSVI5UzE5ZEV2aklUdGZpR3VJZjdnVmhUU1U0K0U9.jpg"},
      {id: 6, name: "Azizi Riviera", location: "Nohammed Bin Rashid Al...", price: "803,000", sqft: "400-957", bedrooms:"1...3", src: "../../../../../assets/Image/newproject/new-project-developer/SEdmckxzT1RkU1BOc2NOWVJIYVp5REJ1R2NMMU50WDZlZWNFRGJiSGdqdXg4NVRIVGVtUStJU0hWdlFPdlIwRElCNEZFMmYzL2xyZU5VdStzcWF3b1JUODJLaGk5UlJQRk9lRWw3dHRwUk1UWUFYQWljRDlNZ1p2aEVl.jpg"}      
    ]) 
  ]

  CitiesArr:any[] = [
    { id: "AllCities", name: "All Cities", amount: "292" },
    { id: "Dubai", name: "Dubai", amount: "252" },
    { id: "Sharjah", name: "Sharjah", amount: "24" },
    { id: "AbuDhabi", name: "Abu Dhabi", amount: "11" },
    { id: "Fujairah", name: "Fujairah", amount: "2" },
    { id: "AlAin", name: "Al Ain", amount: "1" },
    { id: "Khaimah", name: "Ras Al Khaimah", amount: "1" },
    { id: "Ajman", name: "Ajman", amount: "1" },
  ]
}
