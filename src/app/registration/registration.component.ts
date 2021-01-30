import { Component,OnInit } from '@angular/core';
import {Client} from '../client';
import {RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl:    './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 
  client =new Client();
  msg='';
  
  constructor(private _service: RegistrationService,private _router : Router) { }
  
  ngOnInit() {
    
  }

  registerClient(){
    this._service.registerClientFromRemote(this.client).subscribe(
      data=> {
         console.log("Response received");
         this._router.navigate(['/login'])
      } ,
      
      error =>{  
        console.log("error occured");
       this.msg=error.error;

      }
    )
  }
gotologin(){
  this._router.navigate(['/login'])

}

}
