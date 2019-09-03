import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _loginUrl = "http://localhost:3000/login";
  private _registerUrl = "http://localhost:3000/register";
  private _productUrl ="http://localhost:3000/product";
  private _storeUrl ="http://localhost:3000/store";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginuser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  logoutUser(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  addProducts(product){
    return this.http.post<any>(this._productUrl, product)
  }
  SearchProduct(){
    return this.http.get<any>(this._productUrl)
}
  SearchStore(){
  return this.http.get<any>(this._storeUrl)
}
}
