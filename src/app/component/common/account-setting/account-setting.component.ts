import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInfo:any = {id:"", name: "Star", password: "ddddddd", email: "Ilyaivanov19951013@gmail.com", phone: "55 1234 5678"};

}
