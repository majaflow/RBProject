/*
This service is intended to handle BOTH posts and comments most of our fetches should be here
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../models/comment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private getUrl = 'https://coffeeredbadgeserver.herokuapp.com/comment/owner'
  private commentUrl = 'https://coffeeredbadgeserver.herokuapp.com/comment/create'


  constructor(private http: HttpClient) { }




  postComment(comment: Comments) : Observable<Comments[]> {
    return this.http.post<Comments[]>(this.commentUrl, comment, httpOptions);
  }


}
