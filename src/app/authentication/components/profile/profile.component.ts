import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
declare const App;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showUserData = {
    "fname": localStorage.getItem("fname"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "username": localStorage.getItem("username"),
    "type": localStorage.getItem("type"),
   

  }

  constructor() { }

  ngOnInit() {
    App.LoadPage();
  }
  AppUrl= AppUrl;
  AuthUrl= AuthUrl;
}
