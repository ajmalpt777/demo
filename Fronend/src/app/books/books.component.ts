import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';
import { BookModel } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  title: String = "Book List";
  books: BookModel[];
  

  constructor(private bookService:BookService,private router:Router,public _auth:AuthService ) { }
  

  ngOnInit(): void {
   
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
      console.log(this.books);
    })
  }

  editBook(book)
  {
    localStorage.setItem("editBookId",book._id.toString());
    this.router.navigate(['update/books']);
  }

  deleteBook(book)
  {
    this.bookService.deleteBook(book._id)
    .subscribe((data)=>{
      this.books=this.books.filter(p=> p !==book);
    })
  }

}
