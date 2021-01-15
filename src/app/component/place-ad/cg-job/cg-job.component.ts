import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cg-job',
  templateUrl: './cg-job.component.html',
  styleUrls: ['./cg-job.component.css']
})
export class CgJobComponent implements OnInit {

  job_type:string = "hire";
  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => {
      this.job_type = params.id;
    })
  }

  ngOnInit(): void {
  }

    jobArr:any[] = [
      {id: "accounting", name: "Accounting"},
      {id: "architecture", name: "Architecture/Eng."},
      {id: "art_design", name: "Art/Design"},
      {id: "bank_finance", name: "Bank/Finance"},
      {id: "business", name: "Business Dev"},
      {id: "construction", name: "Construction"},
      {id: "consulting", name: "Consulting"},
      {id: "education", name: "Education"},
      {id: "executive", name: "Executive"},
      {id: "hospitality", name: "Hospitality"},
      {id: "hr_recruiting", name: "HR/Recruiting"},
      {id: "IT_telecom", name: "IT/Telecom"},
      {id: "marketing_pr", name: "Marketing/PR"},
      {id: "media", name: "Media"},
      {id: "medical_health", name: "Medical/Health"},
      {id: "oil_gas", name: "Oil/Gas"},
      {id: "retail", name: "Retail"},
      {id: "sales", name: "Sales"},
      {id: "secretarial", name: "Secretarial"},
      {id: "other_job", name: "Other"}
  ]

}
