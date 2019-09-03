import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
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
AppUrl= AppUrl
}
