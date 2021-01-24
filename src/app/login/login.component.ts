import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new User();
  msg='';
  constructor(private _service:LoginService,private router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{
        console.log("response received");
        this.router.navigateByUrl('/home');
      },
      error=>{
        console.log("exception occured");
        this.msg="Bad credential,Please enter valid email address and password!!!"
    }
      
    )
  }

}
