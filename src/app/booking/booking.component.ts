import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

public clientId :Number;
  constructor(private api:RegistrationService,private _router : Router,private route: ActivatedRoute) { }
  
 



  ngOnInit(): void {
  }
  
}
