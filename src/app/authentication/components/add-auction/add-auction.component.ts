import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-auction',
  templateUrl: './add-auction.component.html',
  styleUrls: ['./add-auction.component.css']
})
export class AddAuctionComponent implements OnInit {
  productData= {}
  email = localStorage.getItem("email")
  type = localStorage.getItem("type")
  username = localStorage.getItem("username")
  productName: any
  price: any 
  image : any
  date : any 
  time : any 

  constructor(
    private service: ServiceService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  imageProduct(input){
    
    if(input.files.length == 0) return;
   const reader = new FileReader();
   reader.readAsDataURL(input.files[0]);
   reader.addEventListener('load', () =>{
     console.log(reader.result)
    return this.image = reader.result
     
   })
 }

 AddAuction() {
   
  const data = {
    "email": this.email,
    "type": this.type,
    "username": this.username,
    "productName": this.productName,
    "price": this.price,
    "image": this.image,
    "date": this.date,
    "endTime": this.date

  }
  this.service.addAuction(data)
    .subscribe(
      res => { 
      console.log(res)
      localStorage.getItem('token',)
      this._router.navigateByUrl('/authentication/auction')
      },
      err => console.log(err)
    )
}

}
