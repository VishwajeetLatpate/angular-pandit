import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookingParams } from '../booking-params';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  bookingParams =new BookingParams;
  public vidhiName: string = "";
  public data = [];
  public noData: any;
  public results = [];
  public clientId: number;
  public vidhiPanditId:number;
  public bookingData =[];
  public bookingResult =[];
 
  public vidhiOptions = [
    { id: 0, name: "Satyanarayan" },
    { id: 1, name: "Vastu Puja" },
    { id: 2, name: "Durga Puja" },
    { id: 3, name: "Vivah Puja" },
    { id: 4, name: "Laxmi Puja" },
    { id: 5, name: "Ghat Puja" },
    { id: 6, name: "Shradh" },
  ];

  map: any;
  
  constructor(private api: RegistrationService,private _router : Router,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.clientId = params["clientId"];
      console.log(this.clientId);
    });
  }

  getAll() {
    // VidhiName will be updated in model when selection is changed 
    // and available as this.vidhiName 
    this.api.getPanditFromRemote(this.vidhiName).subscribe((results) => {
      this.data = results;
      console.log(this.data);
      console.log('JSON Response = ', JSON.stringify(results));
    })
  }

  ngOnInit() {
   
  }


gotobooking(vidhiPanditId){
    
  
 
    console.log(vidhiPanditId);

     this.bookingParams.clientId=this.clientId;
     this.bookingParams.vidhiPanditId=vidhiPanditId;

    
 
  
    this.api.postBooking(this.bookingParams).subscribe(
      ()=>{
            console.log("responce received");
      })
  

    }
    getAllBooking(){
 this.api.getBookingFromRemote(this.clientId).subscribe(
  (bookingResult)=>{
    this.bookingData=bookingResult;
    console.log(this.bookingData);
  } 
 ) 

}



}
