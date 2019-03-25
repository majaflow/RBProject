import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
// import { User } from '../../models/user'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  UserData = {

  }
  constructor(private authService: UserService) { }
  
  ngOnInit() {

  }

  onSignup() {
    console.log(this.UserData)
    this.authService.register(this.UserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
