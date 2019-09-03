import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
declare const App;
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productData= {}
  email = localStorage.getItem("email")
  type = localStorage.getItem("type")
  productName: any
  price: any 
  imqge: any 

  constructor(
    private service: ServiceService,
    private _router: Router
  ) { }

  ngOnInit() {
    App.LoadPage();
  }
  AuthUrl= AuthUrl;
  AppUrl= AppUrl;

  addProduct() {
    const data = {
      "email": this.email,
      "type": this.type,
      "productName": this.productName,
      "price": this.price,

    }
    this.service.addProducts(data)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.getItem('token',)
        this._router.navigateByUrl('/authentication/profile')
        },
        err => console.log(err)
      )
  }
}
