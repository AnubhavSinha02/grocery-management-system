import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../service/register.service';
import { User } from '../user/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new User();
  msg='';
  constructor(private _service:RegisterService,private _router:Router) { }

  ngOnInit() {
  }

}
