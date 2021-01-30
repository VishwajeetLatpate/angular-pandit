import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pandit } from '../pandit';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-pandit-registraion',
  templateUrl: './pandit-registraion.component.html',
  styleUrls: ['./pandit-registraion.component.css']
})
export class PanditRegistraionComponent implements OnInit {
pandit =new Pandit();
msg=''; 
  constructor(private _service: RegistrationService,private _router : Router) { }

  panditLogin(){
    this._router.navigate(['/pandit-login'])

  }

  ngOnInit(): void {
  }
  registerPandit(){
    this._service.registerPanditFromRemote(this.pandit).subscribe(
      data=> {
         console.log("Response received");
         this._router.navigate(['/pandit-login'])
      } ,
      
      error =>{  
        console.log("error occured");
       this.msg=error.error;

      }
    )
  }
}
