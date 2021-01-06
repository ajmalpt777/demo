import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';
import { AuthorModel } from '../authors/author.model'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title: String = "Author List";
  authors: AuthorModel[];
  imageWidth: number= 50;
  imageMargin: number= 2;
  showImage: boolean= false;

  constructor(private authorService:AuthorService,private router:Router,public _auth:AuthService) { }
  
  

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors);
    })
  }

  editAuthor(author)
  {
    localStorage.setItem("editAuthorId",author._id.toString());
    this.router.navigate(['update/authors']);
  }

  deleteAuthor(author)
  {
    this.authorService.deleteAuthor(author._id)
    .subscribe((data)=>{
      this.authors=this.authors.filter(p=> p !==author);
    })
  }

}
