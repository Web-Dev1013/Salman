import { Component, OnInit } from '@angular/core';
import { NewProjectDetailModel } from './new-project-detail.model'

@Component({
  selector: 'app-new-project-detail',
  templateUrl: './new-project-detail.component.html',
  styleUrls: ['./new-project-detail.component.css']
})
export class NewProjectDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ProjectName:string = "New Projects";
  select(event:any, Projects:any){
    console.log(Projects.name);
    this.ProjectName = Projects.name;
  }

  NewProjectDetail = new NewProjectDetailModel(["Sharjah", "Al Khan", "Shoumous Properties", "Sharjah Garden City"],"2,800,000", "659", "../../../../assets/Image/propertyforrent/promoted-detail/rsz_1asdasdasdasdasd.png", "Sharjah Garden City", "Shoumous Properties", "Client Service Department", "+971 48 7589 87", "", "../../../../assets/Image/newproject/new-project-detail/djFiSFV4ZXVnZzNFMGFEYkhTNE5XcnVjeTBIaUVQVkViUHN3TFNOdGxyYWVRMnUzRTBRRjJiN3JrZHVXZmdIM0FnNTdWL3kyM0E0VnNnT2dlOFlLbXR3VHM0RmQxb0tWOWFUSFFJQVFmb2c9.jpg", 0, "Q4 2021", "20 March", "5+", "4250", [
    "../../../../assets/Image/newproject/new-project-detail/b1lQdUxKVlhRckJtNVNaV3puZTQwWHFDYUs1NzlhVUZUam85NEdjd2tERUFteFloZVJDaVVGNzBpa0JLWFJCRVdiMnkwQStwbGVWek0vNW5JM1RBV1lUTTVtNWRDZjBUcEJHL2NZQUorWmc9.jpg",
    "../../../../assets/Image/newproject/new-project-detail/bWtEK2hHTGhydUV1NHZvOEt1Qm94QXIwclpMc2pwTVBUYmsrYkUvbTRnUGVZR0FDTm5sNXFrU0ZpZnRXcVBrSUF0emQ0TGdPUWtXVlVEcWxRWGkzNHF3Zy9XL3puVElJMVdHT3dWUTlqZzQ9.jpg",
    "../../../../assets/Image/newproject/new-project-detail/eGhSaFU0UkJEMFB4WFJhY0VJL3hmelpuelBWcW5qaVdVRlFRa1FrNWIwZ1ViZnVUTVJhVXpQTEovNzlZVFBJMjZxZVZuV2dDNFRYZStyVHB4YzIxb1BJT2FtOXdsNXdNajd0MmU3c2MvSHc9.jpg",
    "../../../../assets/Image/newproject/new-project-detail/T2dxaVlmNW5Kb3FITVVKUUhtdVRCTDc0d3BOb01sV3ZMbFFCSktUNTNsYkZmMVNXWDFWRHhsejdwNlVMK2lFRU14ajNkbm5GUFJXaTlCWnQvcHVzRE1oRnUxWkVCK3l6cDJ2VXI5KzN1RzBYQjZrMCtkZ0xnN2hDcFdkTzh.jpg"
  ]); 

  NewProjectArr: any[] = [
    { id: 1, name: "Dubai Projects(252)" },
    { id: 2, name: "Sharjah Projects(24)" },
    { id: 3, name: "Abu Dhabi Projects(11)" },
    { id: 4, name: "Fujalrah Projects(2)" },
    { id: 5, name: "Al Ain Projects(1)" },
    { id: 6, name: "Ras Al Khaimah Projects(1)" },
    { id: 7, name: "Ajman Projects(1)" }
  ]

}
