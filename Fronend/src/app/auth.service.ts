import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginUser(user)
{
  return this.http.post<any>("http://localhost:3000/login",user);
}
signupUser(user)
{
  return this.http.post<any>("http://localhost:3000/signup",user)
  .subscribe(data=>{
    console.log(data)
  })
}
  constructor(private http:HttpClient) { }
loggedIn()
{
  return !!localStorage.getItem('token')
}
loggedUserIn()
{
  return !!localStorage.getItem('token1')
}
logIn(){
  return !!(localStorage.getItem('token1') || localStorage.getItem('token'))
}
getToken()
  {
    return localStorage.getItem('token')
  }


}
