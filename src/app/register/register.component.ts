import { Component, OnInit } from '@angular/core';
import { AppUrl } from '../app.url';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { AuthUrl } from '../authentication/authentication.url';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {}

  constructor(
    private regis: ServiceService,
    private _router: Router
  ) { }

  ngOnInit() {
  }
AppUrl = AppUrl;
AuthUrl = AuthUrl;

registerUsers() {
  this.regis.registerUser(this.registerUserData)
    .subscribe(
      res => { 
      console.log(res)
      localStorage.setItem('token', res.token)
      this._router.navigateByUrl('/')
      },
      err => console.log(err)
    )
}

}
