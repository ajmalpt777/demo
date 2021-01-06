import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  authorItem = {
    name:'',
    genre:'',
    book1:'',
    book2:'',
    book3:'',
    image:''
  };

  constructor(private router:Router,private authorService:AuthorService,public _auth:AuthService) { }

  ngOnInit(): void {
    let authorId=localStorage.getItem("editAuthorId");
    this.authorService.getAuthor(authorId)
    .subscribe((data)=>
    {
      this.authorItem  =JSON.parse(JSON.stringify(data));
    })
  }

  editAuthor()
  {
    this.authorService.editAuthor(this.authorItem);
    alert("success");
    this.router.navigate(['/authors']);
  }

}
