import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { AppRoutingModule } from './app.routing.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatCardModule, MatButtonModule, MatExpansionModule, MatBottomSheetModule } from '@angular/material';


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
import { CommentListsComponent } from './components/comment-lists/comment-lists.component';
import { AuthGuard } from './services/auth.guard';
import { BottomModalComponent } from './components/bottom-modal/bottom-modal.component';


 



const appRoutes: Routes = [
  { path: '',
  component: HomeComponent
  },

  { path: 'shops',
  component: ShopsComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'create-shops',
      component: CreateShopsComponent,
    }
  ]
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
  redirectTo: 'home'
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
    CommentListsComponent,
    BottomModalComponent
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
    MatExpansionModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    BottomModalComponent
  ],
  providers: [ShopsService, HttpClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
