import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';


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
  private signUp = 'user/createuser';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public id: number ;
  public role: string;

  constructor(private http : HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  
  
  
  
  login(user) {
    return this.http.post<any>(`${this.baseUrl}${this.logIn}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token',user.sessionToken)
        this.id=user.user.id
        this.role=user.user.role
      }
      return user
    }))
  }



  register(user) {
    return this.http.post<any>(`${this.baseUrl}${this.signUp}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token',user.sessionToken)
        this.id=user.user.id
        this.role=user.user.role
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



