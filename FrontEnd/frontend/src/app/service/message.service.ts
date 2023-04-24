import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../model/message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private baseUrl="http://localhost:8080/api/sendMessage"
  private messageListUrl = "http://localhost:8080/api/getMessage"

  constructor(private httpClient: HttpClient) { }

  sendMessage(message:Message): Observable<Object>{
    console.log(message);
    return this.httpClient.post(`${this.baseUrl}`,message);
  }

  public getMessage(): Observable<Message[]>{
    return this.httpClient.get<Message[]>(`${this.messageListUrl}`);
  }
}
