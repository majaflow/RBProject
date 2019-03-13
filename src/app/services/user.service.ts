import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token')
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://coffeeredbadgeserver.herokuapp.com/'
  private logIn = 'user/signin'
  private signUp = 'user/createuser'
  constructor(private http : HttpClient) { }
  
  
  
  
  login(user) {
    return this.http.post<any>(`${this.baseUrl}${this.logIn}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token',user.sessionToken)
      }
      return user
    }))
  }



  register(user) {
    return this.http.post<any>(`${this.baseUrl}${this.signUp}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token',user.sessionToken)
      }
      return user
    }))
  }
}







































// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) {}
  
  
  
  
  
  
  
  
  
  
  
  
  
  // // ...
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }
  // login(email: string, password: string){
  //   const url = "https://coffeeredbadgeserver.herokuapp.com/"
  //   return this.http.post<{token: string}>(`${url}/user/signin`, {email: email, password: password})
  //     .pipe(
  //       map(result => {
  //         localStorage.setItem('access_token', result.token);
  //         console.log(result.token)
  //       })
  //     );



