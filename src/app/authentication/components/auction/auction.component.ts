import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../../authentication.url';
declare const App;
@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css']
})
export class AuctionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    App.LoadPage();
  }
  AppUrl= AppUrl;
  AuthUrl= AuthUrl;
}
