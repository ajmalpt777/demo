import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    productId :'',
    productName:'',
    productCode:'',
    releaseDate:'',
    description:'',
    price:'',
    starRating:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }
   
  getProduct(id){
    return this.http.get("http://localhost:3000/"+id);
  }

  newProduct(item){
    return this.http.post("http://localhost:3000/insert",{"product":item})
    .subscribe(data=> { console.log(data)} )
  }

  editProduct(product)
  {
    console.log("client update");
    return this.http.put("http://localhost:3000/update",product)
    .subscribe(data=>{
      console.log(data)
    })
  }

  deleteProduct(id)
  {
    return this.http.delete("http://localhost:3000/remove/"+id)
  }

}
