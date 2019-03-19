import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
newComment = '';
enteredValue = ""

  constructor() { }

  ngOnInit() {
  }

  onAddComment() {

    this.newComment = this.enteredValue; 
  }
}
