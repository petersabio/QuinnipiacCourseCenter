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

  messageSend(){
    this.message.studentName = localStorage.getItem("activeUser")!;
    this.message.advisorName = "advisor";
    console.log(this.message);
    this.messageService.sendMessage(this.message).subscribe(data =>{
      location.reload();
    },error=> alert("message not sent"));
  }

  filterMessagesByUser(){
    for(var message of this.messages){
      if(message.studentName == this.username || message.studentName == "advisor" && message.advisorName == this.username){
        this.activeUserMessages.push(message);
      }
    }
  }

  // filterPlannedCoursesByUser() {
  //   for (var PlannedCourse of this.plannedCourses) {
  //     if (PlannedCourse.userName == this.username && PlannedCourse.semester != "Freshman" && PlannedCourse.semester != "Sophmore" && PlannedCourse.semester != "Junior" && PlannedCourse.semester != "Senior") {
  //       this.activeUserPlannedCourses.push(PlannedCourse);
  //     }
  //   }
  //   console.log("active user planned courses");
  //   console.log(this.activeUserPlannedCourses);
  // }


}
