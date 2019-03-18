import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app.routing.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatExpansionModule } from '@angular/material';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
// import { NeedAuthGuard } from './services/auth-guard.service';
import { ShopsService } from './services/shop.service';
import { CreateShopsComponent } from './components/create-shops/create-shops.component';
import { HttpClient } from '@angular/common/http';
import { DisplayShopsComponent } from './display-shops/display-shops.component';
import { CommentListsComponent } from './components/comment-lists/comment-lists.component';

 



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'shops', component: ShopsComponent,
canActivate: [] },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'shops'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostCommentsComponent,
    HomeComponent,
    LoginComponent,
    ShopsComponent,
    ContactComponent,
    SignupComponent,
    CreateShopsComponent,
    DisplayShopsComponent,
    CommentListsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule ,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [ShopsService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
