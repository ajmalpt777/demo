import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  item= {
    name :'',
    genre:'',
    book1:'',
    book2:'',
    book3:'',
    image:''
  }
  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  }
   
  getAuthor(id){
    return this.http.get("http://localhost:3000/author/"+id);
  }

  newAuthor(item){
    return this.http.post("http://localhost:3000/authors/insert",{"author":item})
    .subscribe(data=> { console.log(data)} )
  }

  editAuthor(author)
  {
    console.log("client update");
    return this.http.put("http://localhost:3000/authors/update",author)
    .subscribe(data=>{
      console.log(data)
    })
  
  }

  deleteAuthor(id)
  {
    return this.http.delete("http://localhost:3000/authors/remove/"+id)
  }

}
