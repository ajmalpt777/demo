import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookItem = {
    title:'',
    author:'',
    genre:'',
    image:''
  };
  constructor(private router:Router,private bookService:BookService,public _auth:AuthService) { }

  ngOnInit(): void {
    let bookId=localStorage.getItem("editBookId");
    this.bookService.getBook(bookId)
    .subscribe((data)=>
    {
      this.bookItem  =JSON.parse(JSON.stringify(data));
    })
  }

  editBook()
  {
    this.bookService.editBook(this.bookItem);
    alert("success");
    this.router.navigate(['/books']);
  }

}
