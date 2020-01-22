import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from '../authentication/authentication.url';
declare const App;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;
  constructor(
    private service: ServiceService,
    private router: Router, 
  ) { }

  ngOnInit() {
    App.LoadPage();
  }

 
}

