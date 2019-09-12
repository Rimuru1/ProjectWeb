import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
declare const App;

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  allProduct: any[] = []
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "address": localStorage.getItem("address"),
    "type": localStorage.getItem("type"),

  }

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    App.LoadPage();
    this.SreachMybasket();
  }
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;

  SreachMybasket(){
    this.service.getProductBasket().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  
  }
  deleteproduct(id) {
    console.log(id)
    this.service.deleteProductBasket(id).subscribe(
      res => { 
        console.log(res)
        }) 
        window.location.reload();
        alert("sussecfully")
    }

}
