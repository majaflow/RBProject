import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {ShopsService} from  '../../services/shop.service'
import {Comments} from '../../models/comment'
@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

str : string


@Input() owner : number
createComments= new Comments
comments = [];



  constructor(private fb: FormBuilder, private userService: UserService, private shopService: ShopsService) {
    // this.createComments.comment = 
  } 
  

  ngOnInit() {
  
  
   // console.log(this.coffeeID)
  }


//   onSubmitComment() {
//        this.createComments.comment=this.str
//        this.createComments.owner= this.owner
//        this.createComments.coffeeId = this.shopService.shopID
//  //   this.createComments.owner=this.userService.id
//     fetch(`https://coffeeredbadgeserver.herokuapp.com/coffee/${this.shopService.shopID}/comment/create`,{
//      method: 'POST', 
//      body: JSON.stringify(this.createComments),
//     headers: {
//     'Content-Type': 'application/json',
//     'authorization': localStorage.getItem('token')
//   }
// }).then(res =>console.log(res))
//     //  this.shopService.postComment(this.createComments).subscribe(Comment => this.comments = Comment);
      
//     }

  onSubmitComment() {

    let commObj = {
      comment: this.str,
      rating: 5
    }
    console.log('commObj:', commObj)
    console.log('I am logging')
    this.shopService.postComment(commObj)
    .subscribe(data => {
      window.location.href='/shops';
      console.log('Data:', data)
    })
  }
}
