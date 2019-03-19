import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-comment-lists',
  templateUrl: './comment-lists.component.html',
  styleUrls: ['./comment-lists.component.css']
})
export class CommentListsComponent implements OnInit {


  commentForm;
  newComment = [];

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder) 
    {
    this.createCommentForm();
     }

     createCommentForm() {
       this.commentForm = this.formBuilder.group({comment: ['', Validators.compose([
         Validators.required,
         Validators.minLength(1),
         Validators.maxLength(200)
       ])]
      })
     }


  ngOnInit() {
  }

  postComment(id) {
     

     
  }
}
