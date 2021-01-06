import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BooksComponent,
    NewBookComponent,
    UpdateBookComponent,
    AuthorsComponent,
    NewAuthorComponent,
    UpdateAuthorComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
              {
                provide:HTTP_INTERCEPTORS,
                useClass:TokenInterceptorService,
                multi:true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
