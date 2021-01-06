import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewBookComponent } from './new-book/new-book.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'login',component:LoginComponent},
                        {path:'signup',component:SignupComponent},

                        {path:'books',component:BooksComponent},
                        {path:'add/books',
                        canActivate:[AuthGuard],
                        component:NewBookComponent},
                        {path:'update/books',component:UpdateBookComponent},

                        {path:'authors',component:AuthorsComponent},
                        {path:'add/authors',
                        canActivate:[AuthGuard],
                        component:NewAuthorComponent},
                        {path:'update/authors',component:UpdateAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
