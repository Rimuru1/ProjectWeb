import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-navbar',
  templateUrl: './auth-navbar.component.html',
  styleUrls: ['./auth-navbar.component.css']
})
export class AuthNavbarComponent implements OnInit {
  allProduct : any [] = []

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.order();
  }
  AppUrl = AppUrl;
  AuthUrl = AuthUrl;

  order(){
    this.service.getOrder().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  
  }
  
}
