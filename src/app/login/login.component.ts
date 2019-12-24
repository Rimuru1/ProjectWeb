import { Component, OnInit } from '@angular/core';
import { AppUrl } from '../app.url';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {

  }
url= AppUrl;

loginUser() {
  console.log("yes")
    this.service.loginusers(this.loginUserData).subscribe(res => {
      console.log(res)
      localStorage.setItem("fname", res.fname)
      localStorage.setItem("lname", res.lname)
      localStorage.setItem("email", res.email)
      localStorage.setItem("username", res.username)
      localStorage.setItem("type", res.type)
      this.router.navigate(['/'])
    },
    err => console.log(err)
  )
}
}
