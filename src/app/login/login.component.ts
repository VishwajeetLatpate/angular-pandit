import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Client } from '../client';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   client = new Client();
   msg='';
   
   public noData: any;
   public results;
  constructor(private _service: RegistrationService,private _router : Router) { }
  
  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginClientRemote(this.client).subscribe(
      (results)=> {
        let navigationExtras: NavigationExtras = {
          queryParams: {
              "clientId": `${results.clientId}`,
              
          }
      };
        
         this._router.navigate(['/loginsuccess'],navigationExtras)
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
