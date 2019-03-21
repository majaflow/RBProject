import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shops } from '../models/shops';
import {Comments} from '../models/comment'
import { UserService } from './user.service';
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
  
  public shopID : number
  private commentUrl = `https://coffeeredbadgeserver.herokuapp.com/coffee/`
  constructor(
    private http: HttpClient, private userService:UserService) { }


getShops() {
  return this.http.get(this.shopUrl)
}
setshopID(value : number) {
this.shopID = value
}

getSingle() {
  return this.http.get(`${this.shopUrl}${this.shopID}`)
}

makeShops(shops: Shops) : Observable<Shops[]> {
  return this.http.post<Shops[]>(this.createUrl, shops, httpOptions);
}
deleteShops() {
  fetch(`${this.shopUrl}${this.shopID}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token')
    }
  })
  console.log(`${this.shopUrl}${this.shopID}`)
 // return this.http.delete(`${this.shopUrl}${this.shopID}`, httpOptions);
}
updateShops(shops: any) : Observable<any> {
  console.log(shops.id)
  return this.http.put<any>(`${this.shopUrl}${shops.id}`, shops, httpOptions);
}
getComment() {
  return this.http.get(this.commentUrl)
}



postComment(comment: Comments) : Observable<Comments> {
comment.owner= this.userService.id
console.log('comment :', comment)
return this.http.post<Comments>(`${this.commentUrl}${this.shopID}/comment/create`, comment, httpOptions);
}
}
/* 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../models/comment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json',
    'Authorization' : localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private getUrl = 'https://coffeeredbadgeserver.herokuapp.com/comment/owner'
  private commentUrl = `https://coffeeredbadgeserver.herokuapp.com/coffee/`


  constructor(
    private http: HttpClient) { }

  getComment() {
      return this.http.get(this.commentUrl)
    }



  postComment(comment: Comments) : Observable<Comments[]> {
    let coffeeId = comment.coffeeId
    console.log('comment :', comment)
    return this.http.post<Comments[]>(`${this.commentUrl}${coffeeId}/comment/create`, comment, httpOptions);
  }


}
*/