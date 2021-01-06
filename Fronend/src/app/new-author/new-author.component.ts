import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../author.service';
import { AuthorModel }  from '../authors/author.model';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  title:String = "Add Author";
  constructor(private authorService:AuthorService,private router:Router) { }

  authorItem = new AuthorModel('','','','','','');

  ngOnInit(): void {
  }

  AddAuthor(){
    this.authorService.newAuthor(this.authorItem);
    console.log("called");
    alert("success");
    this.router.navigate(['/authors']);
  }

}
