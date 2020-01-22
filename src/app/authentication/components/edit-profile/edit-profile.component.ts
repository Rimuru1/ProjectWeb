import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
declare const App;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  showUserData = {
    "ID": localStorage.getItem("ID"),
    "fname": localStorage.getItem("fname"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "username": localStorage.getItem("username"),
    "type": localStorage.getItem("type"),
   

  }

  constructor() { }

  ngOnInit() {
  }
AppUrl = AppUrl ;
AythUrl = AuthUrl ;
}
