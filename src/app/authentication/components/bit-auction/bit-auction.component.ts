import { Component, OnInit , Input} from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare const App;
@Component({
  selector: 'app-bit-auction',
  templateUrl: './bit-auction.component.html',
  styleUrls: ['./bit-auction.component.css']
 
})

export class BitAuctionComponent implements OnInit {
  @Input("item") item
  
  _id = localStorage.getItem("_ID_auction")
  fname = localStorage.getItem("fname")
  lname = localStorage.getItem("lname")
  user = localStorage.getItem("username")
  address = localStorage.getItem("address")
  email = localStorage.getItem("email")
  bit: number;
  auction : any[] = []
  listBit : any[] = []
  days: number;
  hours: number;
  mins: number;
  secs: number;
  d: string | number | Date;

  constructor(
    private service: ServiceService,
    private router: Router, 
    private http : HttpClient,

  ) { }

  ngOnInit() {
    App.LoadPage();
    console.log(this.item)
    // this.getauction();
    this.setdate();
    
  }
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;
  getauction(){
    console.log(this._id)
    this.http.get<any>('http://localhost:3000/auction/'+ this._id).subscribe((req) =>{
      this.auction = req
      this.d = this.auction[0].endTime
      this.setdate();
      this.bitlist();

    })
  }
  id = "" + Math.random();
  setdate(){
    
    var endTime = new Date(this.item.endTime).getTime();
    var timer = setInterval( ()=> {
      let now = new Date().getTime();
      let t = endTime - now;
      if( t >=0) {
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 *60 * 60 * 24)) / (1000 * 60 *60));
        var mins = Math.floor(( t % (1000 * 60 *60 )) / (1000 *60));
        var secs = Math.floor(( t %(1000 * 60)) / 1000);

        document.getElementById(this.id).innerHTML = days + " : " + hours + " : " + mins + " : " + secs
      }
    },1000)
  }
  Bitprice(){
    const data = {
      "id_auction": this._id,
      "fname": this.fname,
      "lname": this.lname,
      "email": this.email,
      "address": this.address,
      "user": this.user,
      "price": this.bit
    }
    this.service.bitPrice(data).subscribe( res =>{
      console.log(res)
      localStorage.getItem('token',)
      setTimeout(()=>{
        window.location.reload();
      },2000)
    },err => console.log(err)

    )
  }
  bitlist(){
    this.http.get<any>('http://localhost:3000/bit/'+ this._id).subscribe((req) =>{
      this.listBit = req
  
  })
  

}
Auction(item){
  localStorage.setItem('ID_auction' , item._id)

}
}
