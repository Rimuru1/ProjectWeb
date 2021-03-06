import { Component, OnInit} from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';


declare const App;

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {
  date : any [] = [];
  allProduct:any[] = [];
  time = 120
 

  constructor(
    private service: ServiceService,
    private router: Router,
  
  ) { }

  ngOnInit() {
    App.LoadPage();
    this.GetAuction();
    // this.timer(this.time)
  
  }
  AppUrl= AppUrl;
  AuthUrl= AuthUrl;

  GetAuction() {
    this.service.getAuction().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }

  triggerFunction() {
    console.log('Timer Ended');
  }
  // timer(seconds){
  //   const now = Date.now();
  //   const then = now + seconds * 1000;
  //   const th = []
  //   this.countdown = setInterval(()=> {
  //     const secondleft = Math.round ((then - Date.now()) / 1000);
  //     if(secondleft <= 0){ 
  //       clearInterval(this.countdown);
  //     }
  //     this.runTime(secondleft)
  //   }, 1000)
  // }
  // runTime(seconds){
  //   const minutes = Math.floor(seconds / 60);
  //   const remainderSeconds = seconds % 60;
  //   const time = `${minutes}:${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`; 
  //   return this,this.timecount = time
  // }
  bitprice(id){
    console.log(id)
    localStorage.setItem('_ID_auction', id)
    this.router.navigateByUrl("/authentication/bit-auction")
  }
}
