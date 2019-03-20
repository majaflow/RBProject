import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ShopsService} from  '../../services/shop.service'
@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {


createComments: {
  cofeeID: number,
  owner: number,
  comment: string
};
comments = [];



  constructor(private fb: FormBuilder, private userService: UserService, private shopService: ShopsService) {} 
  

  ngOnInit() {
    
  }


  onSubmitComment() {
       
   this.createComments.cofeeID = this.shopService.shopID
    this.createComments.owner=this.userService.id
      this.shopService.postComment(this.createComments).subscribe(Comment => this.comments = Comment);
      console.log(Comment)
    }
}
