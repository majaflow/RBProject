import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
newComment = 'no content';
enteredValue = ""
  constructor(private postService: PostService) { }
  
  ngOnInit() {
  }

  onSubmitComment() {
  }
}
