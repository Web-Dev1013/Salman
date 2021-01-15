import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cg-job-hire',
  templateUrl: './cg-job-hire.component.html',
  styleUrls: ['./cg-job-hire.component.css']
})
export class CgJobHireComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

    });
   }

  ngOnInit(): void {
  }

  activePage:string = "require_item"
  gotoNextPage(nextPage: string){
    this.activePage = nextPage;
  }

  lat = 22.2736308;
  lng = 70.7512555;
  commonSelectArr: any[] = [
    {
      id: "career_level", name: "Career Level", options: [
        { id: "student_intern", name: "Student/Intern" },
        { id: "junior", name: "Junior" },
        { id: "mid_level", name: "Mid-level" },
        { id: "senior", name: "Senior" },
        { id: "manager", name: "Manager" },
        { id: "executive_director", name: "Executive/Director" }
      ]
    },
    {
      id: "employment_type", name: "Employment Type", options: [
        { id: "full_time", name: "Full Time" },
        { id: "part_time", name: "Part Time" },
        { id: "contract", name: "Contract" },
        { id: "temporary", name: "Temporary" },
        { id: "other_emp_type", name: "Other" },
      ]
    },
    {
      id: "min_exp", name: "Minium Experience", options: [
        { id: "zero_one", name: "0-1 Years" },
        { id: "one_two", name: "1-2 Years" },
        { id: "two_five", name: "2-5 Years" },
        { id: "five-ten", name: "5-10 Years" },
        { id: "ten-fifteen", name: "10-15 Years" },
        { id: "more_fifteen", name: "15+ Years" },
      ]
    },
    {
      id: "min_education", name: "Minium Education", options: [
        { id: "n_a", name: "N/A" },
        { id: "high_secondary", name: "High-School/Secondary" },
        { id: "bachelors", name: "Bachelors Degree" },
        { id: "masters", name: "Masters Degree" },
        { id: "phd", name: "PhD" }
      ]
    },
  ];

  salaryArr:any[] = [
    {id: "unspecified", salary: "Unspecified"},
    {id: "0_1999", salary: "0 - 1,999"},
    {id: "2000_3999", salary: "2000 - 3,999"},
    {id: "4000_5999", salary: "4000 - 5,999"},
    {id: "6000_1999", salary: "6000 - 7,999"},
    {id: "8000_11999", salary: "8000 - 11,999"},
    {id: "12000_19999", salary: "12000 - 19,999"},
    {id: "20000_29999", salary: "20000 - 29,999"},
    {id: "30000_49999", salary: "30000 - 49,999"},
    {id: "50000_99999", salary: "50000 - 99,999"},
    {id: "100000+", salary: "100,000+"}
  ]

  companySizeArr:any[] = [
    {id: "1_10", name: "1-10"},
    {id: "11_50", name: "11-50"},
    {id: "51_200", name: "51-200"},
    {id: "201_500", name: "201-500"},
    {id: "501_1000", name: "501-1000"},
    {id: "1001_5000", name: "1001-5000"},
    {id: "5001_10000", name: "5001-10000"},
    {id: "10000+", name: "10000+"},
  ]
}
