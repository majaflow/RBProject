import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shops } from '../models/shops';
import {Comments} from '../models/comment'
import { UserService } from './user.service';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
import { APIURL } from '../../environments/environment.prod';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json',
     Authorization : localStorage.getItem('token')
  })
}

@Injectable()

export class ShopsService {

  private shopUrl = (`${APIURL}/coffee/`);
  private createUrl =(`${APIURL}/coffee/create`);
  

  public shopID : number
  commentUrl = (`${APIURL}/coffee/`)
  constructor(
    private http: HttpClient, private userService: UserService) { }


getShops() {
  return this.http.get(this.shopUrl)
}
setshopID(value : number) {
this.shopID = value
}

getSingle(shopId) {
  return this.http.get(`${this.shopUrl}${shopId}`)
}

makeShops(shops: Shops) : Observable<Shops[]> {
  return this.http.post<Shops[]>(this.createUrl, shops, httpOptions);
}
deleteShops() {
  if(localStorage.getItem('role') === 'admin') {
    // window.location.href='/shops';
    fetch(`${this.shopUrl}${this.shopID}/admin`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }).then(res=> console.log(res)).then()
  } else {
    // window.location.href='/shops';
    fetch(`${this.shopUrl}${this.shopID}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    })
}
  console.log(`${this.shopUrl}${this.shopID}`)
 // return this.http.delete(`${this.shopUrl}${this.shopID}`, httpOptions);
}
updateShops(shops: any) : Observable<any> {


  console.log(shops)
  return this.http.put<any>(`${this.shopUrl}${this.shopID}`, shops, httpOptions);


}
getComment() {
  return this.http.get(this.commentUrl)
}

updateComment(data){
  // data.owner= Number(localStorage.getItem('id'))
  console.log('my comment data:',data)
  //return this.http.put(`https://coffeeredbadgeserver.herokuapp.com/comment/77`,data,httpOptions)
  return fetch(`${APIURL}/comment/${data.comment.id}`,{
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token')
    }
  }).then(res=>console.log(res))
 }

// updateComment(data){
//   return this.http.put(`https://coffeeredbadgeserver.herokuapp.com/comment/${data.id}`,data,httpOptions)
//  }

 deleteCommment(id){
  if(localStorage.getItem('role') === 'admin') {
    //window.location.href='/shops';
    fetch(`${APIURL}/comment/${id}/admin`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }).then(res=> console.log(res))
  } else {
  fetch(`${APIURL}/comment/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('token')
    }
  }).then(res=> console.log(res))}
//return this.http.delete(`https://coffeeredbadgeserver.herokuapp.com/comment/${id}`,httpOptions)
}

testDelete() : Observable<any> {
  if(localStorage.getItem('role') === 'admin') {
    return this.http.delete(`${this.shopUrl}${this.shopID}/admin`, httpOptions)
  } else {
    return this.http.delete(`${this.shopUrl}${this.shopID}`, httpOptions)
  }
} 


postComment(comment) {
  // fetch(`${this.commentUrl}${this.shopID}/comment/create`,{
  //   method: 'DELETE', 
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'authorization': localStorage.getItem('token')
  //   }
  // })

  // console.log('comment :', comment)
  console.log("token =>", localStorage.getItem('token'));
  return this.http.post<any>(`${this.commentUrl}${this.shopID}/comment/create`, comment, httpOptions);
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