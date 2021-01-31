import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Client } from './client';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BookingParams } from './booking-params';
import { Pandit } from './pandit';
import { VidhiParams } from './vidhi-params';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
   
/* 
getAll(): Observable<any> {
    return this.http.get(this.api)*/  
  constructor(private _http : HttpClient) { }
  public loginClientRemote(client :Client):Observable<any>{
      return this._http.post("http://localhost:8080/login",client);
  }

  public registerClientFromRemote(client :Client):Observable<any>{
    return this._http.post("http://localhost:8080/registerclient",client);
}

 public getPanditFromRemote(vidhiName :String) :Observable<any>{
  return this._http.get(`http://localhost:8080/pandit?vidhiName=${vidhiName}`)
  .pipe(
    catchError(this.handleError)
  );
 }
 private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.log(error.error.message)

  } else {
    console.log(error.status)
  }
  return throwError(
    console.log('Something is wrong!'));
};

public postBooking(bookingParams:BookingParams):Observable<any> {
  return this._http.post("http://localhost:8080/booking",bookingParams)
}
 
public getBookingFromRemote(clientId:Number):Observable<any>{
  return this._http.get(`http://localhost:8080/booking?clientId=${clientId}`)
}

registerPanditFromRemote(pandit: Pandit) {
  return this._http.post("http://localhost:8080/post-pandit",pandit);
}

loginPanditRemote(pandit: Pandit) {
  return this._http.post("http://localhost:8080/login-pandit",pandit);
}

public postVidhiByPandit(vidhiParams:VidhiParams):Observable<any> {
  return this._http.post("http://localhost:8080/vidhi-pandit",vidhiParams)
}

}

