import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import {BookModel} from '../books/book.model';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  title:String = "Add Book";
  constructor(private bookService:BookService,private router:Router) { }
  bookItem = new BookModel('','','','');
  ngOnInit(): void {
  }

  AddBook(){
    this.bookService.newBook(this.bookItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/books']);
  }

}
