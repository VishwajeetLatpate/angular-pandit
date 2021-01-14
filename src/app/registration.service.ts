import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Client } from './client';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

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

 public getPanditFromRemote():Observable<any>{
  return this._http.get("http://localhost:8080/pandit?vidhiName=Satyanarayan")
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


}
