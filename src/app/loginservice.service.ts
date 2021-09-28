import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  _url ='';
  constructor(private http:HttpClient) { }

  userlogin(user:any)
  {
    return this.http.post<any>(this._url,user);
  }
}
