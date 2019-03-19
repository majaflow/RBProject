import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { CustomMaterialModule } from './material.module';
// import { AppRoutingModule } from './app.routing.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';


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
//import { DisplayShopsComponent } from './display-shops/display-shops.component';
import { AuthGuard } from './services/auth.guard';


 


const appRoutes: Routes = [
  { path: '',
  component: HomeComponent
  },

  { path: 'shops',
  component: ShopsComponent,
  canActivate: [AuthGuard],
  data: ['admin']
  },

  { path: 'contact',
  component: ContactComponent
  },

  { path: 'signup',
  component: SignupComponent
  },

  { path: 'login',
  component: LoginComponent
  },

  { path: 'home',
  component: HomeComponent
  },

  { path: '**',
  redirectTo: 'shops'
  }
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
  //  DisplayShopsComponent
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
    // CustomMaterialModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule ,
    MatButtonModule 
  ],
  providers: [ShopsService, HttpClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
