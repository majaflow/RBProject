import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

// useBtn = false;
// newComment = 'no content';
// enteredValue = ""
createComments: FormGroup;
comments = [];



  constructor(private fb: FormBuilder, private postService: PostService) {} 
  

  ngOnInit() {
    this.createComments = this.fb.group({
      name: new FormControl(),
      comment: new FormControl(),
      rating: new FormControl(),
      owner: localStorage.getItem('id'),
    })

    // this.findShops();
  }


  onSubmitComment() {
      // this.comments.unshift(this.value) 
      this.postService.postComment(this.comments).subscribe(Comment => this.comments = Comment);
      console.log(Comment)
      // this.findShops();
    }
}
