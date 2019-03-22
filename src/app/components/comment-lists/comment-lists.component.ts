import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
//import { PostService } from 'src/app/services/post-service.service';
import { ShopsService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-comment-lists',
  templateUrl: './comment-lists.component.html',
  styleUrls: ['./comment-lists.component.css']
})
export class CommentListsComponent implements OnInit {


  commentForm;
  Comments = [];

  constructor(
    private shopService: ShopsService,
    private formBuilder: FormBuilder) 
    {
     }

     


  ngOnInit() {
  }

 findComments(){
   
//  this.shopService.getSingle().subscribe(shop => {
//   this.Comments =Object.values(comments);
//   this.Comments.reverse();
//  console.log(comments);)
 }
     

     
  
}
