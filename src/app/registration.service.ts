import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  loginClientFromRemote(client: Client) {
    throw new Error('Method not implemented.');
  }
  
  constructor(private _http : HttpClient) { }
  public loginClientRemote(client :Client):Observable<any>{
      return this._http.post("http://localhost:8080/login",client);
  }

  public registerClientFromRemote(client :Client):Observable<any>{
    return this._http.post("http://localhost:8080/registerclient",client);
}

}
