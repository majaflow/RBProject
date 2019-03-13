import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { Login } from '../../login'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserData= new Login
  constructor(private authService: UserService, private customer: CustomerService, private router: Router) { }
//     if (this.authService.currentUserValue) { 
//         this.router.navigate(['/']);
//     }
//   }
  
  ngOnInit() {

  }

  onLogin() {
    // console.log(this.loginUserData)
    this.authService.login(this.UserData)
      .subscribe( res => {console.log(res)
        {
            if (res.token) {
                this.customer.setToken(res.token);
                
                this.router.navigate(['/shops']);
            }
        }
    })

        err => {console.log(err)
            
        } 
      
  }

}




