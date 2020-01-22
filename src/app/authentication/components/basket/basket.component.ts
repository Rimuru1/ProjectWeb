import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { HttpClient } from '@angular/common/http';
declare const App;

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  [x: string]: any;
  
  allProduct: any[] = []
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    // "email": localStorage.getItem("email"),
    "address": localStorage.getItem("address"),
    "type": localStorage.getItem("type"),

  }
  email1 =  localStorage.getItem("email")
  allPrice: any[] = []

  constructor(
    private http : HttpClient,
    private service: ServiceService 
  ) { }

  ngOnInit() {
    App.LoadPage();
    this.SreachMybasket();
    
  }
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;

  SreachMybasket(){
    // this.service.getProductBasket().subscribe(
    //   res => { 
    //     var data = JSON.stringify(res)
    //     var jsonData = JSON.parse(data)
    //     this.allProduct = jsonData
    //     console.log(this.allProduct)

    //     })

    this.http.get<any>('http://localhost:3000/basket/'+this.email1).subscribe((req)=>{
      this.allProduct=req;
      console.log(this.allProduct)
      console.log(this.allProduct.length)
      this.allsome();
    })
        
  
  }
  y:number
  allsome(){
    let x = 0
    let allprice = Number(this.allProduct.length)
    console.log(this.allProduct.length)
    for (var i = 0; i < allprice; i++){
      let allmany = Number(this.allProduct[i].price);
      x += allmany;
    }
    this.y = x
    console.log(this.y)
  }
  deleteproduct(id) {
    console.log(id)
    this.service.deleteProductBasket(id).subscribe(
      res => { 
        console.log(res)
        }) 
        window.location.reload();
        alert("นำออกจากรถเข็นแล้ว")
    }

}
