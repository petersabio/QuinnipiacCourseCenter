import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private baseUrl= "http://localhost:8080/api/login";
  onLoginEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) { }

  public loginUser(user: User):Observable<object>{
    //console.log(user)
    return this.httpClient.post(`${this.baseUrl}`,user);

  }

  displayNavBar() {
    this.onLoginEvent.emit(true);
  }

  getEmittedValue() {
    return this.onLoginEvent;
  }
}
