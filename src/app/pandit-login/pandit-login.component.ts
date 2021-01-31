import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Pandit } from '../pandit';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-pandit-login',
  templateUrl: './pandit-login.component.html',
  styleUrls: ['./pandit-login.component.css']
})
export class PanditLoginComponent implements OnInit {
  pandit=new Pandit();
  msg='';

  public noData: any;
   public results;
  constructor(private _service: RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }

  loginPandit(){
    this._service.loginPanditRemote(this.pandit).subscribe(
      (results)=> {
   
        let navigationExtras: NavigationExtras = {
          queryParams: {
            "panditId" :  results['id']          
          }
      };

        console.log("Results");
        console.log(results);
         this._router.navigate(['/panditsuccess'],navigationExtras)
      } ,
      
      () =>{  
        console.log("error occur ");
        this.msg="Bad Credentials,please enter valid Email ID and Password ";
      }
    )
  }

  
  gotoPanditRegistration(){
    this._router.navigate(['/pandit-registration'])

  }

}
