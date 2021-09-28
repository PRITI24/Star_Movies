import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { LoginserviceService } from '../loginservice.service';
=======

>>>>>>> Stashed changes
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< Updated upstream
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
=======

  constructor() { }

  ngOnInit(): void {
  }
>>>>>>> Stashed changes

}
