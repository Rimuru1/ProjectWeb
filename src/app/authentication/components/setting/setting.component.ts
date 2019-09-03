import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
declare const App;
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    App.LoadPage();
  }
  AppUrl= AppUrl;
}
