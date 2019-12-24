import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
declare const App;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  allProduct: any[] = []
  showUserData = {
    "fname": localStorage.getItem("fname"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "username": localStorage.getItem("username"),
    "type": localStorage.getItem("type"),
   

  }

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.searchMyProduct();
    App.LoadPage();
  }
  AppUrl= AppUrl;
  AuthUrl= AuthUrl;
  searchMyProduct() {
    console.log()
    this.service.SearchMyproduct().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }

  deleteproduct(id) {
    console.log(id)
    this.service.deleteProduct(id).subscribe(
      res => { 
        console.log(res)
        })
        window.location.reload();
        alert("sussecfully")
      }
}