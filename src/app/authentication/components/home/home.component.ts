import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
declare const App;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;
  allProduct: any[] = []
  email = localStorage.getItem("email")
  constructor(
    private service: ServiceService,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.searchproduct()
    App.LoadPage();
  }

  searchproduct() {
    this.service.SearchProduct().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }
  addBasket(_id,email ,product, price, image){
    const data = {
      "id_product": _id,
      "productName": product,
      "email": this.email,
      "emailStore": email,
      "price": price,
      "image": image
    }
    this.service.addProductsBasket(data)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.getItem('token',)
        },
        err => console.log(err)
      )
      alert("เพิ่มสินค้าเรียบร้อย")
  }

}
