import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
declare const App;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allProduct: any[] = []
  constructor(
    private service: ServiceService,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.searchproduct()
    App.LoadPage();
  }

  searchproduct() {
    this.service.SearchProduct().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }

}
