import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  _url ='';
  constructor(private http:HttpClient) { }

  userSignup(user:any)
  {
    return this.http.post<any>(this._url,user);
  }
}
