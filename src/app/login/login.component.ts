import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   client = new Client();
   msg='';
  constructor(private _service: RegistrationService,private _router : Router) { }
  
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginClientRemote(this.client).subscribe(
      ()=> {
         console.log("Response received");
         this._router.navigate(['/loginsuccess'])
      } ,
      
      () =>{  
        console.log("error occur ");
        this.msg="Bad Credentials,please enter valid Email ID and Password ";
      }
    )
  }

  gotoregistration(){
    this._router.navigate(['/registration'])

  }

}
