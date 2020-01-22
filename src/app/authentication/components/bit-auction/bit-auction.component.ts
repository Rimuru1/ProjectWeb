import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';
declare const App;
@Component({
  selector: 'app-bit-auction',
  templateUrl: './bit-auction.component.html',
  styleUrls: ['./bit-auction.component.css']
})
export class BitAuctionComponent implements OnInit {

  constructor(
    private service: ServiceService,
    private router: Router, 
  ) { }

  ngOnInit() {
    App.LoadPage();
  }
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;
  time(date){

  }
}
