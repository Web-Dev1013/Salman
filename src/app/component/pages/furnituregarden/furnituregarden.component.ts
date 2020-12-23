import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-furniture',
  templateUrl: './furnituregarden.component.html',
  styleUrls: ['./furnituregarden.component.css']
})
export class FurnituregardenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  AllCitiesArr: any[] = ["All Cities", "Dubai", "Abu Dhabi", "Ras al Khaimah", "Sharjah", "Fujairah", "Ajman", "Umm al Quwain", "Al Ain"]
  SideNavListArr: any[] = ["All of Dubizzle", "Motors", "Classifieds", "Property For Sale", "Property For Rent", "Job", "Job Wanted", "Community"]
  MerchandiseListArr: any[] = ["All Categories", "Accounting", "Architecture", "Art/Design", "Bank/Finance", "Business Dev", "Construction", "Consulting", "Education", "Executive", "Hospitality", "HR/Recruiting", "IT/Telecom", "Marketing/PR", "Media", "Medical/Health", "Oil/Gas", "Retail", "Sales", "Secretarial", "Other"]
  TimeListArr: any[] = ["", "Any Time", "Today", "Within 3 Days", "Within 1 Week", "Within 2 Weeks", "Within 1 Month", "Within 3 Month", "Within 6 Month"]
  AgeListArr: any[] = ["", "Brand New", "Less than 1 month", "Less than 6 month", "Less than 1 year", "Less than 2 year", "Less than 5 year", "Less than 10 year"]
  ConditionListArr: any[] = ["", "Flawless", "Exellent or Better", "Good or Better", "Average or better", "Poor or better"]
  UsageListArr: any[] = ["", "Never Used", "Used Once or less", "Light Usage or less", "Normal Usage or less", "Heavy Usage or less"]
  }
