import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    email1:'',
    number1:'',
  password1:'',
  password2:''
  }
  constructor(private router:Router,private authServices:AuthService) { }

  ngOnInit(): void {
  }
signupUser()
{
  this.authServices.signupUser(this.user);
    alert("success");
    this.router.navigate(['/login']);
}
}
