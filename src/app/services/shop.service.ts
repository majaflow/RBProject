import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shops } from '../models/shops';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json',
    'Authorization' : localStorage.getItem('token')
  })
}

@Injectable()

export class ShopsService {
  private shopUrl = "https://coffeeredbadgeserver.herokuapp.com/coffee/";
  private createUrl ="https://coffeeredbadgeserver.herokuapp.com/coffee/create"
  
  constructor(
    private http: HttpClient) { }


getShops() {
  return this.http.get(this.shopUrl)
}


makeShops(shops: Shops) : Observable<Shops[]> {
  return this.http.post<Shops[]>(this.createUrl, shops, httpOptions);
}


}