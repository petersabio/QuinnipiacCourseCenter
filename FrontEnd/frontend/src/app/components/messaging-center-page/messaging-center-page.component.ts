import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-messaging-center-page',
  templateUrl: './messaging-center-page.component.html',
  styleUrls: ['./messaging-center-page.component.css']
})
export class MessagingCenterPageComponent implements OnInit {
 
  message:Message = new Message();
  messages!: Message[]
  username!: String;
  activeUserMessages!: Array<Message>;

  constructor(private messageService: MessageService){}

  ngOnInit(): void {
    this.username = localStorage.getItem("activeUser")!;
    this.messageService.getMessage().subscribe((data: Message[]) => {
    console.log(data);
    this.messages = data;
    this.activeUserMessages = new Array<Message>();
    this.filterMessagesByUser();
   })
  }

  //sends input message to DB
  messageSend(){
    this.message.studentName = localStorage.getItem("activeUser")!;
    this.message.advisorName = "advisor";
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>{
      location.reload();  //reloads page on submit so that new message shows up
    },error=> alert("message not sent")); //error if message not sent
  }

  //filters messages by active user and advisor
  filterMessagesByUser(){
    for(var message of this.messages){
      if(message.studentName == this.username || message.studentName == "advisor" && message.advisorName == this.username){
        this.activeUserMessages.push(message);
      }
    }
  }

}
