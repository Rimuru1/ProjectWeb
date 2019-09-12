import { Component, OnInit } from '@angular/core';
import { AuthUrl } from '../../authentication.url';
import { AppUrl } from 'src/app/app.url';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/app/service.service';
declare const App;

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {
  allProduct: any[] = []
  userStore: any = []
  useremail = localStorage.getItem("Uemail")
  Emails:any [] = []

  constructor(
    private http: HttpClient,
    private service: ServiceService,
  ) { }

  ngOnInit() {
    App.LoadPage();
    this.store1();
    this.ProductStore();
  }
  AuthUrl = AuthUrl;
  AppUrl = AppUrl;

  store1(){
    console.log('1234')
        this.http.get<any>('http://localhost:3000/userstore/'+this.useremail).subscribe(res =>{
          this.Emails = res;
          console.log(this.Emails)
        })
    
      }
      ProductStore() {
        console.log('4321')
        this.service.SearchProductStore().subscribe(
          res => { 
            var data = JSON.stringify(res)
            var jsonData = JSON.parse(data)
            this.allProduct = jsonData
      
      
            })
      }
      getBase64(event) {
        let me = this;
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          //me.modelvalue = reader.result;
          console.log(reader.result);
        };
        reader.onerror = function (error) {
          console.log('Error: ', error);
        };
      }
}
