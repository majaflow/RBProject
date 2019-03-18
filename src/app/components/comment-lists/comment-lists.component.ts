import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-lists',
  templateUrl: './comment-lists.component.html',
  styleUrls: ['./comment-lists.component.css']
})
export class CommentListsComponent implements OnInit {

  comments = [];

  constructor() { }

  ngOnInit() {
  }

  postComment(id, comment) {
     const Post = {

     }
  }
}
