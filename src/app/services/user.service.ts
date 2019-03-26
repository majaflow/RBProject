import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {map} from 'rxjs/operators'
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { APIURL } from '../../environments/environment.prod';


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
  private baseUrl = (`${APIURL}`)
  private logIn = '/user/signin'
  private signUp = '/user/createuser';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;


  public id: number;

  public role: string;
  public header= httpOptions

  constructor(private http : HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.id=Number(localStorage.getItem('id'))

  }
  
  
  
  
  login(user) {
    return this.http.post<any>(`${this.baseUrl}${this.logIn}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken && user.user.id !== undefined){
        localStorage.setItem('token',user.sessionToken)
        localStorage.setItem('id',user.user.id)
        localStorage.setItem('role', user.user.role)
        this.role= localStorage.getItem('role')
        this.id= Number(localStorage.getItem('id'))
        this.role = localStorage.getItem('role')
        window.location.href='/home';
      }
      console.log(user.user.id)
      console.log(this.id)
      return user
    }))
  }



  register(user) {
    return this.http.post<any>(`${this.baseUrl}${this.signUp}`,user)
    .pipe(map(user=>{
      if(user && user.sessionToken){
        localStorage.setItem('token',user.sessionToken)
        localStorage.setItem('id',user.user.id)
        localStorage.setItem('role', user.user.role)
        this.id= Number(localStorage.getItem('id'))
        this.role = localStorage.getItem('role')
        window.location.href='/home';

      }
      return user
    }))
  }
  loggedIn() {
    return !!localStorage.getItem('token')
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



