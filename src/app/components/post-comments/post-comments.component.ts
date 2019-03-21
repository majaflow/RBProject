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

str : string
createComments: {
  cofeeID: number,
  owner: number,
  comment: string,
  name: string,
  rating: string
};
comments = [];



  constructor(private fb: FormBuilder, private userService: UserService, private shopService: ShopsService) {} 
  

  ngOnInit() {
    
  }


  onSubmitComment() {
       
   
      this.shopService.postComment(this.createComments).subscribe(Comments => console.log(Comments));
      console.log(Comment)
    }
}
