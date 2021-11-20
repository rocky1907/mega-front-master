import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlLogin:string='http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  login(user:User):Observable<any>{
    return this.http.post(this.urlLogin,user);
  }
}
