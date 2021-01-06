import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  item= {
    title :'',
    author:'',
    genre:'',
    image:''
  }
  constructor(private http:HttpClient) { }
  getBooks(){
    return this.http.get("http://localhost:3000/books");
  }
   
  getBook(id){
    return this.http.get("http://localhost:3000/book/"+id);
  }

  newBook(item){
    return this.http.post("http://localhost:3000/books/insert",{"book":item})
    .subscribe(data=> { console.log(data)} )
  }

  editBook(book)
  {
    console.log("client update");
    return this.http.put("http://localhost:3000/books/update",book)
    .subscribe(data=>{
      console.log(data)
    })
  }

  deleteBook(id)
  {
    return this.http.delete("http://localhost:3000/books/remove/"+id)
  }

}

