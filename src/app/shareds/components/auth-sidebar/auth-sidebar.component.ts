import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
declare const App;

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.css']
})
export class AuthSidebarComponent implements OnInit {
  loginUserData = {}
  showUserData = {
    "username": localStorage.getItem("username"),
   }

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
   
  }
  AppUrl= AppUrl;
  AuthUrl= AuthUrl;

  loginUser() {
    window.location.reload();
    console.log("yes")
      this.service.loginuser(this.loginUserData).subscribe(res => {
        console.log(res)
        localStorage.setItem("fname", res.fname)
        localStorage.setItem("lname", res.lname)
        localStorage.setItem("email", res.email)
        localStorage.setItem("username", res.username)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/authentication'])
      },
      err => console.log(err)
    )
  }
}
