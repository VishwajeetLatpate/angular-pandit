import { Component, OnInit } from '@angular/core';
import { Pandit } from '../pandit';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
pandit =new Pandit();
 msg='';
 public data = [];
 public noData: any;
 public results = [];
  map: any;
  constructor( private api: RegistrationService ) { }

  getAll() {
    this.api.getPanditFromRemote().subscribe((results) =>  {
      this.data = results;
      console.log(this.data);
      console.log('JSON Response = ', JSON.stringify(results));
    })
  }

  ngOnInit() {
  }
 
  
}
