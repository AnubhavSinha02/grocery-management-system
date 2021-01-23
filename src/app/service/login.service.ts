import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  
  public loginUserFromRemote(user:User):Observable<any>{
      return this._http.post("http://localhost:8080/login",user)
  }
}