import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  [x: string]: any;
  constructor(private _signupservice : SignupserviceService) { }

  ngOnInit(): void {
  }

  getUserSignupDetails(value:any)
  {
    this._signupservice.userSignup(this.value)
    .subscribe(
      data => {
        alert("User Signed in successfully!")
      }
     
    )
    }
  }
