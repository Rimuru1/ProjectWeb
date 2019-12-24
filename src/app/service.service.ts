import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private getProductByemail = localStorage.getItem("email")
  private Uemail = localStorage.getItem("Uemail")
  private _loginUrl = "http://localhost:3000/login";
  private _registerUrl = "http://localhost:3000/register";
  private _productUrl ="http://localhost:3000/product";
  private _storeUrl ="http://localhost:3000/store";
  private _userUrl = "http://localhost:3000/userstore/";
  private _myProductUrl = "http://localhost:3000/product/";
  private _basketUrl = "http://localhost:3000/basket/";
  private _deleteProducBaskettUrl = "http://localhost:3000/delete/productMybasket/";
  private _deleteProductUrl = "http://localhost:3000/delete/myProduct/";
  private _order = "http://localhost:3000/product/";
  private _auctionUrl = "http://localhost:3000/auction";

  constructor(
    private http: HttpClient,
    private router: Router,

  ) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginuser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  loginusers(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  logoutUser(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  addProducts(product){
    return this.http.post<any>(this._productUrl, product)
  }
  addAuction(auction){
    return this.http.post<any>(this._auctionUrl, auction)
  }
  SearchProduct(){
    return this.http.get<any>(this._productUrl)
}
  SearchStore(){
  return this.http.get<any>(this._storeUrl)
}
  SearchProductStore(){
  return this.http.get(this._myProductUrl+this.Uemail)
}
  addProductsBasket(product){
  return this.http.post<any>(this._basketUrl, product)
}
getProductBasket(){
  return this.http.get(this._basketUrl + this.getProductByemail )
}
deleteProductBasket(id){
  return this.http.delete(encodeURI(this._deleteProducBaskettUrl + id), {responseType: 'text'})
}
SearchMyproduct(){
  return this.http.get(this._myProductUrl+this.getProductByemail)
}
deleteProduct(id){
  return this.http.delete(encodeURI(this._deleteProductUrl + id), {responseType: 'text'})
}
getOrder(){
  return this.http.get(this._order+ this.getProductByemail )
 
}
}
