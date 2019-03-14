// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//     constructor(
//         private router: Router,
//         private authenticationService: AuthenticationService
//     ) {}
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         const currentUser = this.authenticationService.currentUserValue;
//         if (currentUser) {
//             // authorised so return true
//             return true;
//         }
//         // not logged in so redirect to login page with the return url
//         this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//         return false;
//     }
// }









// import {CanActivate, Router} from '@angular/router';
// import {Injectable} from '@angular/core';
// import {CustomerService} from './customer.service';
// import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

// @Injectable()
// export class NeedAuthGuard implements CanActivate {

//   constructor(private customerService: CustomerService, private router: Router) {
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

//     const redirectUrl = route['_routerState']['url'];

//     if (this.customerService.isLogged()) {
//       return true;
//     }

//     this.router.navigateByUrl(
//       this.router.createUrlTree(
//         ['/login'], {
//           queryParams: {
//             redirectUrl
//           }
//         }
//       )
//     );

//     return false;
//   }
// }
























// import { Injectable } from '@angular/core';
// import { Router, CanActivate } from '@angular/router';
// import { UserService } from './user.service';
// @Injectable()
// export class AuthGuardService implements CanActivate {
//   constructor(public auth: UserService, public router: Router) {}
//   canActivate(): boolean {
//     if (!this.auth.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }
