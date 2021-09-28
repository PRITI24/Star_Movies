import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  [x: string]: any;

  constructor(private _loginservice : LoginserviceService) { }

  ngOnInit(): void {
  }
  getUserLoginDetails(value:any)
  {
    this._loginservice.userlogin(this.value)
    .subscribe(
      data => {
        alert("User Logged in successfully!")
      }
     
    )
  }


  

}