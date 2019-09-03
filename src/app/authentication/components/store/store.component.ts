import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { AuthUrl } from '../../authentication.url';
declare const App;
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
allStore: any[] = []
  constructor(
    private service: ServiceService,
    private router: Router, 
  ) { }

  ngOnInit() {
    App.LoadPage();
    this.searchStore();
  }
  AppUrl= AppUrl;
  AuthUrl = AuthUrl;
  searchStore(){
    this.service.SearchStore().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allStore = jsonData
  
        })
  }
  getUserStore(email){
    var Uemail = email
    console.log(Uemail)
    localStorage.setItem("Uemail", Uemail)
      
    }
}
