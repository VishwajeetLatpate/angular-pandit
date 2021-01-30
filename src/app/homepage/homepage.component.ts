import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private _router : Router) {}

  ngOnInit(): void {
    
  }
  Plogin(){
    this._router.navigate(['/pandit-login']);
  }
  cregistration(){
    this._router.navigate(['/registration']);
  }

  clogin(){
    this._router.navigate(['/login']);
  }
  aboutUs(){
    this._router.navigate(['/aboutus']);
  }
  contactuspage(){
    this._router.navigate(['/contactuspage']);

  }
  navgrahavichar(){
    this._router.navigate(['/navgrahavichar']);

  }
  pregistration(){
    this._router.navigate(['/pandit-registration']);
  }
}
