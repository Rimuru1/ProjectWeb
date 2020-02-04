import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { updateLocale } from 'ngx-bootstrap';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
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
    "address": localStorage.getItem("address"),
    "email": localStorage.getItem("email"),
    "username": localStorage.getItem("username"),
    "type": localStorage.getItem("type"),
   

  }
  fname : any;
  lname : any;
  address: any;


  constructor(
    private service : ServiceService,
    private _router : Router
  ) { }

  ngOnInit() {
  }
AppUrl = AppUrl ;
AythUrl = AuthUrl ;

update(){
  const data = {
    "fname" : this.fname,
    "lname" : this.lname,
    "address" : this.address
  }
    localStorage.setItem('fname',this.fname)
    localStorage.setItem('lname',this.lname)
    localStorage.setItem('address',this.address)
    this.service.editprofile(data).subscribe(()=>{})
    setTimeout(()=>{
    window.location.reload();
  },2000)
  this._router.navigateByUrl("/authentication/profile")
  }
}

