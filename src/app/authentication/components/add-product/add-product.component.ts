import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { FormGroup } from '@angular/forms';
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
  image: any 
  base64textString: any;
  form : FormGroup

  constructor(
    private service: ServiceService,
    private _router: Router
  ) { }

  ngOnInit() {
    App.LoadPage();
  }
  AuthUrl= AuthUrl;
  AppUrl= AppUrl;

  imageProduct(input){
    const image = this.form.controls[0];
    if(input.files.length == 0) return;
    const reader = new FileReader();
    reader.readAsDataURL(input.files[0]);
    reader.addEventListener('load', () =>{
      console.log(reader.result)
    })

  }

  addProduct() {
   
    const data = {
      "email": this.email,
      "type": this.type,
      "productName": this.productName,
      "price": this.price,
      "image": this.form,

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
