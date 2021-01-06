import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  username:'',
password:''
}


  constructor(private _auth:AuthService,private _router: Router) { }

  ngOnInit(): void {
  }
loginUser()
{
  this._auth.loginUser(this.user)
  .subscribe(
    res=>{
      if(res.token){
      localStorage.setItem('token',res.token)
      alert("success");
      this._router.navigate(['/'])
      }

      if(res.token1){
        localStorage.setItem('token1',res.token1)
        alert("success");
        this._router.navigate(['/'])
        }
      if(res.msg)
      {
        alert("Wrong:Try Again!!");
      }

    }
  )
}
}
